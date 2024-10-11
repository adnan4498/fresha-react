import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import settingSubCategoryName from '../../data/categoryData/categoryAndSubCategory'
import getCitySalonServices from '../../data/salondata/services/citySalonServices'

const SubCategories = ({ salons }) => {

    let navigate = useNavigate()

    let allCitySalonsServics = getCitySalonServices(salons)

    const generateSubCategoryLink = (subCategory) =>{
        let getCategory = settingSubCategoryName(subCategory)

        let city = "karachi"

        let subCategoryAndCity = subCategory + " " + city

        let subCategoryUrl = `/dynamic-category/${getCategory}/subCategoryRouteKey/${subCategoryAndCity}`

        console.log(subCategoryAndCity, "gg")

        navigate(subCategoryUrl)
    }
    
    return (
        <div className='grid grid-flow-col grid-rows-6 gap-3 w-[1700px]'>
            {allCitySalonsServics.map((item, index) => (
                <div onClick={() => generateSubCategoryLink(item)}>
                    <div>
                        {item}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SubCategories