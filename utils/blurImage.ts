import lqip from "lqip-modern";
import { normalizeImgixUrl } from "./imgixLoader";

export const getBlurImages = async (src: string) => {

  const url = normalizeImgixUrl(src.substring(22))
  const imgData = await fetch(src);
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