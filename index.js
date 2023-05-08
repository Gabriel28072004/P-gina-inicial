    function ValidaForm() {
     if (document.Formulario.Nome.value==""){
        window.alert("Digite o nome")
        document.Formulario.Nome.focus();
        return false;
    }; 
     if (document.Formulario.sobrenome.value==""){
        window.alert("Digite o sobrenome");
        document.Formulario.sobrenome.focus();
        return false;
    } 
    document.Formulario.submit(); 
    //document.getElementsByName("Formulario").submit();
    //window.alert("dveria ter enviado....");
    }


