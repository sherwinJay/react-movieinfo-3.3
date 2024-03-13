import { ProductionCompanyProps } from '@/types';
import { FC, ReactNode } from 'react'

const ProductionCompany: FC<ProductionCompanyProps> = ({ productionCompanies }) => {

  const slicedProductionCompany = productionCompanies?.slice(0, 4)
  const getCompanies = slicedProductionCompany?.map((company) => (
    <p className="text-[14px] md:text-[16px]" key={company.id}>
      {company.name}
    </p>
  )) as ReactNode

  return (
    <div>
      <h4 className="text-[#e11d48] font-bold text-[16px] md:text-[18px]">
        Production Companies
      </h4>
      <>
        {slicedProductionCompany.length > 0 ? getCompanies : <p> - </p>}
      </>
    </div>
  )
}

export default ProductionCompany