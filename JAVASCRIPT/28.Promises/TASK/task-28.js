let process1 = {
    stock : ['Stock is Availble'],
    production : ['Production was Started'],
    Fruits : ['Mango' , 'StrawBerry' ,'Orange'],
    AddIngrediant : ['Milk' , 'Water'],
    Toppings : ['Chocolate' , 'Nuts'],
    Packing : ['Cone' , 'Cup' , 'Stick'],
    AfterPack : ['Serve IceCream'],
}

let promise = new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log(`${process1.stock[0]}`);
        console.log(`${process1.Fruits[0]} Flavour`);
        resolve()
    } , 5000)
})

promise.then(() =>{
    console.log(`${process1.production[0]}`);
} , 3000)

promise.then(() =>{
    console.log(`added some ${process1.AddIngrediant[0]} and ${process1.AddIngrediant[1]}`);
} , 4000)

promise.then(() =>{
    console.log(`added some toppings ${process1.Toppings[0]} And ${process1.Toppings[1]}`);
}, 5000)

promise.then(() =>{
    console.log(`Packing in ${process1.Packing[0]} and ${process1.Packing[1]} , ${process1.Packing[2]}`);
} , 6000)

promise.then(() => {
    console.log(`${process1.AfterPack[0]}`);
})