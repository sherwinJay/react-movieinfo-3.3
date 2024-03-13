import { queryClient } from './../components/TanstackProvider/TanstackProvider';
import { useCallback, useState } from "react";
import { normalizeImgixUrl } from "./imgixLoader";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useFetchBG2 = (url: string) => {
  const [background, setBackground] = useState<string>(url)

  const queryClient = useQueryClient()

  let bgUrl = url

  const { data, refetch } = useQuery({
    queryKey: ['recommendedBg', url], 
    queryFn: () => {
      return bgUrl
    }
  })

  const { mutate } = useMutation({
    mutationFn: (data: string | null | undefined) => bgUrl = `${normalizeImgixUrl(`/t/p/w1280${data}`)}`,
    onSuccess: () => {
      // queryClient.invalidateQueries({queryKey: ['recommendedBg'], refetchType: 'none'})
      refetch()
    }
  })

  // change background when hovering from the recommendation thumbnails
  const pointerEvent = useCallback((imageId: string | null | undefined) => {
    if(background){
      setBackground(`${normalizeImgixUrl(`/t/p/w1280${imageId}`)}`)
    }
  }, [background])

  return {
    data,
    bgUrl,
    mutate
  }

}