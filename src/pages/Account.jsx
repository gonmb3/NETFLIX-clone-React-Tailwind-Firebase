import formBGimg from "../assets/form-img.png" /* background image*/

import SavedShows from "../components/SavedShows" /*react component*/ 

const Account = () => {
  return (
    <>
      <div className='w-full text-white '> 
         <img className='w-full h-[400px] object-cover ' src={formBGimg} alt="" />
             <div className="bg-black/50 fixed top-0 left-0 w-full h-[550px] "></div>
      
          <div className="absolute top-[20%] p-4 md:p-8 z-50">
             <h1 className="text-3xl md:text-5xl font-bold text-white">My Shows</h1>
          </div>
      </div>
      <SavedShows/> {/*react component*/ }
    </>
  )
}

export default Account