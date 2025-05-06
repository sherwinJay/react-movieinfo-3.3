import { PersonalInformationProps } from '@/types'
import moment from 'moment'
import { FC } from 'react'

const PersonalInformation: FC<PersonalInformationProps> = ({ birthday, birthPlace, otherNames, dayOfDeath }) => {

  const birthDate = moment(birthday)

  return (
    <>
      <h3 className='mt-7 md:mt-5 mb-4 font-semibold text-lg text-flamingo-300'>
        Personal Info
      </h3>
      <div className='text-sm flex flex-col gap-5'>
        <div>
          <p className='font-semibold mb-1 text-flamingo-300'>Birthday</p>
          <div className='flex gap-1'>
            <p>{birthday ? `${moment(birthday).format('MMMM D, YYYY')}` : '-'}</p>
            {!dayOfDeath && birthday && (`(${moment().diff(birthDate, 'years')} years old)`)}
          </div>

        </div>
        {dayOfDeath && (
          <div>
            <p className='font-semibold mb-1 text-flamingo-300'>Day of Death</p>
            <div className='flex gap-1'>
              <p>{dayOfDeath}</p>
              <p>{`(${moment(dayOfDeath).diff(birthDate, "years")} years old)`}</p>
            </div>
          </div>
        )}
        <div>
          <p className='font-semibold mb-1 text-flamingo-300'>Place of Birth</p>
          <p>{birthPlace ? birthPlace : '-'}</p>
        </div>
        {otherNames.length > 0 && (
          <div>
            <p className='font-semibold mb-1 text-flamingo-300'>Also Known As</p>
            {otherNames.map((name, idx) => (
              <p key={idx} className='mb-2'>{name}</p>
            ))}
          </div>
        )}
      </div>
    </>

  )
}

export default PersonalInformation