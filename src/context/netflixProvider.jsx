import { createContext, useEffect, useState, useContext } from "react"
import axios from "axios"

import  {auth, db}  from "../firebase/firebase";

import {
    signInWithEmailAndPassword  ,
    createUserWithEmailAndPassword ,
     signOut, 
     onAuthStateChanged,
} from "firebase/auth";
import {setDoc, doc} from "firebase/firestore"


import requests from "../requests";


const NetflixContext = createContext();


const NetflixProvider = ({children}) => {


    const [movies, setMovies] = useState([]); /*movies LIST state*/
    const [user, setUser] = useState({}); /*firebase AUTH  state*/

                                                                    /*MAIN MOVIES LIST START ------*/

    const movie = movies[Math.floor(Math.random() * movies.length)] /*Pick random movies each time for the hero main*/ 

    /*fetching popular movies with AXIOS */ 
     useEffect(() => {   
        axios.get(requests.requestsPopular).then(resp => {
            setMovies(resp.data.results)
        })        
    },[])
     /*Cut long movie descriptions text, in hero main component */ 
    const cutString = (str, num) => {
        if(str?.length > num ){
            return str.slice(0, num) + "...."
        }else{
            return str
        }
    }
                                                 /*MAIN MOVIES LIST END ---------*/
 

                                                          /*FIREBASE START---------*/

    /*singup function */ 
    function signUp(email, password){
         createUserWithEmailAndPassword(auth, email, password)
         setDoc(doc(db,"users", email),{
            savedShows: []
         })
    }

      /*singin function */ 
      function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

      /*logout function */ 
      function logOut(email, password){
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           setUser(currentUser) 
        })
        return () => {
            unsubscribe();
        }
    })

                                                         /*FIREBASE END---------*/
   

    return(
        <NetflixContext.Provider
        value={{
        setMovies,
         movies,
         movie,
         cutString,
         signUp,
         user,
         logOut,
         logIn
        }}
        >
            {children}
        </NetflixContext.Provider>
    )
}

export {NetflixProvider}

export default NetflixContext

/*react use context*/
export const useNetflixContext = () => {
    return useContext(NetflixContext)
}


