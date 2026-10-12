import {compile} from '@mdx-js/mdx';
import fs from 'fs';
const src=fs.readFileSync(process.argv[2],'utf8').replace(/^---[\s\S]*?---\n/,'');
const out=String(await compile(src,{jsx:true}));
console.log(out.split('\n').filter(l=>/const \{|_components/.test(l)).slice(0,5).join('\n'));
