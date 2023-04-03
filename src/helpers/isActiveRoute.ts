type isActiveProps={
    isActive:boolean 
}
const isActiveRoute = (param:isActiveProps) => {
    return param.isActive ? "active" : null;
  };

  export default isActiveRoute;