/// Get The Order Type from localStorage ///
let orderType = localStorage.getItem('Order Type');
// console.log(orderType);
document.getElementById('order-type').innerHTML = orderType;

//! Update the order type function
function updateOrderType(orderType) {
  localStorage.setItem('Order Type', orderType);
};