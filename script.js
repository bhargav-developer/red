let menu = document.getElementById('menu')

menu.style.maxHeight = "0px"
function bhargav(){
    if(menu.style.maxHeight === "0px"){
        menu.style.maxHeight = "200px"
       
    }
else
    {
        menu.style.maxHeight = "0px";
    }
}

// product-details

let pro = document.getElementById('product-img');
let small = document.getElementsByClassName('small-img')

small[0].onclick = function()
{
    pro.src = small[0].src; 
}
small[1].onclick = function()
{
    pro.src = small[1].src; 
}
small[2].onclick = function()
{
    pro.src = small[2].src; 
}
small[3].onclick = function()
{
    pro.src = small[3].src; 
}


