import { FC, use, useState } from 'react'
import { ActorFilmThumbnails, Filmography, ImgComponent, NoImage, PersonalInformation, SocialMediaAccounts } from '@/components'
import { getBlurImages } from '@/utils/blurImage'
import { movieDbImgURL } from '@/constant'
import { cn, sliceByDot } from '@/lib/utils'
import { ActorInformationTypes } from '@/types'

const ActorInformation = ({ actorData, actorCredits, actorSocialMediaAccounts }: ActorInformationTypes) => {

  const defaultImage = '/dxSDWkiVaC6JYjrV3XRAZI7HOSS.jpg'
  const { props: { image } } = use(getBlurImages(`${movieDbImgURL}/t/p/w342/${actorData.profile_path ? actorData.profile_path : defaultImage}`))
  const biography = sliceByDot(actorData.biography!)

  return (
    <div className='w-[100%] m-auto p-[1.5em] grid grid-cols-1 grid-customRow3 gap-[1.5em] lg:grid-cols-4 lg:p-[3em] xl:w-[1200px]'>
      <div className='lg:col-start-1 lg:col-end-2'>
        {actorData.profile_path ? (
          <ImgComponent
            className='rounded-xl w-[170px] flex justify-self-center md:w-full'
            alt={actorData.name}
            src={image.src}
            width={image.width}
            height={image.height}
            placeholder='blur'
            blurDataURL={image.blurDataURL}
          />
        ) : (
          <NoImage
            className='hidden md:grid md:content-center bg-gray-400 place-content-center md:min-w-[150px] md:h-[231px] rounded-lg'
            width={40}
            height={40}
          />
        )}

        <h1 className='text-center mt-7 md:hidden font-bold text-2xl mb-4'>{actorData.name}</h1>

        <SocialMediaAccounts actorSocialMediaAccounts={actorSocialMediaAccounts} />

        <PersonalInformation
          birthday={actorData?.birthday}
          birthPlace={actorData.place_of_birth!}
          otherNames={actorData.also_known_as}
          dayOfDeath={actorData?.deathday}
        />
      </div>

      <section className='lg:col-start-2 lg:col-end-5'>
        <h1 className='hidden md:block font-bold text-3xl mb-7'>{actorData.name}</h1>
        <h3 className='font-semibold text-lg mb-2'>Biography</h3>
        {actorData.biography!.length > 0 ? (
          <div className='text-sm leading-6'>
            <p>{biography.before}</p>
            <p className='mt-5'>{biography.after}</p>
          </div>
        ) : (
          <p className='text-sm'>{`We don't have a biography for ${actorData.name}.`}</p>
        )}

        <h3 className='mt-8 mb-4 font-semibold text-lg'>Known For</h3>
        <ActorFilmThumbnails actorCredits={actorCredits} />

        <h3 className='mt-12 mb-2 font-semibold text-lg'>Filmography</h3>
        <Filmography actorCredits={actorCredits} />
      </section>
    </div>
  )
}

export default ActorInformation