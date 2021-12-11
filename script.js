function shampoo() {
  //state variable
  const product=
['Tresmee','Dove','pentine','head&shoulder'];
const price=[400,500,800,120];
var pqty=[0,0,0,0];
var [qty, updateqty]=React.useState(pqty);
var [totalQty, updatetotalQty]=React.useState(0);
  
 var calqty=()=>{
   var total=0;
   qty.forEach(q=> {
     total +=q;
   });
   return total;
 };
 
var calprice = () => {
    var total = 0;
    qty.forEach((q, index) => {
      total += q * price[index];
    });

    return total;
  };
  
 var addtocart = index => {
    updateqty(qty.map((q, i) => i == index ? q + 1 : q));
  };

  function removecart(index) {
    updateqty(qty.map((q, i) => i == index && q > 0 ? q - 1 : q));
  };

  return (
    React.createElement("div", null,
    product.map((nm, index) => 
    React.createElement("div", { key: index }, 
    React.createElement("h3", null, nm, " : ", price[index], ", Qty: ",pqty[index]), 
    React.createElement("button", { onClick: () => addtocart(index) }, "Add"), 
    React.createElement("button", { onClick: () => removecart(index) }, "Remove"))), 

    React.createElement("h4", null, "Total qty: ", calqty()), 
    React.createElement("h4", null, "Total amount: ", calprice())));
};
ReactDOM.render( <shampoo/>,document.getElementById("root"));
