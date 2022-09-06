import React, {useEffect, useState} from "react";
import Header from "./components/header/Header";
import {AuthContext, RegionContext, CartContext} from "../src/context/index";
import AppRouter from "./router";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [region, setRegion] = useState(null);
    const [cart, addCart] = useState(null);


    useEffect(() => {
        if (!localStorage.getItem('region')) {
            localStorage.setItem("region", 'Санкт-Петербург')
            setRegion('Санкт-Петербург')

        }else {
            setRegion(localStorage.getItem('region'))
        }
    }, []);

    useEffect( () => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
    }, [])

    useEffect( () => {
        if (localStorage.getItem('cart')) {
        } else if (!localStorage.getItem('cart')) {
            addCart({})
            localStorage.setItem("cart", '{}')
        }
    }, [])

  return (
    <div className="App">
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <RegionContext.Provider value={{
                region,
                setRegion
            }}>
                <CartContext.Provider value={{
                    cart,
                    addCart,
                }}>
                    <Header/>
                    <AppRouter/>
                </CartContext.Provider>


            </RegionContext.Provider>
        </AuthContext.Provider>

    </div>
  );
}

export default App;
