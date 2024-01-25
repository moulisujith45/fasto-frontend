import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState} from "react"
import { v4 as uuidv4 } from 'uuid';

// import { useNavigate } from "react-router-dom"

import { startEditCategory, startGetCategory, startRemoveCategory } from "../../../actions/categoryAction"

const CategoryList = (props) => {
    const [editId, setEditId] = useState(false)
    const [name, setName] = useState('')

    const dispatch = useDispatch()
    // const navigate = useNavigate()


    const category = useSelector((state) => {
        return state.category
    })
    // console.log(category,"list")

    useEffect (() => {
        dispatch(startGetCategory())
    },[dispatch])

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure?")
        if(confirm){
            dispatch(startRemoveCategory(id))
        }
    }

    const handleEdit = (id) => {
        setEditId(id)
        setName('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: name
        }
        dispatch(startEditCategory(editId, formData))
        setEditId('')
    }

    return(
        <div>
           { console.log(category)}
            <ul>
                {category.map((ele) => {
                    return <li key={ele._id}>{ele.name}
                    <button onClick={() => {
                        handleEdit(ele._id)
                    }}>Edit</button>
                    <button onClick={() => {
                        handleDelete(ele._id)
                    }}>Delete</button></li>
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

                    <input type="submit" />

                </form>
            )}
        </div>
    )

}

export default CategoryList