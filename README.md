# Namaste-Javascript

## Callbacks

- Callback are powerful way of handling asynchronous operations in javascript.

- 2 Issues with callbacks

    1. Callback Hell
    2. Inversion of Control

## 1. Callback Hell



### Example - 1

```js
console.log('Namaste')

console.log('Javascript')

console.log('Season 2')
```

Above codes will be logged soon on console. Suppose we want to run second console after 5 seconds. For that, we create a callback function and wrap the console in the same. Then we wrap the whole function in a `setTimeout` and set the time of 5 seconds.

### Example - 2 / Ecommerce Real World

Order of Execution should be as follows:

1. Create an Order
2. Proceed to Payment
3. Show order summary page
4. Update the wallet only after showing the order summary

```js
const cart = ['shoes', 'pants', 'shorts']

api.createOrder(cart, function () {
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet()
        })
    })
});
```

- We wrap proceedToPayment api inside createOrder api. 
- And inside the proceedToPayment api, we wrap the showOrderSummary api.
- We wrap the updateSummary api inside showOrderSummary api to finally show the updated wallet.
- But this creates a **callback hell**

### What is a callback hell ?

- One callback inside another callback inside another callback will makes this `callback hell`. This kind of code structure is `unreadable` and `unmaintable`. This structure is also called as `Period of Doom`.

## 2. Inversion of Control

Means we lose the control over our code. Whenever we pass our callback function inside another callback, we are giving the control of our piece of code to some other code and we dont know what happens behind the scenes. This is the problem we face when we use callbacks.















