import { useEffect, useState } from "react" //react state

import {AiOutlineClose} from "react-icons/ai" //react icons
import {MdChevronLeft, MdChevronRight} from "react-icons/md" //react icons

import { useNetflixContext } from "../context/netflixProvider"  //context

import { db } from "../firebase/firebase" //firebase
import { doc, updateDoc , onSnapshot } from 'firebase/firestore'; //firebase


const SavedShows = () => {

        const {user} = useNetflixContext();//context
        const [movies, setMovies] = useState([]); //movies state

      /* ROW CAROUSEL SLIDE LEFT AND SLIDE RIGHT FUNCTIONS*/
        const slideLeft = () => {
            let slider = document.getElementById("slider" )    
            slider.scrollLeft = slider.scrollLeft - 500
        }
        const slideRight = () => {
            let slider = document.getElementById("slider" ) 
            slider.scrollLeft = slider.scrollLeft + 500
        }

        useEffect(() => {
        onSnapshot(doc(db,"users", `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows)
        })
        },[user?.email])

        const movieRef = doc(db, "users", `${user.email}`)
        //delete saved show function ****
        const deleteShow = async (id) => {
            try {
                const result = movies.filter(item => item.id !== id)
                await updateDoc(movieRef,{
                savedShows:result,
                })
            } catch (error) {
                console.log(error)
            }
        }

  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
    <div className=" flex items-center group">
          {/*Slide left button*/}
    <MdChevronLeft
    onClick={slideLeft}
     size={40} 
     className="bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 text-black cursor-pointer z-10 hidden  group-hover:block"/> 

        <div id={'slider'} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">    
            {
            movies.map((item, id) => (
            <div key={id} className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer mx-2'>

            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
                <p className='flex justify-center items-center  text-xs md:text-sm font-bold h-full w-full text-center'>
                    {item?.title}
                </p>     
                <p 
                onClick={() => deleteShow(item.id)}
                className="absolute text-gray-300 top-4 right-4">
                    <AiOutlineClose/>
                </p>        
            </div>
        </div>

            ))}
        </div>
        {/*Slide right button*/}
    <MdChevronRight
    onClick={slideRight} 
    size={40} 
    className="bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 text-black cursor-pointer z-10 hidden group-hover:block"/>
       
    </div>
</>
  )
}

export default SavedShows