 function getprice(product, price) {
    const casetbody = document.getElementById(product);
    const caseNumber = 0;
    casetbody.innerText = caseNumber + price;
    fullcost();
 }

 document.getElementById('item-two').addEventListener('click',function (){
 getprice('case-total',180)
 });

 document.getElementById('order-now').addEventListener('click',function (){
 getprice('case-total',50);
 });

 document.getElementById('discount-today').addEventListener('click',function (){
 getprice('star-cost',50);
 });

 document.getElementById('buy-now').addEventListener('click',function (){
 getprice('star-cost',100);
 });

 document.getElementById('price-hight').addEventListener('click',function (){
 getprice('star-cost',200);
 });

 document.getElementById('normal-delivery').addEventListener('click',function (){
 getprice('normal-charge',50);
 });

 document.getElementById('first-delivery').addEventListener('click',function (){
 getprice('normal-charge',20);
 });

 function fullcost() {
     const baseprice = document.getElementById('full-price');
     const baseneed = parseInt(baseprice.innerText);

     const caseTotal = document.getElementById('food-total');
     const caseneed = parseInt(caseTotal.innerText);

     const storage = document.getElementById('star-cost');
     const hard = parseInt(storage.innerText);

     const delivery = document.getElementById('normal-charge');
     const cost = parseInt(delivery.innerText);

     const totalcost = document.getElementById('total-price');
     const complete = parseInt(totalcost.innerText);
     totalcost.innerText =  fullneed + starneed + hard + cost 


 }
 