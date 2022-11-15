import { useEffect, useState } from 'react';   {/*react state*/}

import axios  from 'axios'; {/* axios */}

import Movie from './Movie'; {/*movie component */}

import {MdChevronLeft, MdChevronRight} from "react-icons/md" /*react icons*/

const Row = ({title, fetchURL, rowID}) => {

    const [movies, setMovies] = useState([]); {/*movies ROW state*/}

        /*fetching with axiosaq*/ 
    useEffect(() => {
        axios.get(fetchURL).then(resp => {
            setMovies(resp.data.results)
        })
    },[fetchURL])

    /* ROW CAROUSEL SLIDE LEFT AND SLIDE RIGHT FUNCTIONS*/
        {/* (rowID ) for each ROW slide*/ }
    const slideLeft = () => {
        let slider = document.getElementById("slider" + rowID)    
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        let slider = document.getElementById("slider" + rowID) 
        slider.scrollLeft = slider.scrollLeft + 500
    }

  return (

    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className=" flex items-center group">
             {/*Slide left button*/}
        <MdChevronLeft
        onClick={slideLeft}
         size={40} 
         className="bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 text-black cursor-pointer z-10 hidden  group-hover:block"/> 
          {/* (rowID ) for each ROW slide*/ }
            <div id={'slider' + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
             
                {movies.map((item, index) => (
                <Movie key={index} item={item}  />

                ))}
            </div>´
             {/*Slide right button*/}
        <MdChevronRight
        onClick={slideRight} 
        size={40} 
        className="bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 text-black cursor-pointer z-10 hidden group-hover:block"/>
           
        </div>
    </>
  )
}

export default Row