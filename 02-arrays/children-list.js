//Topic:Arrays
//Goal:Manage a list of chiildren in the community
//Method:Hand-written first,then typed
//Builds on:01-functions/greetchild.js

//step 1:create a list of children in the community
let children = ["Amina", "Sarah","David"];

//step:Read from the list in the community
console.log("The first child is: " + children[0]);
console.log("total number of children in the list is: " + children.length); 

//Add a new child to the list in the community
children.push("Grace");
console.log("The new child added is: " + children[3]);

//step 4:Check if a child is in the list in the community
let serachIndex = children.indexOf("Grace");
console.log("Grace is at position: " + serachIndex);

//step 5:Connect to our function from Topic 1
function greetChild(name){
    return "Hello " + name + ",welcome to the learning Center!";
}
console.log(greetChild(children[0]));
