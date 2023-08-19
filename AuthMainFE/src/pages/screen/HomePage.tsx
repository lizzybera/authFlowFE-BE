// import { Link } from "react-router-dom"
import pix from "../../assets/girl_book_sketch-removebg-preview.png"
import {useDispatch} from "react-redux"
import { logOut } from "../../global/GlobalState"

const HomePage = () => {

        // const userID = useSelector((state : any) => state.user)

        const dispatch = useDispatch()

  return (
    // container
    <div className="flex justify-center items-center w-full h-[100vh]">
      {/* main */}
      <div className="flex flex-col justify-center items-center w-[500px]">
        {/* Title */}
        <div className="text-slate-600 font-[500] text-[35px]">Welcome Aboard</div>
        {/* image */}
            <img src={pix} className="w-[150px] h-[100px ]"/>
            {/*  */}
            <div className="flex mt-[30px]">

            {/* </div> */}
            {/* <Link to="/reg"> */}
              <div className="w-[100px] h-[40px] flex justify-center items-center rounded-md mx-2 font-[600] bg-slate-600 hover:cursor-pointer text-slate-800 hover:bg-orange-400 hover: duration-[300ms] transition-all"
              onClick={()=>{
                    dispatch(logOut())
              }}
              >LogOut</div>
            {/* </Link> */}
            </div>

      </div>
    </div>
  )
}

export default HomePage