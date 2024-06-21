//E-mial correto (andromedastudios@gmail.com)
//Senha correta ('#Andromeda0.1')
let submit = document.querySelector('#submit_B')

//Event of submit
submit.addEventListener('click', function(p) {
  let email = document.querySelector('#Dev_E-mail');
  let password = document.querySelector('#Dev_Password');
  let dev_email = email.value;
  let dev_password = password.value;
  
  if (dev_email === 'andromedastudios@gmail.com' && dev_password === '#Andromeda0.1') {
    document.querySelector('form').action = 'clientpaht/clin.html'; 
  } else {
    p.preventDefault();
  }

  //Parte das bordas vermelhas com seus devidos textos
  //Adicionar os textos
  if (dev_email !== 'andromedastudios@gmail.com') {
    document.querySelector('#Dev_E-mail').style = 'border: solid red';
    document.querySelector('#span_email').innerHTML = 'Email incorreto';
    document.querySelector('#span_email').style = 'font-size: 12px; color:red; margin-left: 20%;';
  } else if (dev_email === 'andormedastudios@gmail.com') {
    document.querySelector('#Dev_E-mail').style = 'border: solid green';
  }

  if (dev_password !== '#Andromeda0.1') {
    document.querySelector('#Dev_Password').style = 'border: solid red';
    document.querySelector('#span_password').style = 'color: red; font-size: 12px; margin-left: 20%;';
    document.querySelector('#span_password').innerHTML = 'Senha incorreta';
  } else if (dev_password === '#Andromeda0.1') {
    document.querySelector('#span_password').style = 'border: solid green';
  }

  console.log(dev_email);
  console.log(dev_password);
});

//Bakground parte