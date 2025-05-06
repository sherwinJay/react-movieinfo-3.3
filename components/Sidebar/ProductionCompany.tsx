import { ProductionCompanyProps } from '@/types';
import { FC, ReactNode } from 'react'

const ProductionCompany: FC<ProductionCompanyProps> = ({ productionCompanies }) => {

  const slicedProductionCompany = productionCompanies?.slice(0, 4)

  return (
    <div>
      <h4 className="sidebar_title">
        Production Companies
      </h4>
      <>
        {slicedProductionCompany.length > 0 ? (
          slicedProductionCompany?.map((company) => (
            <p className="sidebar_text" key={company.id}>
              {company.name}
            </p>
          ))
        ) : (
          <p> - </p>
        )}
      </>
    </div>
  )
}

export default ProductionCompany