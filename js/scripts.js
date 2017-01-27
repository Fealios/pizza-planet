var newOrder;
var toppingsInput = [];
var sizeInput;

function Pizza(toppings, size){
  this.toppings = toppings; //this will be an array
  this.size = size; //this will be a string
}

Pizza.prototype.checkCost = function(){
  var toppingsCost = (this.toppings.length * .75);
  var sizeCost;
  if(size === "small"){
    sizeCost = 6;
  } else if (size === "medium"){
    sizeCost = 8
  } else if (size === "large"){
    sizeCost = 10
  }
  return (sizeCost + toppingsCost);
}






$(document).ready(function(){

})
