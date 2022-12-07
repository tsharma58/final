let popup=document.getElementById("popup")

function openPopup(){
  popup.classList.add("open-popup");
}
function closePopup()
{
popup.classList.remove("close-popup");
}

let form = document.querySelector("#appt-form");
let submitBtn = document.querySelector("#submit");

submitBtn.onclick = (event) => {
  form.classList.add("was-validated");
};

form["postal-code"].oninput = (event) => {
  let postalCode = form["postal-code"].value;
  let r = /^[A-Za-z]\d[A-Za-z][\s-]?\d[A-Za-z]\d$/;
  if (r.test(postalCode)) {
    form["postal-code"].setCustomValidity("");
  } else {
    form["postal-code"].setCustomValidity(
      "Please input a valid Canadian postal code."
    );
  }
};






