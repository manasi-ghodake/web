const search = document.getElementById("search");
const btn = document.getElementById("btn");

let openInput = true;

const input= ()=>{
    if (openInput){
        search.style.width = 0;
        openInput=false;
    }else{
        search.style.width = "150px";
        openinput = true;
    }
};

btn.addEventListener("click",input);