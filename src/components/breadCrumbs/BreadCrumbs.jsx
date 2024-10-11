import React from "react";
import { Link, useLocation, useMatches } from "react-router-dom";

const BreadCrumbs = () => {
  let matches = useMatches();

  const { category, city, subCategory, name } = matches[0].params;

  // let crumbs = matches
  //     // first get rid of any matches that don't have handle and crumb
  //     .filter((match) => Boolean(match.handle?.crumb))
  //     // now map them into an array of elements, passing the loader
  //     // data to each one
  //     .map((match) => match.handle.crumb(match.data));

  // console.log(category, "the categoy");
  // console.log(city, "the city");
  // console.log(name, "the name");

  let bread = [category, city, subCategory, name];

  // console.log(bread, "bread");

  return (
    <>
      {/* {matches.map((crumb, index) => (
        <>
          <div>
            <Link to={"/"}>
              <li> home</li>
            </Link>
          </div>
          <div>
            <li>- {crumb.params.category}</li>
          </div>
          </>
      ))} */}

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
