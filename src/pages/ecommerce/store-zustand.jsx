
import create from "zustand"

const useStore = create(set => ({
    user: "",
    cartCount: 0,
    login: () => set(() => ({ user: "Sarah" })),
    logout: () => set(() => ({ user: "" })),
    addToCart: () => set(state => ({ cartCount: state.cartCount + 1 })), // Correção aqui




}))

export default useStore 