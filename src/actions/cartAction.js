export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product
})

export const startAddCart = (data) => {
    return async(dispatch) => {
        try{
            const response = await axios.post('/api/user/cart', data, {
                headers: {
                    Authorization : localStorage.getItem('token')
                }
            })
            dispatch(addToCart(response.data))
        } catch(err){
            console.log(err)
        }
    }
}