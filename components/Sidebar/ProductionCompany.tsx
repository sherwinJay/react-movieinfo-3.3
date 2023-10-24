import { ProductionCompanyData } from '@/types';
import { FC } from 'react'

interface ProductionCompanyProps {
  productionCompanies: ProductionCompanyData[]
}

const ProductionCompany: FC<ProductionCompanyProps> = ({productionCompanies}) => {

  const slicedProductionCompany = productionCompanies?.slice(0,4);
  const getCompanies = slicedProductionCompany?.map((company) => (
    <p className="text-[14px] md:text-[16px]" key={company.id}>
      {company.name}
    </p>
  ))
  
  return (
    <div>
      <h4 className="text-[#e11d48] font-bold text-[16px] md:text-[18px]">
        Production Companies
      </h4>
      <>
        { slicedProductionCompany.length > 0 && getCompanies }
        { slicedProductionCompany.length === 0 && (<p> - </p>) }
      </>
    </div>
  )
}

export default ProductionCompany