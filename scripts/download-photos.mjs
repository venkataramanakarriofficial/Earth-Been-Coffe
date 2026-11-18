/** Caches licensed, real photographs at install/build time, no API key required.
 * Set STRICT_PHOTOS=1 to fail the build when any download is unavailable.
 * Run: npm run photos:download
 */
import {mkdir,stat,writeFile,rename,readFile} from 'node:fs/promises';
import {resolve,join} from 'node:path';
const root=resolve('public/images/real');
await mkdir(root,{recursive:true});
// IDs match src/data/photography.ts. See docs/REAL_PHOTOGRAPHY_SOURCES.md.
const photos={
 'barista-serving.jpg':'photo-1770123024494-776bc2d3836b',
 'barista-craft.jpg':'photo-1777600714584-8e8452389b9b',
 'ceramic-latte.jpg':'photo-1760687510681-2f0cdd1f1ebb',
 'matcha.jpg':'photo-1779381637013-30b00a2b7d5e',
 'hot-chocolate.jpg':'photo-1497048363455-6f3e84db1cae',
 'iced-coffee.jpg':'photo-1527156231393-7023794f363c',
 'cold-brew.jpg':'photo-1765690835487-8da60d318d0f',
 'cafe-interior.jpg':'photo-1780248347686-8437db00b375',
 'bakery-pastries.jpg':'photo-1769259180150-4a4528fcb222',
 'coffee-croissant.jpg':'photo-1769138886135-93d1dd8ac06a',
 'coffee-pastries.jpg':'photo-1754147910442-47abda520b0e',
 'coffee-bar.jpg':'photo-1501339847302-ac426a4a7cbb',
};
let ok=0,failed=[];
await Promise.all(Object.entries(photos).map(async ([filename,id])=>{
 const file=join(root,filename);
 try {
  if((await stat(file).catch(()=>null))?.size>15000){ok++;return;}
  const ctl=new AbortController();const timer=setTimeout(()=>ctl.abort(),15000);
  try {
   const url=`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=82&fm=jpg`;
   const response=await fetch(url,{signal:ctl.signal,headers:{'User-Agent':'EarthBeenCoffeeWebsite/1.0'}});
   if(!response.ok)throw new Error(`HTTP ${response.status}`);
   if(!response.headers.get('content-type')?.includes('image'))throw new Error('Not an image');
   const bytes=Buffer.from(await response.arrayBuffer());
   if(bytes.length<15000 || bytes.length>8_000_000)throw new Error('Unexpected image size');
   const tmp=`${file}.tmp`;await writeFile(tmp,bytes);await rename(tmp,file);ok++;
   console.log(`photo saved: ${filename} (${(bytes.length/1024).toFixed(0)} KB)`);
  }finally{clearTimeout(timer)}
 } catch(e) {failed.push(filename);console.warn(`photo unavailable: ${filename} (${e.message})`)}
}));
console.log(`Real photographs cached: ${ok}/${Object.keys(photos).length}.`);
if(failed.length){console.warn('Network fallback remains enabled for: '+failed.join(', '));if(process.env.STRICT_PHOTOS==='1')process.exitCode=1;}
