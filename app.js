let amigos = [];

function sortearAmigo(){
    if(amigos.length==0){
        alert('Por favor ingrese al menos un amigo');
        return;
    }
    console.log('Sorteando amigo secreto');
    let amigoSecreto=amigos[Math.floor(Math.random()*amigos.length)];
    document.querySelector('#listaAmigos').innerHTML='';
    document.querySelector('#resultado').innerHTML=amigoSecreto;

}


function agregarAmigo(){
    
    let inputbox= document.querySelector('#amigo');
    if(inputbox.value==''){
        alert('Por favor ingrese un nombre válido');
        return;
    }
    else {
        amigos.push(inputbox.value);
        inputbox.value='';
        document.querySelector('#listaAmigos').innerHTML=amigos.join('<br>');
    }
    console.log(amigos);
}

