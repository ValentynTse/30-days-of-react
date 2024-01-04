function MyForm() {
   return (
      <div className="subscribe__form">
         <h1>SUBSCRIBE</h1>
         <h2>Sign up with your email address to receive news and updates</h2>
         <form>
            <p>
               <label htmlFor="name">First name:</label>
               <input type="text" id="name" name="name" />
            </p>
            <p>
               <label htmlFor="lastName">Last name</label>
               <input type="text" id="lastName" name="lastName" />
            </p>
            <p>
               <label htmlFor="email">Email</label>
               <input type="email" id="email" name="email" />
            </p>
         </form>
            <button type="submit">Subscribe</button>
      </div>
   );
}

export { MyForm };