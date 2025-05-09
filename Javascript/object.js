// let person ={
//     name:"manish",
//     age:23,
//     ismarried: false,
//     salary:12345,
// };
// console.log(person);
// console.log(person.name);
// console.log(person.salary);


// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));


// let response = {
//     status: 200,
//     header: "manish",
//     ip: "127.0.0.1",
//     token: 1234567,
//     data:{
//         name:"manish",
//         age: 23,
//         isMarried: false,
//         salary: 12345890,
//     },
// };

// let{
//     data: {name, age}
// } =response;
// console.log(name,age);



// const person =[
//     {
//         name: "manish";
//         age: 23,
//         isMarried: false,
//     }
// ]


// spread


// let arr1 =[1,2,3,4,5,6];
// let arr2 =[7,8,9,10,11,12];

// let result =[...arr1,...arr2];
// console.log(result);

// rest


// const arr3 =["apple", "banana","cherry", "data", "elderberry"];
// const[first,second,...others] =arr3;
// console.log(first);
// console.log(second);
// console.log(others);

// normal copy

// let obj1 ={
//     name: "manish",
//     age: 23,
//     isMarried: false,
// };

// let obj2 = obj1;
// // changing data
// obj2.name = "manish kumar"
// console.log(obj2);
// console.log(obj1);

// let obj2 ={...obj1};
// obj2.name ="manish kumar";
// console.log(obj2);
// console.log(obj1);

// shallow copy

// let obj1 ={
//     name: "manish",
//     age: 23,
//     isMarried: false,
//     address:{
//         city:"jaipur",
//         country:"india"
//     }
// };

// let obj2 = {...obj1};
// obj2.name = "manish kumar";
// obj2.address.city = "delhi";
// console.log(obj2);
// console.log(obj1);

// let details ={
//     name: "manish",
//     age: 23,
//     isMarried: false,
//     city:"jaipur",
//     country:"india"
// };

// let result = JSON.stringify(details);
// // console.log(result);
// // console.log(typeof result);

// let result2 =JSON.parse(result);
// console.log(result2);
// console.log(typeof result2);


// deep copy

// let person1 ={
//     name: "manish",
//     age: 23,
//     isMarried: false,
//     address:{
//         city:"jaipur",
//         country:"india",
//     },
// };

// current in use method or important method

// let person2 = structuredClone(person1);
// person2.name = "manish kumar";
// person2.address.city = "delhi";
// console.log(person2);
// console.log(person1);

// JSON method

// let person2 = JSON.parse(JSON.stringify(person1));
// person2.name = "manish kumar";
// person2.address.city = "delhi";
// console.log(person2);
// console.log(person1);


let response2 = {
     status: 200,
     header: "manish",
     ip: "127.0.0.1",
     token: 1223455,
     data: {
      name: "manish",
      age: 24,
      isMarried: false,
      salary: 2123344,
     },
     data2: {
      name: {
        first: "manish",
        last: "kumar",
      },
      age: 24,
      isMarried: false,
     salary: 2123344,
     },
    };

    let response1 = structuredClone(response2);
     response2.data.name = "manish kumar";
     response2.data2.name = {first:,last:};
     console.log(response2);
     console.log(response1);


