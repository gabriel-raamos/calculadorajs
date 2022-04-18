function clr(){
    document.getElementById('text').value = "";
}

function mostrador(val){
    document.getElementById('text').value += val;
}

function evaluation(){
    document.getElementById('text').value = eval(document.getElementById('text').value);
}