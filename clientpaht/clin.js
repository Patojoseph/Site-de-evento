
let conteudo_nome = [
    ['José Francisco Silva Pereira'], 
  ];
  
  let conteudo_local = [
    ['Bahia'],
  ];
  
  let conteudo_hora = [
    ['20:20'],
  ];
  
  let conteudo_data = [
    ['16/05/2020'],
  ];
  
  //vendo o nome selecionado
  let name_select = document.getElementById('Nome_do_cliente');
  name_select.addEventListener('change', function fnome() {
    let name_option = this.selectedOptions[0];
    let nome = name_option.textContent;
    conteudo_nome.unshift([nome]);
  
    console.log(nome);
    console.log(conteudo_nome);
  });
  //Pegando o local escolhido
  let local_select = document.getElementById('Local');
    local_select.addEventListener('change', function flocal() {
    let local_option = this.selectedOptions[0];
    let local = local_option.textContent;
    conteudo_local.unshift([local]);
  
    console.log(local);
    console.log(conteudo_local);
  });
  let enviar = document.getElementById('Enviar');
  enviar.addEventListener('click', function submit() {
    //Pegando as informações para a tabela;
    let hor = document.getElementById('Hora');
    let hora = hor.value;
    let date = document.getElementById('Data');
    let data = date.value;
    let rdata = dayjs(data).format('DD/MM/YYYY');
    conteudo_hora.unshift([hora]);
    conteudo_data.unshift([data]);
    conteudo_nome.pop();
    conteudo_local.pop();
    conteudo_hora.pop();
    conteudo_data.pop();
  
    tabela_body = document.querySelector('table');
    tr = document.createElement('tr');
    nome_td = document.createElement('td');
    local_td = document.createElement('td');
    hora_td = document.createElement('td');
    data_td = document.createElement('td');
    estado_td = document.createElement('td');
  
    nome_td.textContent = conteudo_nome;
    local_td.textContent = conteudo_local;
    hora_td.textContent = conteudo_hora;
    data_td.textContent = conteudo_data;  
  
    tr.appendChild(nome_td);
    tr.appendChild(local_td);
    tr.appendChild(hora_td);
    tr.appendChild(data_td);
    tabela_body.appendChild(tr);
  
    let tr2 = document.getElementById('tr2');
    tr2 = tabela_body.firstChild;
    tabela_body.insertBefore(tr, tr2);
  
    //fazer os inputs voltarem ao zero
    console.log(hora);
    console.log(rdata);
    console.log(conteudo_hora, conteudo_data);
  });
  
  //colocar as informações na tabela
  let tabela_body = document.querySelector('table');
  let tr = document.createElement('tr');
  let nome_td = document.createElement('td');
  let local_td = document.createElement('td');
  let hora_td = document.createElement('td');
  let data_td = document.createElement('td');
  
  nome_td.textContent = conteudo_nome;
  local_td.textContent = conteudo_local;
  hora_td.textContent = conteudo_hora;
  data_td.textContent = conteudo_data;
  
  tr.appendChild(nome_td);
  tr.appendChild(local_td);
  tr.appendChild(hora_td);
  tr.appendChild(data_td);
  tabela_body.appendChild(tr);
  
  