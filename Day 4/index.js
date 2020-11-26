// JavaScript arrays are used to store multiple values in a single variable.
// Objects in JavaScript, similar to other programming languages, can be compared to real-life objects
// Objects -> key/value accessors, can be of different types eg name : "Tuan", age : 26
// Arrays -> typically of same time 
// An index maps the array value to a stored object.
// Can use it to access or find an element. Also can help for things like sorting, removing, etc.
// Property allows us to refer to / set up the Objects.
// Method is a command to the Objects.
let colors = ["blue","green","red","brown","orange"]
console.log(colors[0])
console.log(colors[2])
colors[4] = "ultraviolet"
 let fourthColor = colors[3]
 console.log(fourthColor)
 colors.push ("yellow")
 colors[0] = "pink"
 console.log(colors.length)
 colors.unshift("black")
 console.log(colors.length)
 for (i = 0;i < colors.length;i++) {
     console.log(colors[i])
     console.log(i + "," +colors[i])
 }
 let lastColor = colors[colors.length - 1]
 console.log(lastColor)

 let myPenguin = {
    character : "Whiteblack",
    origin : "Whiteblack the Penguin Sees the World",	
    author : "H. A. Rey and Margret Rey"
 }
 console.log ("Hello, I'm a penguin and my name is" +" " +myPenguin.character + "!")
 myPenguin.canFly = false
 myPenguin.chirp =  function () {
   console.log("CHIRP CHIRP! Is this what penguins sound like?")
 }
 myPenguin.chirp()
 myPenguin.sayHello = function () {
   console.log("Hello, I'm a penguin and my name is" +" " +this.character + "!")
 }
 myPenguin.sayHello()
 myPenguin.character = "Penguin McPenguinFace"
 myPenguin.sayHello()
 myPenguin.fly = function (){
     if (this.canFly) {
         console.log ("I can fly")
     } else {
        console.log("No fly for me")
     }
  }

  for (key in myPenguin) {
      console.log(key)
  }

  for (key in myPenguin) {
      console.log(myPenguin[key])
  }

  //Array
  let is_array = function (arr) {
      console.log( Array.isArray(arr))
  }
  console.log(is_array('w3resource'));
  console.log(is_array([1, 2, 4, 0]));

  let array_Clone = function (arr){
      return arr.slice(0)
  }
  console.log(array_Clone([1, 2, 4, 0]));
  console.log(array_Clone([1, 2, [4, 0]]));

  let first =  function(array, n) {
    if (array == null) 
    return 0;
    if (n == null) 
    return array[0];
    if (n < 0)
    return [];
    return array.slice(0, n);
  }
  console.log(first([7, 9, 0, -2]));
  console.log(first([],3));
  console.log(first([7, 9, 0, -2],3));
  console.log(first([7, 9, 0, -2],6));
  console.log(first([7, 9, 0, -2],-3));
  
  let last =  function(array, n) {
    if (array == null) 
    return 0;
    if (n == null) 
    return array[array.length - 1];
    if (n < 0)
    return [];
    return array.slice(-n);
  }
    console.log(last([7, 9, 0, -2]));
    console.log(last([7, 9, 0, -2],3));
    console.log(last([7, 9, 0, -2],6));

    let myColor = ["Red", "Green", "White", "Black"]
    console.log(myColor.join(','))
    console.log(myColor.join('+'))

    const num=window.prompt();
    const str = num.toString();
    const result = [str[0]];
  
    for(let x=1; x<str.length; x++)
    {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
    {
    result.push('-', str[x]);
     }
    else
     {
    result.push(str[x]);
     }
     }
    console.log(result.join(''));


    let string = 'The Quick Brown Fox'
    let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let LOWER = 'abcdefghijklmnopqrstuvwxyz'
    var goal = []
  
    for(var x=0; x<string.length; x++)
  {
    if(UPPER.indexOf(string[x]) !== -1)
    {
      goal.push(string[x].toLowerCase());
    }
    else if(LOWER.indexOf(string[x]) !== -1)
    {
      goal.push(string[x].toUpperCase());
    }
    else 
    {
      goal.push(string[x]);
    }
  }
    console.log(goal.join(''));

  var array = [5, 7, 9, 11, 15, 16],
    s = 0,
    p = 1,
    i;
  for (i = 0; i < array.length; i ++) 
   {
    s += array[i];
    p *= array[i];
    }
  console.log('Sum : '+s + ' Product :  ' +p); 

  // function with object
    var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
    
    for (key in student) {
          console.log(key)
    }

    delete student.rollno
    console.log (student)

    var keys = [];

    for (var key in student) {
    if (student.hasOwnProperty(key)) {
    keys.push(key);
    }
  }
    console.log(keys)
  
    var library = [ 
      {
          author: 'Bill Gates',
          title: 'The Road Ahead',
          readingStatus: true
      },
      {
          author: 'Steve Jobs',
          title: 'Walter Isaacson',
          readingStatus: true
      },
      {
          author: 'Suzanne Collins',
          title:  'Mockingjay: The Final Book of The Hunger Games', 
          readingStatus: false
      }];
      for (var i = 0; i < library.length; i++) 
      {
       var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
       if (library[i].readingStatus) {
         console.log("Already read " + book);
       } else
       {
        console.log("Have not read " + book);
       }
      }
