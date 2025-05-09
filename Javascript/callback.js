// callbreak

// function Greet(name,cb){
//     console.log("hello" + name);
//     cb();
// }
// function sayHi(){
//     console.log("good morning");
// }
// Greet("manish",sayHi);


// task-1
// recipe to make sandwich
// 1. bread baked
// 2. stuffing
// 3. grilled
// 4. serve

function bakeBread(bread,cb){
    setTimeout(() => {
        console.log("bake bread");
        cb();
    },3000);
    
}
function stuffing(bread,cb){
    setTimeout(() => {
        console.log("stuffing");
        cb();
    },3000);
    
}
function grilled(bread,cb){
    setTimeout(() => {
        console.log("grilled");
        cb();
    },3000);
    
}
function serve(bread,cb){
    setTimeout(() => {
        console.log("serve");
        cb();
    },3000);
    
}

bakeBread("bread",() => {
    stuffing("bread",() => {
        grilled("bread",() => {
            serve("bread",() => {
                console.log("sandwich is ready to serve")
            })
        })
    })
})
