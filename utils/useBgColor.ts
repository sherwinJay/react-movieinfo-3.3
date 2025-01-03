import { movieDbImgURL } from "@/constant"
import { useColor } from "color-thief-react"

export const useBgColor = (imageUrl: string) => {
  const imageData =
    imageUrl !== null ? imageUrl : "/vKDUmKO6F9bSKKyHhg7YGbgcEeF.jpg"
  const backdropImage = `${movieDbImgURL}/t/p/w300/${imageData}&api_key=${process.env.MOVIE_DATABASE_ID}`
  const posterImage = `${movieDbImgURL}/t/p/w92${imageData}&api_key=${process.env.MOVIE_DATABASE_ID}`

  const { data, loading, error } = useColor(posterImage, "hex", {
    crossOrigin: "anonymous",
  })

  return {
    data,
    loading,
  }
}

export function wc_hex_is_light(color: string) {
  const hex = color.replace("#", "")

  const c_r = parseInt(hex.substring(0, 0 + 2), 16)
  const c_g = parseInt(hex.substring(2, 2 + 2), 16)
  const c_b = parseInt(hex.substring(4, 4 + 2), 16)
  const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000
  return brightness > 170
}

export function hexToRGB(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return `rgba(${r},${g} ,${b},${alpha})`
  } else {
    return `rgba(${r},${g} ,${b})`
  }
}
