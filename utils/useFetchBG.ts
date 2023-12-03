import { useCallback, useState } from "react";
import { normalizeImgixUrl } from "./imgixLoader";

export const useFetchBG = () => {
  const [background, setBackground] = useState<string>('')

  // change background when hovering from the recommendation thumbnails
  const pointerEvent = useCallback((imageId: string | null | undefined) => {
    if(background){
      setBackground(`${normalizeImgixUrl(`/t/p/w1280${imageId}`)}`)
    }
  }, [background])

  return {
    background,
    setBackground,
    pointerEvent,
  }

}