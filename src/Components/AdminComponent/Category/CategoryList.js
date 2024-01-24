import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import { startGetCategory } from "../../../actions/categoryAction"

const CategoryList = (props) => {
    const dispatch = useDispatch()


    const category = useSelector((state) => {
        return state.category
    })
    // console.log(category,"list")

    useEffect (() => {
        dispatch(startGetCategory())
    },[dispatch])

    return(
        <div>
            <ul>
                {category.map((ele) => {
                    return <li key={ele._id}>{ele.name}
                    <button>Edit</button>
                    <button>Delete</button></li>
                })}
            </ul>
        </div>
    )

}

export default CategoryList