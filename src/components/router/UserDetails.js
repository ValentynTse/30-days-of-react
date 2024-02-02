import { useParams } from "react-router-dom";

export const UsersDetails = () => {
   const {userId} = useParams()   
   return (
      <div>
         Details about user {userId}.
      </div>
   )
};