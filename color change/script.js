document.body.style.backgroundColor="blue";
let btn = document.querySelector("button");
let Color = ["#000000","#FFFFFF","#FF0000","#00FF00","#0000FF","#FFFF00","#00FFFF","#FF00FF","#808080","#FFA500"];
btn.addEventListener("click",function()
{
        let randomNum = Math.floor(Math.random()*Color.length);
        document.body.style.backgroundColor=Color[randomNum];
})

let div = document.querySelector("div");
div.style.display="flex";
div.style.justifyContent="center";
