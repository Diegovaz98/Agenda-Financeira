function calcular() {
	var operacao = document.getElementById('op').value;
	
	switch(operacao){

		case '1': 
			subtracao();
			break;
		
		case '2': 
			soma();
			break; 

		default:
			alert('Entrada Inválida');

	}
	add_elementy_table();

}
function soma(){
	
	var quantia, valor = document.getElementById('valor').value;
	quantia= document.getElementById('teste').value;
	
	valor=parseFloat(valor);
	
	quantia=parseFloat(quantia);
	quantia= quantia+ valor;
	
	document.getElementById('teste').value= quantia;

			
}

function subtracao(){
	
	var quantia, valor = document.getElementById('valor').value;
	quantia= document.getElementById('teste').value;
	
	valor=parseFloat(valor);
	
	quantia=parseFloat(quantia);
	quantia= quantia - valor;
	
	document.getElementById('teste').value= quantia;
			
}
function add_elementy_table(){

	var operacao = document.getElementById('op').value;
	var description = document.getElementById('description').value;
	var novo_num= document.getElementById('valor').value;

	if (operacao==1){
		var t_body= document.getElementById('EXPENSES');
		var novo_text= document.createTextNode(description + ' -' + novo_num);
		document.getElementById('expenses').value = '-' + novo_num; 	
	}else if(operacao==2){
		var t_body= document.getElementById('INCOME');
		var novo_text= document.createTextNode(description + ' +' + novo_num);
		document.getElementById('income').value = '+' + novo_num;
	}else{
		alert('Operação invalida');
	}
	var novo_tr= document.createElement('tr');
	var novo_td= document.createElement('td');
	novo_td.appendChild(novo_text);
	novo_tr.appendChild(novo_td);
	t_body.appendChild(novo_tr);
}