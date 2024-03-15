$(function(){

    //FUNÇÕES DE ABRIR E FECHAR FORMULARIO
    abrirJanela();
    verificarCliqueFechar();

    //EVENTOS DO FORMULARIO
    function abrirJanela(){
        $('.btn').click(function(e){
            e.stopPropagation();
            $('.bg').fadeIn();
        });
    };

    function verificarCliqueFechar(){
        var el = $('body, .closeBtn');

        el.click(function(){
            $('.bg').fadeOut();
        });

        $('.form').click(function(e){
            e.stopPropagation();
        })
    }

    $('input[type=text]').focus(function(){
        resetaCampoInvalido($(this));
      })

    $('#form1').submit(function(e){
        //e.preventDefault();
        var nome = $('input[name=nome]').val();
        var telefone = $('input[name=telefone]').val();
        var email = $('input[name=email]').val();
    
        if(verificarNome(nome) == false){
            aplicarCampoInvalido($('input[name=nome]'))
            return false
        }else if(verificarTelefone(telefone) == false){
            aplicarCampoInvalido($('input[name=telefone]'));
            return false
        }else if(verificarEmail(email) == false){
            aplicarCampoInvalido($('input[name=email]'));
            return false
        }
        else{
            alert('Formulario enviado com sucesso!')
        }
        

         

        
        //se chegou até o final é porque esta tudo ok
        
    })

//FUNÇÕES PARA ESTILIZAR O CAMPO DO FORMULARIO
    
    function aplicarCampoInvalido(el){
        el.css('color', 'red')
        el.css('border','2px solid red');
        //el.data('invalido','true');
        el.val('Campo Inválido!');
      }

      function resetaCampoInvalido(el){
        el.css('color', 'black')
        el.css('border','1px solid #ccc');
        //el.data('invalido','true');
        el.val('');
      }
      
      //FUNÇÕES PARA VERIFICAR NOSSOS CAMPOS
      function verificarNome(nome){
        
        // Contando a quantidade de espaços e os respectivos valores.
        if(nome == ' '){
           return false
        }
        var amount = nome.split(' ').length;
        var splitStr = nome.split(' ');
        if(amount >= 2){
          for(var i = 0; i < amount; i++){
            if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){

            }else{
                
                return false
            }
            
          }
        }else{
            
            return false;
          }
}

    function verificarTelefone(telefone){
        if(telefone == ''){
        return false;
        }
        if(telefone.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4} $/) == null ){
            return false;
        } 
    }

    function verificarEmail(email){
        if(email == '')
        return false
    

    if(email.match(/^([a-z0-9.-_]{1,})+@+([a-z.]{1,})$/) == null){
        return false;
    } 

}
      
});
  


