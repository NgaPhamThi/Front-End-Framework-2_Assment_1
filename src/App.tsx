
import './App.css'
import Context from './store/Context'
import { useContext } from "react"
import instance from './api/instance'
import { useEffect } from 'react'
function App() {

  const { state, dispatch } = useContext(Context)
  // console.log(state.products);

  useEffect(() => {
    getAllProduct()
  }, [])
  const getAllProduct = async () => {

    try {
      const { data } = await instance.get(`/products`)
      dispatch({ type: "fetch_product", payload: data })
    } catch (error) {
      console.log(error);

    }

  }

  const addProduct = async (product: any) => {

    try {
      const { data } = await instance.post(`/products`, product)
      dispatch({ type: "add_product", payload: data })
    } catch (error) {
      console.log(error);

    }



  }
  const updateProduct = async (product: any) => {

    try {
      const { data } = await instance.put(`/products/${product.id}`, product)
      dispatch({ type: "update_product", payload: data })
    } catch (error) {
      console.log(error);

    }

  }

  const deleteProduct = async (id: any) => {

    try {
      await instance.delete(`/products/${id}`)
      dispatch({ type: "delete_product", payload: id })
    } catch (error) {
      console.log(error);

    }

  }
  return (
    <>

      <h3>Product</h3>
      <div className="">
        <ul>
          {state.products?.map((product: any) => {
            return (
              <li key={product.id}>
                <span>{product.name}</span>
                <button onClick={() => deleteProduct(product.id)}>&times;</button>
              </li>
            )
          })}

        </ul>
      </div>

      <button onClick={() => addProduct({ name: "Product k" })}>Add</button>
      <button onClick={() => updateProduct({ id: 4, name: "Product N update" })}>Update</button>

    </>
  )
}

export default App
