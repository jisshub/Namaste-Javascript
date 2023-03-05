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
- But this creates a **callback hell**.

### What is a callback hell ?

- One callback inside another callback inside another callback will makes this `callback hell`. This kind of code structure is `unreadable` and `unmaintable`. This structure is also called as `Period of Doom`.

## 2. Inversion of Control

Means we lose the control over our code. Whenever we pass our callback function inside another callback, we are giving the control of our piece of code to some other code and we dont know what happens behind the scenes. This is the problem we face when we use callbacks.



## Promises

https://www.youtube.com/watch?v=ap-6PPAuK1Y


- Promises are used to handle async operations in jaavscript.

### Previous Way of handling async operation

```js
const cart = ['shoes', 'pants', 'shorts']

createOrder(cart, function(orderId) {
    proceedToPayment(orderId)
});
```

- Responsibility of `createOrder` api is to create an order first and then call our callback function back once the order is created.

- We know that, problem here is the *inversion of control* that is passing the control of our code to some other code.

- To solve this, we dont take callback function inside `createOrder` API, Instead we use Promises to implement asynchronous operations.

```js
const promise = createOrder(cart);
```

- When above code executes, `createOrder` API returns a promise.

- `Promise` is an empty object.

- After some seconds, this promise object is filled with data returned by `createOrder` API.

- Once we get the data, we attach the callback function to this promise object using `then` method.

- This `callback` function is automatically called once we get the data.

```js
promise.then((orderId)=>{
    proceedToPayment(orderId)
})
```

### Why use Promises instead of older way ?

- Because in earlier case, we were passing a `callback` function to another function, but 
in promises we were attaching callback function to the promise object.

- In previous case, we passed the function and `createOrder` api might have called it whenever it wants to.

- In case of promise, `creatOrder` API is called and fills the `promise` object with data.

- As soon as the `promise` object is filled with the data, it will automatically call the `callback` function.

- Thus we have the control over program with us. `Promise` gives the guarantee that it will call the callback function when promise object is filled with data. Also we are not passing our code to some other functions.

### Practical

<!-- time: 14:00 -->


















