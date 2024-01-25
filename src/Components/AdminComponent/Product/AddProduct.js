import { useState} from "react"
// import Select from 'react-select'
import { useDispatch, useSelector} from 'react-redux'
import { startAddProduct } from "../../../actions/productAction"
import ProductList from "./ProductList"


export default function AddProduct(){
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const [minStock, setMinStock] = useState('')
    const [formErrors, setFormErrors] = useState([])
    const [category, setCategory] = useState('')
    const [image,setImage] = useState('')

    const errors = {}

    const categories = useSelector(state =>{
        return state.category
    })
    console.log(categories)

    function runValidation(){
        if(name.trim().length === 0){
            errors.name = ' name is required'
        }
        if(description.trim().length === 0){
            errors.description = 'description is required'
        }
        if(price.trim().length === 0){
            errors.price = 'price is required'
        }
        if(stock.trim().length === 0){
            errors.stock = 'stock is required'
        }
        if(minStock.trim().length === 0){
            errors.minStock = 'minStock is required'
        }
    }

    console.log(image)

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidation()
        if(Object.keys(errors).length === 0){
           
            const formdata = new FormData()
            formdata.append('name', name)
            formdata.append('description', description)
            formdata.append('price', price)
            formdata.append('stock', stock)
            formdata.append('minStock', minStock)
            formdata.append('category', category)
            formdata.append('image',image)

            dispatch(startAddProduct(formdata))
        } else {
            setFormErrors(errors)
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Product name</label>
                <input 
                    type="text"
                    value={name}
                    id="name"
                    onChange={(e) =>{setName(e.target.value)}}
                />
                {formErrors.productName && formErrors.productName}<br />

                <label>Description</label>
                <input 
                    type="text"
                    value={description}
                    id="description"
                    onChange={(e) =>{setDescription(e.target.value)}}
                />
                {formErrors.description && formErrors.description}<br />

                <label>Price</label>
                <input 
                    type="Number"
                    value={price}
                    id="price"
                    onChange={(e) =>{setPrice(e.target.value)}}
                />
                {formErrors.price && formErrors.price}<br />

                <label>Stock</label>
                <input 
                    type="Number"
                    value={stock}
                    id="stock"
                    onChange={(e) =>{setStock(e.target.value)}}
                />
                {formErrors.stock && formErrors.stock}<br />

                <label>Min stock</label>
                <input 
                    type="Number"
                    value={minStock}
                    id="minStock"
                    onChange={(e) =>{setMinStock(e.target.value)}}
                />
                {formErrors.minStock && formErrors.minStock}<br />

                <input type="file" accept="*/image" onChange={(e)=>setImage(e.target.files[0])}/>
                <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option value={""}>Select category</option>
                    {categories.map(ele =>{
                        return(
                            <option key={ele._id} value={ele._id}>{ele.name}</option>
                        )
                    })}
                </select>
                <input type="submit"/>
            </form>
            <br />
            <ProductList/>
        </div>
    )
}