var newOrder;
var toppingsInput = [];
var sizeInput;

function Pizza(toppings, size){
  this.toppings = toppings; //this will be an array
  this.size = size; //this will be a string
  this.cost = 6;
}

Pizza.prototype.checkCost = function(){ //totals cost based on toppings and size
  this.toppingsCost = (this.toppings.length * .50);
  this.checkCheese();
  this.sizeCost;
  if(size === "small"){
    sizeCost = 6;
  } else if (size === "medium"){
    sizeCost = 8
  } else if (size === "large"){
    sizeCost = 10;
  }
  this.cost = (sizeCost + toppingsCost);
}

Pizza.prototype.checkCheese = function(){ //this function makes a plain cheese just cost the size
  if (toppingsInput.contains("cheese")){
    this.toppingsCost = 0;
  }
}




$(document).ready(function(){
  $('#pizzaOrder').submit(function(event){
    event.preventDefault();
    sizeInput = ($('#sizeChoice option:selected').val());
    $('input:checkbox[name=toppings]:checked').each(function(){
      toppingsInput.push($(this).val())
    });
    newOrder = new Pizza(toppingsInput, sizeInput);
    console.log(toppingsInput);
  })
})
