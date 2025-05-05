// console.log(d);

// var a=19;
// let b=30;
// console.log(c);
// const c=40;


// function sum(a,b){
//     console.log(a);
//     let a=39;
//     console.log(a);
//     return a+b;
// }
// var d ='manish';
// var res = sum(10,20);
// console.log(res);
// console.log(a);
// console.log(b);
// console.log(c);


// object case
//  let person = {
//     name: "manish",
//     age:23,
//     ismarried:false,
// };

// let obj1 = person;
// obj1.name="raj";
// console.log(obj1);
// console.log(person);


// array case

// let array =[1,2,3,4,5];
// console.log(array);

// another method of writting an array
// let arr = new Array(1,2,3,4,5,6);
// console.log(arr);

// Named function
// function A(){
//     console.log("hello world");
// }
// A();

// anonymous function

// var show = function(){
//     console.log("hello world");
// };
// var result = show();
// console.log(typeof result);

// // arrow function
// var addition = () =>console.log(10+20);

// addition();
// console.log(typeof addition);





// scopes

// let a =3;
// function A(){
//    /*  let a= 4; */
//     console.log(a);
//     {
//         let b=a+1;
//         console.log(b);
//     }
// }
// A();



let a = 2;
function increment() {
  function show() {
    let a = 40;

    function show2() {
      a = a + 1;
    //   let b = 40;
      console.log(a);
    }

    show2();
  }
  show();
}
increment();