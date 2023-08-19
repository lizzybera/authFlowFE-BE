import React, { PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import  {Navigate}  from 'react-router-dom'

const PrivateRouter : React.FC<PropsWithChildren> = ({children}) => {
    const userID = useSelector((state : any)=> state.user)
  return (
    <div>
        {
            userID? <div>{children}</div> : <Navigate to="/land"/>
        }

    </div>
  )
}

export default PrivateRouter