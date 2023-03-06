const cart = ['shoes', 'shirts', 'jeans']

createOrder(cart)
    .then((orderId)=> {
        console.log(orderId)
        return orderId
        }
    )
    .catch((error) => {
        console.log(error.message)
    })
    .then((orderId)=>{
        return proceedToPayment(orderId)
    })
    .catch((error)=>{
        console.log(error.message)
    })
    .then((paymentInfo)=>{
        console.log(paymentInfo)
        return paymentInfo
    })
    .catch((error)=>{
        console.log(error.message)
    })
    .then(()=>{
        console.log('Execute this at last')
    })

function validateCart(cart) {
    return false;
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


// create a function for proceedToPayment API to return a promise.
function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        resolve('Payment Successful')
    })
}