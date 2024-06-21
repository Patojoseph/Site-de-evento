//E-mial correto (andromedastudios@gmail.com)
//I love the way you kiss me
//sweet dreams
//in the midle of the night
//the perfect girl
let submit_S = document.querySelector('#B_email')
//Capcha input 
let tcap = '1903'
let qcap = 1 
let help_Capcha = 0
//evento do reload Capcha
let reload = document.querySelector('#reload')
reload.addEventListener('click', rcapcha)
function rcapcha () {
  qcap = qcap + 1
  console.log(qcap)
  if (qcap === 2) {
    document.querySelector('#Capcha_Senha').src='../imagens/Cap 01.svg'
    tcap = '1903'
  } else if (qcap === 3) {
    document.querySelector('#Capcha_Senha').src='../imagens/Cap 02.svg'
    tcap = 'U0A'
  } else if (qcap === 4) {
    document.querySelector('#Capcha_Senha').src='../imagens/Cap 03.svg'
    tcap = 'bAD5'
  } else if (qcap === 5) {
    qcap = 2
    document.querySelector('#Capcha_Senha').src='../imagens/Cap 04.svg'
    tcap = '90Z6'
    help_Capcha = 1
    if (help_Capcha = 1) {
      let nd = confirm('Quer a resposta do Capcha ?')
      if (nd === true) {
        alert(tcap)
      } else if (nd === false) {
        help_Capcha = 0
      }
    }
  }
  console.log(tcap)
 
}

//parte do evento
submit_S.addEventListener('click', test11)
//função para fazer o evento de senha funuciar
function test11 () {
  let email = document.querySelector('#dev_email')
  let cemail = email.value
  let cap = document.querySelector('#Cap')
  let pss = 0
  let rcap = cap.value
  
  console.log(cemail)
  console.log(rcap)
  console.log(pss)


  if (cemail === 'andromedastudios@gmail.com' && rcap === tcap) {
    alert('Sua senha é: #Andromeda0.1')
    //redirecionamento
    let sair = confirm ('Deseja voltar para a página inicial ?')
    if (sair === true) {
      window.location.href='index.html'
    };
  } else if (cemail !== 'andromedastudios@gmail.com') {
    document.querySelector('#dev_email').style='border: 4px solid red;'
  } 

  if (rcap !== tcap) {
    document.querySelector('#Cap').style='border: 4px solid red;'
  }
}


//Parte do email 
let emailpart = document.querySelector('#Email-input')
let nome = emailpart.value
let events = document.querySelector('#email_reload_cap')
let emailcap = 1
let temailcap = 'U0A'
events.addEventListener('click', Miguel_Gay)
function Miguel_Gay () {
  emailcap = emailcap + 1
  console.log(temailcap)
  console.log(emailcap)
  if (emailcap === 1){
    document.querySelector('#Capcha_Email').src='../imagens/Cap 02.svg'
    temailcap = 'U0A'
  } else if (emailcap === 2) {
    document.querySelector('#Capcha_Email').src='../imagens/Cap 03.svg'
    temailcap = 'bAD5'
  } else if (emailcap === 3) {
    document.querySelector('#Capcha_Email').src='../imagens/Cap 04.svg'
    temailcap = '90Z6'
  } else if (emailcap === 4) {
    document.querySelector('#Capcha_Email').src='../imagens/Cap 01.svg'
    temailcap = '1903'
  } else if (emailcap === 5) {
    emailcap = 1
    let help_email_cap = confirm('Quer ver a resposta do Capcha ?')
    if (help_email_cap === true) {
      alert(temailcap)
    } 
  }
}

let submit_E = document.querySelector('#B_Rep_Email')
submit_E.addEventListener('click', Breno)

function Breno () {
  let emailfinal = document.querySelector('#Email-input')
  let remailfinal = emailfinal.value
  let name = document.querySelector('#name')
  let rname = name.value
  let pass = 1
  if (rname === '') {
    pass = 0
    document.querySelector('#name').style='border: 4px  solid red;'
  }
  console.log(pass)
  console.log(rname)
  console.log(remailfinal)
  if (remailfinal === temailcap && pass === 1) {
    alert('Seu email é: andromedastudios@gmail.com')
    let voltar = confirm('Deseja voltar para a tela inicial ?')
    if(voltar === true ) {
      window.location.href='index.html'
    }
  } else if (remailfinal !== temailcap) {
    document.querySelector('#Email-input').style='border: 4px  solid red;'
  }
}

let tr = 0
let troca = document.querySelector('#clieque_aqui')
troca.addEventListener('click', Alicia)
function Alicia () {
  if (tr === 0) {
    document.querySelector('.Email').style='display: block'
    document.querySelector('#B_email').style='display: none'
    document.querySelector('.transion_Senha').style='margin-top: 6%;'
    let title = document.querySelector('#textclick')
    title.textContent = 'Esqueceu sua senha'
    tr = 1
  } else if (tr === 1) {
    document.querySelector('.Email').style='display: none'
    document.querySelector('#B_email').style='display: block'
    document.querySelector('.transion_Senha').style='margin-top: 0%;'
    let title = document.querySelector('#textclick')
    title.textContent = 'Esqueceu seu email'
    tr = 0
  }
  console.log(tr)
}