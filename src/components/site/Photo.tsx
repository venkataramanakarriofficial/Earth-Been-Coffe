'use client';
import {useEffect, useState} from 'react';
import {photography, type PhotoKey} from '@/data/photography';

type Props = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  photo: PhotoKey;
};
/** Try local downloaded photograph, then authentic remote original, then bundled fallback. */
export default function Photo({photo,alt,loading='lazy',...props}:Props) {
  const data = photography[photo];
  const [stage,setStage] = useState(0);
  useEffect(()=>setStage(0),[photo]);
  const src = stage === 0 ? `/images/real/${data.file}` : stage === 1 ? data.remote : data.fallback;
  return <img {...props} key={`${photo}-${stage}`} src={src} alt={alt||''} loading={loading} decoding="async"
    onError={()=>setStage(s=>Math.min(2,s+1))}/>;
}
