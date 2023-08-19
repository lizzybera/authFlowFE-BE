import { Link, useNavigate } from "react-router-dom"
import * as yup from "yup"
import {useForm}  from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import {signInAuth } from "../../API/authAPIs"
import { useDispatch } from "react-redux"
import { createUser } from "../../global/GlobalState"


const SignIn = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const model = yup.object({
      
      email : yup.string().required(),
      password : yup.string().required(),
      
  })

  const {
    register, formState : {errors}, handleSubmit
  } = useForm({
    resolver : yupResolver(model)
  })

  const onHandleSubmit = handleSubmit((data : any)=>{
    const { email, password } = data
    console.log("data ", data);

    signInAuth({email, password }).then((res : any)=>{
      dispatch(createUser(res))
      navigate("/")
      
    })

  })

  return (
    // container
    <div className="flex justify-center items-center w-full h-[100vh]">
        {/* main */}
        <form onSubmit={onHandleSubmit} className="flex flex-col justify-center items-center w-[400px] border min-h-[200px] p-[10px] rounded-[10px]">

          {/* title */}
          <div className="text-[30px]  ">Sign In</div>

          {/* input Holder */}
          <div className="w-full m-1 ">
            {/* input/email */}
          <div className=" border m-1 relative h-[45px] flex flex-col justify-center items-center rounded-[10px]">
{/* email */}
            <div className="font-[20px] absolute bottom-[30px] left-9 bg-white w-[40px] flex justify-center">email</div>
{/* input */}
            <input className="h-[20px] w-full mt-2 placeholder: px-3 outline-none" placeholder="please input your email" {...register("email")} />
          </div>
{/* error */} 
            {errors.email?.message && <div className="text-right mr-3 mt-[-10px] text-rose-500">error</div>}
          </div>

          {/* input Holder */}
          <div className="w-full m-1 ">
            {/* input/password */}
          <div className=" border m-1 relative h-[45px] flex flex-col justify-center items-center rounded-[10px]">
{/* password */}
            <div className="font-[20px] absolute bottom-[30px] left-9 bg-white w-[40px] flex justify-center">password</div>
{/* input */}
            <input className="h-[20px] w-full mt-2 placeholder: px-3 outline-none" placeholder="please input your password" {...register("password")} />
          </div>
{/* error */} 
            {errors.password?.message && <div className="text-right mr-3 mt-[-10px] text-rose-500">error</div>}
          </div>

          {/* button */}
          <button type="submit" className="w-[95%] h-[40px] bg-slate-600 hover: cursor-pointer flex justify-center items-center hover:bg-rose-600 hover:duration-[350ms] transition-all font-bold text-[20px] ">
            Sign In
          </button>

          {/* sign in */}
          <div className=" flex h-[50px] justify-center items-center">
            <div>don't have an account?</div>
            <Link to="/reg">
               <div className=" m-3 text-rose-600 text-[20px] cursor-pointer">
            sign-up
                </div>
            </Link>
          </div>
          

        </form>
    </div>
  )
}

export default SignIn