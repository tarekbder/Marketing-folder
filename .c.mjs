import { compile } from '@mdx-js/mdx';
import fs from 'fs';
const src = fs.readFileSync(process.argv[2], 'utf8').replace(/^---[\s\S]*?---\n/, '');
try {
  const out = String(await compile(src, { jsx: true }));
  out.split('\n').forEach((l, i) => { if (/_components;|= _components|const \{/.test(l)) console.log(i + 1, l); });
} catch (e) { console.log('ERR', e.message); }
