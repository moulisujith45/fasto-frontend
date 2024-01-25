import { useDispatch, useSelector } from "react-redux"
import { useEffect} from "react"
// import { useNavigate } from "react-router-dom"

import { startGetProduct, startRemoveProduct } from "../../../actions/productAction"

const ProductList = (props) => {

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
                    </div>
                        )
                })}
            </ul>
        </div>
    )
}

export default ProductList