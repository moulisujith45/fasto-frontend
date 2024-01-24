import { useState } from "react"
import { useDispatch } from "react-redux"
import { addCategoryAsync } from "../../../actions/categoryAction"
import CategoryList from "./CategoryList"

export default function AddCategory(){
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [formErrors, setFormErrors] = useState([])
    const errors = {}


    function runValidations(){
        if(name.length === 0){
            errors.name = "category name is required"
        }
        setFormErrors(errors)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        runValidations()
        if(Object.keys(errors).length === 0){
            const categoryData = {
                name: name
            }
            console.log(categoryData)
            dispatch(addCategoryAsync(categoryData))
            setName('')
        } else {
            setFormErrors(errors)
        }
    }

    return(
        <div>
            <h1> Add Category Component</h1>
            <form onSubmit={handleSubmit}>
                <label> Create Category Name</label><br />
                <input 
                    type="text"
                    placeholder="name"
                    value={name}
                    id="name"
                    onChange={(e) => {
                        setName(e.target.value)
                    }} 
                />
                {formErrors.name && formErrors.name} <br />

                <input  type="submit"  />

            </form>
            <br />
            <CategoryList/>
        </div>
    )
}