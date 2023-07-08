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
    // const lbl = document.createElement("label");
    // const img1 = document.createElement("img");

    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then((json)=>{
        
        for(let i = 0; i< 3; i++){
            let img1 = document.createElement("img");
            img1.src = json[i]["url"];
            img1.style.width= "200px";
            //style image
            img1.className ="shadow rounded border p-3 m-2"
            // img1.addEventListener("mouseover", onHover);
            // img1.addEventListener("mouseout", mouseout);
            div.appendChild(img1);
        }
        // console.log(json);
        section.appendChild(div);
      })
}

loadData();