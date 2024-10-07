let main_div =document.querySelector('.main_div');

let btn = document.getElementById("main_button");
let title= document.getElementById("title");

btn.addEventListener("click", function(){
    let correctitle=title.textContent;
    if (correctitle===correctitle.toLocaleLowerCase()){
        title.textContent=correctitle.toUpperCase();
    }else{
        title.textContent=correctitle.toLowerCase();
    }
    
    

});