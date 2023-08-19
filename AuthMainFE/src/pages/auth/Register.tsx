import { Link, useNavigate } from "react-router-dom"
import pix from "../../assets/dummy Image.png"
import { useState } from "react"
import * as yup from "yup"
import {useForm}  from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { createAuth } from "../../API/authAPIs"


const Register = () => {

  const navigate = useNavigate()

  const [image, setImage] = useState<string>("")
  const [avatar, setAvatar] = useState<string>(pix)

  const onImage = (e : any) =>{
    const changeImage = e.target.files[0]
    const avatarImages = URL.createObjectURL(changeImage)

    setImage(changeImage)
    setAvatar(avatarImages)

    // console.log(image);
  }


  const model = yup.object({
      myFamilyName : yup.string().required(),
      myContactAddress : yup.string().required(),
      email : yup.string().required(),
      password : yup.string().required(),
      confirm : yup.string().oneOf([yup.ref("password")]),

  })

  const {
    register, formState : {errors}, handleSubmit
  } = useForm({
    resolver : yupResolver(model)
  })

  const onHandleSubmit = handleSubmit((data : any)=>{
    const {myFamilyName, myContactAddress, email, password } = data

    const formData = new FormData()

    formData.append("myFamilyName", myFamilyName )
    formData.append("myContactAddress", myContactAddress )
    formData.append("email", email )
    formData.append("password", password )
    formData.append("myPicture", image )

    createAuth(formData).then(()=>{
      navigate("/sign")
    })

  })

  return (
    // container
    <div className="flex justify-center items-center w-full h-[100vh]">
        {/* main */}
        <form onSubmit={onHandleSubmit} className="flex flex-col justify-center items-center w-[400px] border min-h-[200px] p-[10px] rounded-[10px]">

          {/* title */}
          <div className="text-[30px]  ">Register</div>

          {/* image */}
          <div className="w-full flex flex-col justify-center items-center ">
          <img src={avatar}  className="w-[100px] h-[100px] rounded-[50px]"  />
          <label htmlFor="id" className=" ml-3 w-[100px] h-[30px]  flex justify-center items-center  bg-slate-600 rounded-md hover:cursor-pointer mb-3">Choose image</label>

          <input id="id" placeholder="hhello" className="hidden" type="file"
          onChange={onImage}
          />
          </div>


          {/* input Holder */}
          <div className="w-full m-1 ">
            {/* input/name */}
          <div className=" border m-1 relative h-[45px] flex flex-col justify-center items-center rounded-[10px]">
{/* name */}
            <div className="font-[20px] absolute bottom-[30px] left-9 bg-white w-[40px] flex justify-center">name</div>
{/* input */}
            <input className="h-[20px] w-full mt-2 placeholder: px-3 outline-none" placeholder="please input your name" {...register("myFamilyName")} />
          </div>
{/* error */} 
            {errors.myFamilyName?.message && <div className="text-right mr-3 mt-[-10px] text-rose-500">error</div>}
          </div>

          {/* input Holder */}
          <div className="w-full m-1 ">
            {/* input/contact */}
          <div className=" border m-1 relative h-[45px] flex flex-col justify-center items-center rounded-[10px]">
{/* contact */}
            <div className="font-[20px] absolute bottom-[30px] left-9 bg-white w-[40px] flex justify-center">contact</div>
{/* input */}
            <input className="h-[20px] w-full mt-2 placeholder: px-3 outline-none" placeholder="please input your contact" {...register("myContactAddress")} />
          </div>
{/* error */} 
            {errors.myContactAddress?.message && <div className="text-right mr-3 mt-[-10px] text-rose-500">error</div>}
          </div>

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

          {/* input Holder */}
          <div className="w-full m-1 "> 
            {/* input/confirm */}
          <div className=" border m-1 relative h-[45px] flex flex-col justify-center items-center rounded-[10px]">
{/* confirm */}
            <div className="font-[20px] absolute bottom-[30px] left-9 bg-white w-[40px] flex justify-center">confirm</div>
{/* input */}
            <input className="h-[20px] w-full mt-2 placeholder: px-3 outline-none" placeholder="please confirm your password " {...register("confirm")} />
          </div>
{/* error */} 
            {errors.confirm?.message && <div className="text-right mr-3 mt-[-10px] text-rose-500">error</div>}
          </div>

          {/* button */}
          <button type="submit" className="w-[95%] h-[40px] bg-slate-600 hover: cursor-pointer flex justify-center items-center hover:bg-rose-600 hover:duration-[350ms] transition-all font-bold text-[20px] ">
            Sign Up
          </button>

          {/* sign in */}
          <div className=" flex h-[50px] justify-center items-center">
            <div>already have an account?</div>
            <Link to="/sign">
               <div className=" m-3 text-rose-600 text-[20px] cursor-pointer">
            sign-in
                </div>
            </Link>
          </div>
          

        </form>
    </div>
  )
}

export default Register