const cart = ['shoes', 'shirts', 'jeans']

createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWalletBalance(function () {
            })
        })
    })
});


createOrder(cart)
    .then((orderId)=>{
        return proceedToPayment(orderId)
    })
    .then((paymentInfo)=>{
        return showOrderSummary(paymentInfo)
    })
    .then(()=>{
        return updateWalletBalance()
    })
