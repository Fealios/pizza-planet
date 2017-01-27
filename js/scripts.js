var newOrder;
var toppingsInput = [];
var sizeInput;
// var allCost = 0;

function Pizza(toppings, size){
  this.toppings = toppings; //this will be an array
  this.size = size; //this will be a string
  this.cost = 6;
}

Pizza.prototype.checkCost = function(){ //totals cost based on toppings and size
  this.toppingsCost = (this.toppings.length * .50);
  this.checkCheese();
  this.sizeCost;
  if(this.size === "small"){
    this.sizeCost = 6;
  } else if (this.size === "medium"){
    this.sizeCost = 8
  } else if (this.size === "large"){
    this.sizeCost = 10;
  }
  this.cost = (this.sizeCost + this.toppingsCost);

}

Pizza.prototype.checkCheese = function(){ //this function makes a plain cheese just cost the size
  if (this.toppings.includes("cheese")){
    this.toppingsCost = 0;
  }
}

Pizza.prototype.pushCost = function(){
  allCost += this.cost;
}


$(document).ready(function(){
  $('#pizzaOrder').submit(function(event){
    event.preventDefault();
    orderCounter++;
    sizeInput = ($('#sizeChoice option:selected').val());
    $('input:checkbox[name=toppings]:checked').each(function(){
      toppingsInput.push($(this).val())
    });
    newOrder = new Pizza(toppingsInput, sizeInput);
    newOrder.checkCost();
    // newOrder.pushCost();

    console.log(toppingsInput);
  })
})
