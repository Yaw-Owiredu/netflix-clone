const btn = document.querySelector("#start-btn");

const section = document.querySelector(".content")

const email = document.querySelector("#email-box");
const img = document.createElement("img");
const lbl = document.createElement("label");

function printValue(e){
    e.preventDefault();
    section.appendChild(lbl);
    alert(email.value)
    lbl.innerText="Welcome ,"+ email.value;
    lbl.style.color = "red";
    lbl.style.fontSize = "40px";
    img.src = "/images/BG.jpg";
    section.appendChild(img);

}
function mouseout(){
img.style.width = "500px"
}

function onHover(){
    img.style.width = "300px";
}

btn.addEventListener("click",printValue);
img.addEventListener("mouseover", onHover);
img.addEventListener("mouseout", mouseout);