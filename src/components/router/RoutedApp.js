import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./Home";
import { Navbar } from "./Navbar";
import { OrderSummary } from "./OrderSummary";
import { NoMatch } from "./NoMatch";
import { Products } from "./Products";
import { FeaturedProducts } from "./FeaturedProducts";
import { NewProducts } from "./NewProducts";
import { Users } from "./Users";
import { UsersDetails } from "./UserDetails";
import { Admin } from "./Admin";
import { Profile } from "./Profile";
import { AuthProvider } from "./Auth";
import { Login } from "./Login";
import { RequireAuth } from "./RequireAuth";

const LazyAbout = React.lazy(() => import('./About'))


class App extends Component {
   render() {
      return (
         <AuthProvider>
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="about" element={
                  <React.Suspense fallback='Loading...'>
                     <LazyAbout />
                  </React.Suspense>
               } />
               <Route path="order-summary" element={<OrderSummary />} />
               <Route path="products" element={<Products />}>
                  <Route index element={<FeaturedProducts />} />
                  <Route path="featured" element={<FeaturedProducts />} />
                  <Route path="new" element={<NewProducts />} />
               </Route>
               <Route path="users" element={<Users />}>
                  <Route path=":userId" element={<UsersDetails />} />
                  <Route path="admin" element={<Admin />} />
               </Route>
               <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
               <Route path="login" element={<Login />} />
               <Route path="*" element={<NoMatch />} />
            </Routes>
         </AuthProvider>
      )
   }
}

export default App;