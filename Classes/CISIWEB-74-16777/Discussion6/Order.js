
function doalert(checkboxElem) {
  if (checkboxElem.checked) {
alert("checked")
document.getElementById("BillFNLName").innerHTML = document.getElementById("DeliveryFNLName").innerHTML


  } else {
    alert("notchecked")
  }
}

/* create event listeners */
function createEventListeners() {

   var same = document.getElementById("BillSameDel");
   if (same.addEventListener) {
     same.addEventListener("click", copyDeliveryToBilling, false);
   } else if (same.attachEvent)  {
     same.attachEvent("onclick", copyDeliveryToBilling);
   }

}










/* copy Delivery Info to Billing */
function copyDeliveryToBilling() {
   var BillingFormData = document.querySelectorAll("#BillingInfo input");
   var DeliveryFormData = document.querySelectorAll("#DeliveryInfo input");
   if (document.getElementById("BillSameDel").checked) {
      for (var i = 0; i < DeliveryFormData.length; i++) {
         BillingFormData[i + 1].value = DeliveryFormData[i].value;
      }
      document.querySelector("#BillingInfo select").value = document.querySelector("#DeliveryInfo select").value;
   } else {
      for (var i = 0; i < DeliveryInfo.length; i++) {
         BillingInfo[i + 1].value = "";
      }
      document.querySelector("#BillingInfo select").selectedIndex = -1;
   }
}





