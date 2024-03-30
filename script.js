document.addEventListener("DOMContentLoaded",function()
{
    const navbar = document.getElementById("list");
    const menu = document.getElementById("menu");

    menu.addEventListener("click",function(){
        if(navbar.style.display === "none"){
            navbar.style.display = "block"
        }else if(navbar.style.display = "none"){
            menu.display.style = "block"
        }else{
            menu.style.display = "block";
        }       
        
    })
})


