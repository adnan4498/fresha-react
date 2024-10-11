import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import settingSubCategoryName from '../../data/categoryData/categoryAndSubCategory'

const SubCategories = ({ salons }) => {

    let navigate = useNavigate()

    let allCitySalonsServiceNames = []

    const getServiceNamesFromSalon = () => {
        let getServices = salons.map(item => item.services)
        let serviceTitles = []

        for (let items in getServices) {
            for (let titles in getServices[items]) {
                serviceTitles.push(titles)
            }
        }

        let servicesByThereTitles = []

        for (let i = 0; i < getServices.length; i++) {
            for (let j = 0; j < serviceTitles.length; j++) {
                servicesByThereTitles.push(getServices[i][serviceTitles[j]])
            }
        }

        let servicesNames = []

        for (let i = 0; i < servicesByThereTitles.length; i++) {
            for (let j = 0; j < servicesByThereTitles[i].length; j++) {
                servicesNames.push(servicesByThereTitles[i][j].name)
            }
        }

        removingDuplicates(servicesNames)
    }

    getServiceNamesFromSalon()

    function removingDuplicates(servicesNames) {
        let removeDuplicates = new Set(servicesNames)

        // make Set object to array
        // populating the global variable allCitySalonsServicesName
        for (let i of removeDuplicates) {
            allCitySalonsServiceNames.push(i)
        }
    }

    const generateSubCategoryLink = (subCategory) =>{
        let getCategory = settingSubCategoryName(subCategory)

        let city = "karachi"

        let subCategoryAndCity = [subCategory , city]

        let joined = subCategoryAndCity.join(" ")

        console.log(joined, "ghhh")

        let subCategoryUrl = `/dynamic-category/${getCategory}/subCategoryRouteKey/${joined}`

        console.log(getCategory, "gg")

        navigate(subCategoryUrl)
    }

    console.log(allCitySalonsServiceNames, "all city salons")

    return (
        <div className='grid grid-flow-col grid-rows-6 gap-3 w-[1700px]'>
            {allCitySalonsServiceNames.map((item, index) => (
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