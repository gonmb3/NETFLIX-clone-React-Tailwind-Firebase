import { useState } from "react"; //react state
import { FaHeart, FaRegHeart } from "react-icons/fa" /*react icons*/ 
import { useNetflixContext } from "../context/netflixProvider";/*react context*/

import { db } from "../firebase/firebase";//firebase
import {arrayUnion , doc, updateDoc} from "firebase/firestore"//firebase

import { toast } from 'react-toastify'; // toastyfy


const Movie = ({ item }) => {

    const { user} = useNetflixContext(); /*react context*/   
    
     const [like, setLike ] = useState(false); /*movie LIKE state*/
     const [saved, setSaved] = useState(false);

    const movieID = doc(db, "users", `${user?.email}`)

      {/*SAVE SHOW FUNCTION */}
    const saveShow = async () => {
        if(user?.email){
            setLike(!like)
            setSaved(true)
            await updateDoc(movieID, {
                savedShows: arrayUnion({
                    id: item.id,
                    title: item.title,
                    img: item.backdrop_path
                })
            })
            toast.success("Movie saved")
        }else{
           toast.error("Please log in to save a movie")
        }
    }

    return (
        
            <div className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer mx-2'>

                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item.title} />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
                    <p className='flex justify-center items-center  text-xs md:text-sm font-bold h-full w-full text-center'>
                        {item?.title}
                    </p>

                    {/*SAVE SHOW FUNCTION */}
                    <p onClick={saveShow}>
                        {
                            like ? (<FaHeart className='absolute top-4 left-4 text-gray-200' /> )
                                 : (<FaRegHeart className='absolute top-4 left-4 text-gray-200' />)
                        }
                    </p>
                </div>
            </div>
        
    )
}

export default Movie