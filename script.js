var historicoCalc = [];
var expressaoCalc = '';

function inserir (num){
    var numero =  document.getElementById('display').innerHTML;
    var ult = document.getElementById('display').innerText;
    var lastItem = ult[ult.length - 1];
    var curItem = ult[ult.length-2];
    var proibido = ['%','*', '-', '+','/'];
    
    document.getElementById('display').innerHTML= numero + num;
   
    if(proibido.includes(lastItem) && proibido.includes(curItem)){
        alert('Não pode ter dois operadores juntos!')
        document.getElementById('display').innerHTML= ult.slice(0,ult.length-1);
    }
 }

function limpar(){
    document.getElementById('display').innerHTML= '';
}

function backspace(){
    let num = document.getElementById('display').textContent;
    document.getElementById('display').innerHTML= num.slice(0,num.length-1);
}

function igual(){
    try {
        var res=  eval(document.getElementById("display").textContent);
        expressaoCalc = document.getElementById("display").textContent;
        document.getElementById('display').innerHTML= res;
        historicoCalc.push(`${expressaoCalc} = `+ parseFloat(  document.getElementById('display').innerHTML))
        
    } catch (error) {
        alert("Erro de sintaxe, tente novamente.");
        limpar();
        console.log(error)
    }
}

function historico(){
   // alert(historicoCalc)
    document.getElementById('id01').style.display='block';
    for (let i = 0; i<historicoCalc.length; i++){
    document.getElementById('histModal').innerHTML +=historicoCalc[i] +"<br>";
}
}

function sairModal(){
    document.getElementById('id01').style.display='none'
    document.getElementById('histModal').innerHTML= ''
}