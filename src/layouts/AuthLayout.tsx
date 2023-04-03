import { Outlet } from "react-router-dom";
type AuthLayoutProps={}


const AuthLayout = (props:AuthLayoutProps) => {
  return (
    <div className="mt-5">
    
       <Outlet />

    </div>
  )
}

export default AuthLayout
