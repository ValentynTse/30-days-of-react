import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
   const navigate = useNavigate()
   return (
      <div>
         <h4>Order confirmed!</h4>
         <button onClick={()=>navigate(-1)}>Go back</button>
      </div>
   )
};