$(document).ready(function(){
  $('form').validate({
    rules: {
      nome: {
        required:true,
      },
      email: {
        required:true,
        email: true,
      },
      mensagem: {
        required: true,
      }
    },
    messages: {
      nome: 'Este campo é obrigatório!',
      email: 'Este campo é obrigatório!',
      mensagem: 'Este campo é obrigatório!',
    }
  })

  $('#telefone').mask('(00) 00000-0000', {
    placeholder:'(83) 44444-4444',
  })

})