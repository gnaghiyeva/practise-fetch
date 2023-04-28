//add user
import { postCategory } from "./httpprequest.js";
let contactName = document.querySelector("#contact-name");
let contactTitle = document.querySelector("#contact-title");
let country = document.querySelector("#country");
let submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click",function(e){
    e.preventDefault();
    const category = {
        contactName: contactName.value,
        contactTitle: contactTitle.value,
        address: {
            country: country.value
        }
    }
    //reset inputs
    contactName.value = "";
    contactTitle.value = "";
    country.value = "";
    postCategory(category);
    // window.location.href = "http://127.0.0.1:5500/index.html";
})