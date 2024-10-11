import React from "react";
import { Link, useLocation, useMatches } from "react-router-dom";

const BreadCrumbs = () => {
  let matches = useMatches();

  const { category, city, subCategory, name } = matches[0].params;

  let bread = [category, city, subCategory, name];

  return (
    <>
      <div className="text-sm flex gap-2">
        <div className="w-16">
          <Link to={"/"}>Home - </Link>
        </div>
        <ul className="whitespace-nowrap overflow-y-scroll flex items-center gap-[6px]">
          {bread.map((item, index) => (
            <>
              <li className="text-sm " key={index}>
                {item != undefined && (
                  <Link
                    to={
                      item == category
                        ? `/dynamic-category/${category}`
                        : item == city
                        ? `/dynamic-category/${category}/cityRouteKey/${city}`
                         : item == subCategory
                        ? `/dynamic-category/${category}/subCategoryRouteKey/${subCategory}`
                        : ""
                    }
                  >
                    {item}
                  </Link>
                )}
              </li>
              {item != undefined && <li> - </li>}
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BreadCrumbs;
