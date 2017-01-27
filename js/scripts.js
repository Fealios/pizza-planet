var newOrder;
var toppingsInput = [];
var sizeInput;
var orderCounter = 0;
var allCost = 0;

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

Pizza.prototype.pushPizzas = function(){
  allCost += this.cost;
}


$(document).ready(function(){



  $('#pizzaOrder').submit(function(event){ //begin pizza order form=====
    $(this).off("click");
    orderCounter++;
    event.preventDefault();
    toppingsInput=[];
    sizeInput;
    sizeInput = ($('#sizeChoice option:selected').val());
    $('input:checkbox[name=toppings]:checked').each(function(){
      toppingsInput.push($(this).val())
    });
    newOrder = new Pizza(toppingsInput, sizeInput);
    newOrder.checkCost();
    newOrder.pushPizzas();
    displayReceipt();
  }) //end form submit ======================================

  $('#showReceipt').click(function(){
    $('#receipt').show();
    $(this).off("click");
  })


  function displayReceipt(){
    console.log('in the function');
    $('#receipt').append("<ul id='"+orderCounter+"'></ul>");
    for(i=0;i<newOrder.toppings.length;i++){
      $('#'+orderCounter).append("<li>"+newOrder.toppings[i]+"</li>");
    }
    $('#'+orderCounter).append("<span class='sizeReceipt'>"+sizeInput+"</span>");
    $('#totalCost').text(allCost);
  }


})
