
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

  
  
  
  
   }

}

function SubmitOrder()
       {
		
           if (validateFormText() == false)
           {
           alert("You are missing some information, please check and submit again.");
           return;
           }   
	   }

       function validateFormText()
       {
           var customer = document.DeliveryInfo.DeliveryFNLName.value;
           if (customer.length == 0) return false;
           var address = document.DeliveryInfo.address.value;
           if (address.length == 0) return false;
           var city = document.DeliveryInfo.city.value;
           if (city.length == 0) return false;
           var state = document.DeliveryInfo.state.selectedIndex;
           if (state == 0) return false;
           var phone = document.DeliveryInfo.phone.value;
           if (phone.length == 0) return false;
           var email = document.DeliveryInfo.email.value;
           if (email.length == 0) return false;
           return true;
       }











