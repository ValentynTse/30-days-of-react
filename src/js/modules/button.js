const Button = ({ style, children }) => {
   return (
      <button style={style}>
         {children}
      </button>
   );
};

export default Button;