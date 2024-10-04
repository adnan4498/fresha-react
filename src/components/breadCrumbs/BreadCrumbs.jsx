import React from "react";
import { Link, useLocation, useMatches } from "react-router-dom";

const BreadCrumbs = () => {
  let matches = useMatches();

  const { category, city, name } = matches[0].params;

  // let crumbs = matches
  //     // first get rid of any matches that don't have handle and crumb
  //     .filter((match) => Boolean(match.handle?.crumb))
  //     // now map them into an array of elements, passing the loader
  //     // data to each one
  //     .map((match) => match.handle.crumb(match.data));

  // console.log(category, "the categoy");
  // console.log(city, "the city");
  // console.log(name, "the name");

  let bread = [category, city, name];

  console.log(bread, "bread");

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

      <div className="text-xs flex gap-2">
        <div>
          <Link to={"/"}>Home - </Link>
        </div>
        <ul className="whitespace-nowrap overflow-hidden flex items-center gap-[6px]">
          {bread.map((item, index) => (
            <>
              <li className="text-xs " key={index}>
                {item != undefined && (
                  <Link
                    to={
                      item == category
                        ? `/dynamic-category/${category}`
                        : item == city
                        ? `/dynamic-category/${category}/${city}`
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
