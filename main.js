function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

function toggle(el) {
    var display = document.getElementById(el).style.display;
    if(display == "flex"){
        document.getElementById(el).style.display = 'none';        
    }                    
    else{
        document.getElementById(el).style.display = 'flex';
    }
} 
   