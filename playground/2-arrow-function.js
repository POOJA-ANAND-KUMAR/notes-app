// const square = function(x)
// {
//     return x*x;
// }

// const square = (x) =>{
//  return x*x;
// }

// const square = (x) => x*x ;
 
// console.log(square(6));

const event ={
    name:"Birthday party",
    guestList:["poo","suhas","preetu"],
    printGuestList() {          //newshorthandfor standard methods on objects
        console.log("Guest list for "+ this.name)

        this.guestList.forEach((guest)=> {
            console.log(guest + ' is attending ' + this.name) // for this example only arraiw function works
        })
    }
}

event.printGuestList();