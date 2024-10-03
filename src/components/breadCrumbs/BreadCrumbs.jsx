import React from 'react'
import { Link, useLocation, useMatches } from 'react-router-dom';

const BreadCrumbs = () => {

    let matches = useMatches();
    // let crumbs = matches
    //     // first get rid of any matches that don't have handle and crumb
    //     .filter((match) => Boolean(match.handle?.crumb))
    //     // now map them into an array of elements, passing the loader
    //     // data to each one
    //     .map((match) => match.handle.crumb(match.data));

    // console.log(matches, "hi2")
    
    let getPathname = matches[0].pathname
    // console.log(getPathname, "hi2")

    let location = useLocation()

    console.log(location, "the location")
    console.log(matches, "the matches")

    for(let i = 0; i < getPathname.length; i++){
        
    }
    
    return (
        <ol className='flex gap-4 items-center'>
            {matches.map((crumb, index) => (
                <>
                    <Link to={"/"}><li> home</li></Link>
                    <li key={index}>- {crumb.params.category}</li>
                </>
            ))}
        </ol>

    )
}

export default BreadCrumbs