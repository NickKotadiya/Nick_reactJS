/* Clsaa Name */
let value = document.getElementById('demo')

console.log(value);

function colors(){
    if(value.className == 'heading'){
        value.className = 'heading-1'
    }else{
        value.className = 'heading'
    }
}

click()

document.getElementById('inputcheck').addEventListener('mouseover' , click)

function click(){
    document.getElementById('inputcheck').click()
}

/* First Child*/

let ele = document.getElementById('demo').firstChild.innerHTML

console.log(ele);

/* HasAttribute */

let value1 = document.getElementById('demo').hasAttribute('type')

console.log(value1);

/* HasAttributes */

let value2 = document.getElementById('demo').hasAttributes()

console.log(value2);

/* Remove Child */

function myFunction(){
    const list = document.getElementById('demo')
    list.removeChild(list.firstElementChild)
}

/* async and await */

setTimeout(() => console.log("hello") , 5000)

console.log("hii");

/* 
    Async
    Await

    promises(nwe Promise((resolve , reject) => {

    }))
    .then(() => {

    })
    try
    then
    catch
    
*/
