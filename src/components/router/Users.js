import { Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
   const [searchParams, setSearchParams] = useSearchParams()
   const showActiveUsers = searchParams.get('filter')=== 'active'
   return (
      <div>         
         <h4>User 1</h4>
         <h4>User 2</h4>
         <h4>User 3</h4>
         <Outlet />
         <div>
         <button onClick={()=> setSearchParams({filter:'active'})}>Active Users</button>
         <button onClick={()=> setSearchParams({})}>Reset Filter</button>
         </div>
         {
         showActiveUsers ? <h4>Showing active users</h4> : <h4>Showing all users</h4> 
         }
      </div>
      )
};