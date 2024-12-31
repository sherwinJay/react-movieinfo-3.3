import { movieDbImgURL } from "@/constant"
import { useColor } from "color-thief-react"

export const useBgColor = (imageUrl: string) => {
  const testImage = `${movieDbImgURL}/t/p/w300/${imageUrl}&api_key=${process.env.MOVIE_DATABASE_ID}`
  const posterImage = `${movieDbImgURL}/t/p/w92${imageUrl}&api_key=${process.env.MOVIE_DATABASE_ID}`
  const { data, loading, error } = useColor(posterImage, "hex", {
    crossOrigin: "anonymous",
  })

  return {
    data,
    loading,
  }
}
