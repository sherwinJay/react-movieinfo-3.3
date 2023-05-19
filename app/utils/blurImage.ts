import lqip from "lqip-modern";
import { normalizeUnsplashUrl } from "./unsplashLoader";

export const getBlurImages = async (src: string) => {
  // In reality, this path would come from a database or some external data store, but we are hardcoding it here
  // const url = "https://image.tmdb.org/t/p/w780//f18rGcLlawKjNC5KRh36S0mvRlY.jpg"
  const url = normalizeUnsplashUrl(src.substring(22))
  
  // console.log(url)

  const imgData = await fetch(src);
  // const arrayBufferData = await imgData.arrayBuffer();
  // const lqipData = await lqip(Buffer.from(arrayBufferData));
  const lqipData = Buffer.from(await imgData.arrayBuffer())
  const previewImage = await lqip(lqipData, { outputFormat: "jpeg" });

  return {
    props: {
      image: {
        src: url.href,
        width: previewImage.metadata.originalWidth,
        height: previewImage.metadata.originalHeight,
        blurDataURL: previewImage.metadata.dataURIBase64,
      },
    },
  };
};