// 'use server'
import { ImageLoader } from "next/image";
import { customImgSource, movieDbImgURL } from "../constant";

export const imgixLoader: ImageLoader = ({ src, width, quality }) => {
  const url = new URL(`${movieDbImgURL}/${src}`);
  const params = url.searchParams;
  params.set('auto', params.getAll('auto').join(',') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());
  
  if (quality) {
    params.set("q", quality.toString());
  }

  // console.log('imgix: ', url)

  return url.href;
}