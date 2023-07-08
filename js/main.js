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

function loadData(){
    const div = document.createElement("div");
    const lbl = document.createElement("label");
    const p = document.createElement("p");
    const p2 = document.createElement("p"); //

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then((json)=>{
        p.innerText=json["title"];
        p2.innerText= json['completed'];///
        lbl.innerText= "Title of work";
        div.appendChild(lbl);
        div.appendChild(p);
        div.appendChild(p2);//
        section.appendChild(div);
      })
}

loadData();