import { getActorCombinedCreditsData, getActorData, getActorSocialMediaData } from '@/services/api'
import ActorInformation from '@/components/ActorInformation'
import { ActorCombinedCreditsTypes, ActorTypes, SocialMediaAccountsTypes } from '@/types'

const ActorPage = async ({ params }: { params: { id: string } }) => {
  const actorData = await getActorData(params.id) as ActorTypes
  const actorCombinedCredits = await getActorCombinedCreditsData(params.id) as ActorCombinedCreditsTypes
  const socialMediaAccounts = await getActorSocialMediaData(params.id) as SocialMediaAccountsTypes

  return (
    <div>
      <ActorInformation
        actorData={actorData}
        actorCredits={actorCombinedCredits}
        actorSocialMediaAccounts={socialMediaAccounts}
      />
    </div>
  )
}

// Head tag
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}) {

  const actor = await getActorData(params.id) as ActorTypes

  return {
    title: `${actor.name} - Movie Information`,
    description: `${actor.biography}`,
  };
}

export default ActorPage