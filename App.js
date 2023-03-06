const cart = ['shoes', 'shirts', 'jeans']

const promise = createOrder(cart)

promise
    .then((orderId)=> {
        console.log(orderId)
    }
)


function validateCart(cart) {
    return true;
}


// create a function for createOrder API to return a promise.
function createOrder() {
    const pr = new Promise((resolve, reject)=>{
        if(!validateCart(cart)) {
            const err = new Error('Cart is not valid')
            reject(err)
        }  
        
        const orderId = '12345';
        if (orderId) {
            resolve(orderId)
        }
    })

    return pr
}

