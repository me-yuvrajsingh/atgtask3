let btn = document.querySelector(".btn");
let loader = document.querySelector(".loader");
let enable = document.querySelector(".enable");
let disable = document.querySelector(".disable");
let input = document.querySelector(".input");
let toHide = [loader, enable];
const chngAtt = [btn, input];
const change = ()=>{
    if(input.value.length<4){
        alert("Atleast 4 characters are required");
    }else{
        btn.style.width = 98+"px";
        loader.classList.remove("none");
        btn.style.cursor = "not-allowed";
        setTimeout(() => {
            btn.style.width = `var(--btn-w)`;
            btn.classList.add("btn-disabled");
            chngAtt.forEach((e)=>{e.setAttribute("disabled", true)});
            toHide.map((e)=>{e.classList.add("none")});
            disable.classList.remove("none");
            input.style.color = `var(--disabled-txt-clr)`;
        }, 2000);
    }
}
