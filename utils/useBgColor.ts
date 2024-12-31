import { movieDbImgURL } from "@/constant"
import { useColor } from "color-thief-react"

export const useBgColor = (imageUrl: string) => {
  const imageData =
    imageUrl !== null ? imageUrl : "/vKDUmKO6F9bSKKyHhg7YGbgcEeF.jpg"
  const testImage = `${movieDbImgURL}/t/p/w300/${imageData}&api_key=${process.env.MOVIE_DATABASE_ID}`
  const posterImage = `${movieDbImgURL}/t/p/w92${imageData}&api_key=${process.env.MOVIE_DATABASE_ID}`

  const { data, loading, error } = useColor(posterImage, "hex", {
    crossOrigin: "anonymous",
  })

  return {
    data,
    loading,
  }
}

export function checkColorIsLight(color: string) {
  const hex = color.replace("#", "")
  const c_r = parseInt(hex.substring(0, 0 + 2), 16)
  const c_g = parseInt(hex.substring(2, 2 + 2), 16)
  const c_b = parseInt(hex.substring(4, 4 + 2), 16)
  const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000
  return brightness > 210
}
