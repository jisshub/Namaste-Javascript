console.log('Start')

setTimeout(()=>{
    console.log('settimeout runs')    
}, 5000)


fetch('https://jsonplaceholder.typicode.com/todos')
    .then((data)=>{
        console.log(data)
    });

console.log('End')
