const Form = () => {
   return (
      <div className="subscribe__form">
         <h1>SUBSCRIBE</h1>
         <h2>Sign up with your email address to receive news and updates</h2>
         <form>
            <div className="form__body">
               <p>
                  <label htmlFor="name">First name:</label>
                  <input type="text" id="name" name="name" />
               </p>
               <p>
                  <label htmlFor="lastName">Last name:</label>
                  <input type="text" id="lastName" name="lastName" />
               </p>
               <p>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" />
               </p>
            </div>
            <button type="submit">Subscribe</button>
         </form>
      </div>
   );
}
export { Form };

const InputField = ({style, id, label, type, value, onChange, placeholder }) => {
   return (
      <div className="input-field">
         <label htmlFor={id}>{label}</label>
         <input
            style={style}
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
         />
      </div>
   );
};
export { InputField };

const AlertBox = ({ type, message }) => {
   return (
      <div className={`alert-box ${type}`}>
         <p>{message}</p>
      </div>
   );
};
export default AlertBox;