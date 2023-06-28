const signupForm = document.getElementById('signup_form"');

signupForm.onsubmit = () => {
  const senha = documet.getElementById('senha').value;
  const confSenha = documet.getElementById('conf_senha').value;
  if(senha != confSenha) {
    documet.getElementById('confirm-senha-error').innerTML('As senhas não coincidem.');
    return false;
  }
}
/*
let modalElement = domElementId('modal_confirm');
let btnModalConfirm = domElementId('button_modal_confirm');

function del(id, descricao) {
  let modal = new bootstrap.Modal(modalElement, {
    keyboard: false,
  });
  let modalConfirmBody = domElementId('modal_confirm_body');
  modalConfirmBody.innerHTML = 'Deseja excluir ' + descricao + '?';
  // console.log(id);
  let form = domElementId('form');
  form.action = '/departamento/del/' + id;

  // let input = document.createElement('input');
  // input.setAttribute('type', 'hidden');
  // input.setAttribute('name', '_csrf');
  // input.setAttribute('value', csrf);
  // //append to form element that you want .
  // form.appendChild(input);
  modal.show();
}

modalElement.addEventListener('show.bs.modal', function (event) {
  let divButtons = domElementId('div_actions'); //document.getElementById('div_actions');
  let buttons = divButtons.getElementsByTagName('BUTTON');

  if (buttons[0]) {
    buttons[0].addEventListener('click', function (event) {
      modalConfirmBody.innerHTML = 'Você clicou no botão de exclusão';
    });
  }

  // Caso exista mais de um ação. Podemos capiturar cada ação com base no atributo data-action.
  /*
 Array.from(buttons).forEach((item, i) => {
 item.addEventListener("click", function(event) {
 //action
 let action = this.getAttribute('data-action');
 console.log(action);
 });
 });
});


function domElementId(id) {
  return document.getElementById(id);
}
*/
