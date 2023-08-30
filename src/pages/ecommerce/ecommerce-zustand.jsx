import { useLogin, useLogout, useAddToCart, useUser, useCartCount } from "./store-zustand"

const LoginSection = () => {
    const login = useLogin()
    const logout = useLogout()

    return (
        <div class="box1">
            <button onClick={login}>
                Login
            </button>
            <button onClick={logout}>
                Logout
            </button>
        </div>
    )
}

const UserSection = () => {
    const user = useUser()
    return (
        <div>
            User: {user}
        </div>
    )
}

const AddToCartSection = () => {
    const addToCart = useAddToCart()

    return (
        < div >
            <button onClick={addToCart}>
                Add to Cart
            </button>
        </div >
    )
}


const UserCountSection = () => {
    const cartCount = useCartCount()
    console.log(cartCount)
    return (
        <div>
            Cart Count: {cartCount}
        </div>
    )
}

export default function ZustandPage() {
    return (
        <div>
            <LoginSection />
            <UserSection />
            <AddToCartSection />
            <UserCountSection />
        </div>
    )
}