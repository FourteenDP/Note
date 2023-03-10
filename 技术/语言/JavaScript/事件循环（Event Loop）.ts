console.log("1");
setTimeout(()=>{
    console.log(7)
    Promise.resolve().then(()=>{
        console.log(8);
        process.nextTick(function foo() {
            console.log(9);
        });
    })
})
Promise.resolve().then(()=>{
    console.log(5);
    setTimeout(()=>{
        console.log(10)
    })
    Promise.resolve().then(()=>{
        console.log(6);
    })
})

process.nextTick(function foo() {
    console.log(3);
    process.nextTick(function foo() {
        console.log(4);
    });
});
console.log("2")
