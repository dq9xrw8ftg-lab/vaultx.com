#!/usr/bin/env python3
import argparse
import hashlib
import json
from pathlib import Path
from typing import Dict, List
import zipfile
from datetime import datetime, timezone


def sha256_file(path: Path) -> str:
    h = hashlib.sha256()
    with path.open('rb') as f:
        for chunk in iter(lambda: f.read(65536), b''):
            h.update(chunk)
    return h.hexdigest()


def collect_files(root: Path) -> List[Dict[str, object]]:
    files: List[Dict[str, object]] = []
    for path in sorted(root.rglob('*')):
        if path.is_dir():
            continue
        if '.git' in path.parts:
            continue
        rel = path.relative_to(root)
        files.append({
            'path': rel.as_posix(),
            'size': path.stat().st_size,
            'extension': path.suffix.lower(),
            'sha256': sha256_file(path),
        })
    return files


def extract_zip_files(root: Path, output_root: Path) -> List[Dict[str, object]]:
    extracted: List[Dict[str, object]] = []
    for zip_path in sorted(root.rglob('*.zip')):
        if '.git' in zip_path.parts:
            continue
        target_dir = output_root / zip_path.stem.replace(' ', '_')
        target_dir.mkdir(parents=True, exist_ok=True)

        try:
            with zipfile.ZipFile(zip_path) as zf:
                zf.extractall(target_dir)
            extracted.append({
                'source': zip_path.relative_to(root).as_posix(),
                'extracted_to': target_dir.relative_to(root).as_posix(),
                'members': len(zf.infolist()),
            })
        except Exception as exc:
            extracted.append({
                'source': zip_path.relative_to(root).as_posix(),
                'extracted_to': target_dir.relative_to(root).as_posix(),
                'error': str(exc),
            })
    return extracted


def build_manifest(root: Path) -> Dict[str, object]:
    files = collect_files(root)
    zip_records = extract_zip_files(root, root / 'automation_output' / 'extracted_zips')

    ext_counts: Dict[str, int] = {}
    for item in files:
        ext = str(item['extension']) or '(none)'
        ext_counts[ext] = ext_counts.get(ext, 0) + 1

    key_files = [
        'package.json',
        'vite.config.ts',
        'src/App.tsx',
        'src/main.tsx',
        'src/index.css',
        'README.md',
        '.env.example',
        '.github/workflows/vercel-deploy.yml',
    ]

    present = []
    for file_name in key_files:
        if (root / file_name).exists():
            present.append(file_name)

    manifest = {
        'generated_at_utc': datetime.now(timezone.utc).isoformat(),
        'root_name': root.name,
        'file_count': len(files),
        'zip_count': len(zip_records),
        'extension_counts': ext_counts,
        'key_files_present': present,
        'files': files,
        'zip_extraction': zip_records,
    }
    return manifest


def write_report(manifest: Dict[str, object], output_file: Path) -> None:
    output_file.parent.mkdir(parents=True, exist_ok=True)
    with output_file.open('w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=2)


def main() -> None:
    parser = argparse.ArgumentParser(description='Create a project intake manifest and extract zip archives.')
    parser.add_argument('--root', type=str, default='.', help='Root directory to scan')
    args = parser.parse_args()

    root = Path(args.root).resolve()
    manifest = build_manifest(root)
    output = root / 'automation_output' / 'project_manifest.json'
    write_report(manifest, output)

    print(f'Project manifest written to: {output}')
    print(f'Files scanned: {manifest["file_count"]}')
    print(f'ZIP archives processed: {manifest["zip_count"]}')


if __name__ == '__main__':
    main()
