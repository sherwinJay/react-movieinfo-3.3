import { SocialMediaAccountsTypes } from '@/types'
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'
import { FC } from 'react'


const SocialMediaAccounts: FC<{ actorSocialMediaAccounts: SocialMediaAccountsTypes }> = ({ actorSocialMediaAccounts }) => {

  return (
    <div className='mt-2 md:mt-5 flex justify-center items-center md:justify-start gap-3'>
      {actorSocialMediaAccounts?.facebook_id && (
        <a href={`https:facebook.com/${actorSocialMediaAccounts.facebook_id}`} target="_blank">
          <FacebookIcon />
        </a>
      )}
      {actorSocialMediaAccounts.twitter_id && (
        <a href={`https:twitter.com/${actorSocialMediaAccounts.twitter_id}`} target="_blank">
          <TwitterIcon />
        </a>
      )}
      {actorSocialMediaAccounts.instagram_id && (
        <a href={`https:instagram.com/${actorSocialMediaAccounts.instagram_id}`} target="_blank">
          <InstagramIcon />
        </a>
      )}
      {actorSocialMediaAccounts.youtube_id && (
        <a href={`https:youtube.com/${actorSocialMediaAccounts.youtube_id}`} target="_blank">
          <YoutubeIcon />
        </a>
      )}
    </div>
  )
}



export default SocialMediaAccounts