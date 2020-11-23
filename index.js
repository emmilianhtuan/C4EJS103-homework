// // let myArr = ["làm btvn","giặt quần áo","nấu cơm"];

// // console.log("Array có độ dài là :"+myArr.length);
// // console.log(myArr[1]);

// let bikeBrand = ["Honda","Suzuki","Yamaha","Kawasaki","Ducati","Triumph"];

// // console.log(bikeBrand[4]); 
// // bikeBrand[0] = "Mer";

// // console.log(bikeBrand.length);

// // let a = bikeBrand.shift();
// // console.log(a);

// // let b = bikeBrand.pop();
// // console.log(b);

// //in ra số từ 1 đến 10
// for (let i = 1;i<=10;i++) {
//     console.log(i)
// };

// //in ra tất cả phần tử trong bikeBrand và vị trí của nó
// for (let i = 0;i<=bikeBrand.length;i++) {
//     console.log(bikeBrand[i]+ "có số index là:" + i);
// }

// //in ra các số từ 0 đến 100 chia hêt cho 5
// // for (let i = 1; i<=100;i++) {
// //     if (i % 5 == 0) {
// //     console.log(i);
// //     }
// // }
// //in ra các số lẻ từ 1 đên 10
// // for (let i = 1;i<=10;i++) {
// //     if (i % 2 ==1) {
// //     console.log(i);
// //     }
// // }

// // let myObject = {
// //     name :"Anh Tuấn",
// //     email:"123@gmail.com",
// //     pass :"mochikun",
// //     age : "26"
// // }
// // console.log("Tên của bạn là :" + myObject.name);
// // console.log("Tuổi của bạn là :" + myObject["age"]);

// // delete myObject.pass
// // console.log(myObject)

// // //Sửa phần từ
// // myObject.name = "a"
// // console.log(myObject)

// inventory = {
//      gold  : 500,
//      pouch : ["flint","twine","gemstone"],
//      backpack : ["xylophone","dagger","bedroll","breadloaf"]
// }
//    inventory.pocket = ["seashell","strange berry","lint"]

//    delete inventory.pouch
//    inventory.gold = inventory.gold + 50

//    inventory.backpack.splice[1,1]

let myHeading = document.getElementById("heading-1")
console.dir(myHeading)
myHeading.innerText = "Xin chào cả lớp 1 "
let h2 = "<h2>This is heading level 2</h2>"
myHeading.innerHTML += h2
//Đổi màu chữ thành hồng
// Đổi màu nền thành đen
//Đổi cỡ chữ thành 50px
myHeading.style.color  = "pink"
myHeading.style.backgroundColor = "black"
myHeading.style.fontSize = "50px"
