(function(){
	var formulario=document.formulario_registro,
		elementos=formulario.elements;
	
	var validarinputs=function(){
		for(var i=0;i<elementos.length;i++){
			if(elementos[i].type=="text" || elementos[i].type=="email" || elementos[i].type=="password"){
				if(elementos[i].value==0){
					console.log('El campo' + elementos[i].name + ' esta incompleto');
					elementos[i].className=elementos[i].className + ' error';
					return false;
				}
				else{
					elementos[i].className=elementos[i].className.replace(" error","");
				}
			}
		}
		if(elementos.password.value!==elementos.password2.value){
			elementos.password.value="";
			elementos.password2.value="";
			elementos.password.className=elementos.password.className + ' error';
			elementos.password2.className=elementos.password2.className + ' error';
		}
		else{
			elementos.password.className=elementos.password.className.replace(" error","");
			elementos.password2.className=elementos.password2.className.replace(" error","");
		}
		return true;
	};
	var enviar=function(e){
		if(!validarinputs()){
			console.log('Falto validar los inputs');
			e.preventDefault();
		}
		else{
			alert("Se Envio correctamente");
			//console.log('Envia correctamente');
			//e.preventDefault();
		}
	};
	var focusinput=function(){
		this.parentElement.children[1].className="label active";
		this.parentElement.children[0].className=this.parentElement.children[0].className.replace("error","");
	};
	var blurinput=function(){
		if(this.value<=0){
			this.parentElement.children[1].className="label";
			this.parentElement.children[0].className=this.parentElement.children[0].className + " error";
		}
	};
	formulario.addEventListener("submit",enviar);
	for(var i=0;i<elementos.length;i++){
		if(elementos[i].type=="text" || elementos[i].type=="email" || elementos[i].type=="password"){
			elementos[i].addEventListener("focus",focusinput);
			elementos[i].addEventListener("blur",blurinput);
		}
	}
	
}())