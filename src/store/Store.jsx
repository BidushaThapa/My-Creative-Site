import { create } from "zustand"

const ApiStore =create((set)=>({
  productList:[],
  loading:false,
setProductList :(products)=>{
set({
    productList:products
})
},
  setLoading: (status) =>
    set({
      loading: status,
    }),
}))
export default ApiStore