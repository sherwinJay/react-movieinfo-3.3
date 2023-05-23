import lqip from "lqip-modern";
import { useEffect, useState } from "react";

const useBlurImage = function<T>(src: string) {

  const [blurBg, setblurBg ] = useState(src);

  useEffect(() => {
    const controller =  new AbortController()

    const fetchData = async () => {
      try {
        const imgData = await fetch(src);
        // const arrayBufferData = await imgData.arrayBuffer();
        // const lqipData = await lqip(Buffer.from(arrayBufferData));
        const lqipData = Buffer.from(await imgData.arrayBuffer())
        const previewImage = await lqip(lqipData, { outputFormat: "jpeg" });
  
        setblurBg(previewImage.metadata.dataURIBase64)
  
      } catch (err) {
        // console.log(err)
      }
    }
    
    fetchData()

    return () => {
			controller.abort()
		}

  }, [src])

  return { blurBg }

}

export default useBlurImage