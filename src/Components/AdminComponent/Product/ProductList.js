import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState} from "react"
// import { useNavigate } from "react-router-dom"

import { startEditProduct, startGetProduct, startRemoveProduct } from "../../../actions/productAction"
const ProductList = (props) => {

    const [editId, setEditId] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const [isEdit, setIsEdit] = useState(false)

    const dispatch = useDispatch()

    const product = useSelector((state) => {
        return state.product
    })

    useEffect (() => {
        dispatch(startGetProduct())
    },[dispatch])

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure?")
        if(confirm){
            dispatch(startRemoveProduct(id))
        }
    }

    const handleEdit = (id) => {
        setEditId(id)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: name,
            description: description,
            price: price,
            stock:stock
        }
        dispatch(startEditProduct(editId, formData))
        setEditId('')
    }

    useEffect(() => { 
        if(editId){
        const item = product.find(ele => ele._id === editId )
        if(Object.keys(item.length>0)){
        setName(item.name)
        setDescription(item.description)
        setPrice(item.price)
        setStock(item.stock)}
}
    },[editId])

    


    return(
        <div>
            <ul>
                {product.map((ele) => {
                    return (
                    <div key={ele._id}>
                        <p>{ele.name}</p>
                        <img height={50} src={`http://localhost:3040/images/${ele.image}`}/>
                        <p>{ele.price}</p>
                        <button onClick={() => {
                            handleDelete(ele._id)
                        }}>Delete</button>
                        <button onClick={() => {handleEdit(ele._id)}}>Edit</button>
                    </div>
                        )
                })}
            </ul>

            {editId && (
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input 
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }} /> <br />

                    <label>Description</label>
                    <input 
                    type="text"
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }} /> <br />

                    <label>price</label>
                    <input 
                    type="Number"
                    value={price}
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }} /> <br />

                    <label>stock</label>
                    <input 
                    type="Number"
                    value={stock}
                    onChange={(e) => {
                        setStock(e.target.value)
                    }}
                    /> <br />

                     <input type="submit" />
                </form>
            )}
        </div>
    )
}

export default ProductList