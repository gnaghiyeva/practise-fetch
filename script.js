import { getAllCategories,deleteCategoryByID,postCategory } from "./httpprequest.js";

let tbody = document.querySelector("tbody");

getAllCategories()
.then((data)=>{
    console.log(data)
    data.forEach(element => {
        createTable(element);   
    });    
})


function createTable(users){

let tr = document.createElement("tr");

let th =document.createElement("th");
// th.classList.add("row");
th.textContent=`${users.id}`;

let contactName = document.createElement("td");
contactName.textContent=`${users.contactName}`;

let contactTitle = document.createElement("td");
contactTitle.textContent=`${users.contactTitle}`;

let country = document.createElement("td");
country.textContent=`${users.address?.country}`;

let setting = document.createElement("td");
let editBtn = document.createElement("td");
let deleteBtn = document.createElement("td");

setting.style.display="flex";
setting.style.gap="5px";

editBtn.innerHTML=`<i class="fa-solid fa-pen" style="color: white;"></i>`
deleteBtn .innerHTML=`<i class="fa-solid fa-trash" style="color: white;"></i>`

editBtn.style.cursor="pointer";
deleteBtn .style.cursor="pointer";

editBtn.style.padding = "6px 7px";
editBtn.style.backgroundColor="#e5bb24";
editBtn.style.borderRadius="6px";

deleteBtn .style.padding = "6px 7px";
deleteBtn .style.backgroundColor="#ff1f1f";
deleteBtn .style.borderRadius="6px";


deleteBtn.addEventListener("click",(e)=>{
// console.log(e.target);
let id = e.target.value;
deleteCategoryByID(id);
console.log(e.target.parentElement.parentElement.parentElement)
e.target.parentElement.parentElement.parentElement.remove();
})

setting.append(editBtn,deleteBtn )

tr.append(th,contactName,contactTitle,country,setting);
tbody.appendChild(tr);

return tbody;
}


