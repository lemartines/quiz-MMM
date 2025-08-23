// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
  
  // Objeto com as respostas corretas (gabarito) do quiz
  // Cada chave representa o "name" do input da pergunta
   const gabarito = {
    'pergunta 1': 'd) 515', // Radio (resposta exata como string)
    'pergunta 2': 'd) 20,85', // Texto livre
    'pergunta 3': 'e) 60%', // Checkbox: só '25%' deve ser selecionado
    'pergunta 4': 'b) 123, 351.6, 211.5', // Fórmula matemática como string
    'pergunta 5': 'c) 14,6', // Resposta de texto para média
    'pergunta 6': 'a) 8,83', // Resposta de média
    'pergunta 7': 'b) 7,20 e está acima da média', // Mediana comparada com a média
    'pergunta 8': 'b) 17,50', // Resposta sobre a moda
    'pergunta 9': 'b) 21 ', // Moda dos dados da tabela
    'pergunta 10': 'b) azul' // Moda das preferências de cor
  };


  // Função para normalizar texto: remove acentos e converte para minúsculas
  function normalizeText(text) {
    return text
      .trim() // remove espaços no início/fim
      .toLowerCase() // tudo minúsculo
      .normalize("NFD") // separa letras de acentos
      .replace(/[\u0300-\u036f]/g, ""); // remove os acentos
  }

  // Seleciona a tag <main> onde os resultados serão mostrados
  const main = document.querySelector('main');

  // Cria dinamicamente uma nova seção no HTML para finalizar o quiz
  const resultadoSection = document.createElement('section');
  resultadoSection.innerHTML = `
    <h2>Finalize seu Quiz</h2>
    <label for="emailUser">Digite seu email para salvar seu resultado:</label><br>
    <input type="email" id="emailUser" required placeholder="seuemail@exemplo.com"><br><br>
    <button id="btnEnviar">Enviar Respostas</button>
    <div id="resultadoFinal" style="margin-top: 20px;"></div>
  `;
  main.appendChild(resultadoSection); // adiciona a seção ao DOM

  // Referências aos elementos de email, botão e div de resultado
  const btnEnviar = document.getElementById('btnEnviar');
  const emailInput = document.getElementById('emailUser');
  const resultadoDiv = document.getElementById('resultadoFinal');

  // Evento de clique no botão "Enviar Respostas"
  btnEnviar.addEventListener('click', (e) => {
    e.preventDefault(); // evita recarregar a página

    // Pega o email digitado e valida se está no formato básico
    const email = emailInput.value.trim().toLowerCase();
    if (!email || !email.includes('@')) {
      alert('Por favor, digite um email válido.');
      return;
    }

    let acertos = 0; // contador de acertos
    let erros = 0;   // contador de erros

    // === PERGUNTA 1 === (tipo radio)
    const p1 = document.querySelector('input[name="pergunta1"]:checked');
    if (p1) {
      if (p1.value === gabarito['pergunta1']) acertos++;
      else erros++;
    } else erros++; // nenhuma opção selecionada

    // === PERGUNTA 2 === (tipo radio)
    const p2 = document.querySelector('input[name="pergunta2"]:checked');
    if (p2) {
      if (p2.value === gabarito['pergunta2']) acertos++;
      else erros++;
    } else erros++; // nenhuma opção selecionada

    // === PERGUNTA 3 === (tipo radio)
    const p3 = document.querySelector('input[name="pergunta3"]:checked');
    if (p3) {
      if (p3.value === gabarito['pergunta3']) acertos++;
      else erros++;
    } else erros++; // nenhuma opção selecionada

    // === PERGUNTA 4 === (tipo radio com fórmula)
    const p4 = document.querySelector('input[name="pergunta4"]:checked');
    if (p4) {
      // Compara ignorando espaços entre os caracteres
      if (p4.value.replace(/\s+/g, '') === gabarito['pergunta4'].replace(/\s+/g, '')) acertos++;
      else erros++;
    } else erros++;

    // === PERGUNTA 5 === (tipo radio com fórmula)
    const p5 = document.querySelector('input[name="pergunta5"]:checked');
    if (p5) {
      // Compara ignorando espaços entre os caracteres
      if (p5.value.replace(/\s+/g, '') === gabarito['pergunta5'].replace(/\s+/g, '')) acertos++;
      else erros++;
    } else erros++;

    // === PERGUNTA 6 === (tipo radio com fórmula)
    const p6 = document.querySelector('input[name="pergunta6"]:checked');
    if (p6) {
      // Compara ignorando espaços entre os caracteres
      if (p6.value.replace(/\s+/g, '') === gabarito['pergunta6'].replace(/\s+/g, '')) acertos++;
      else erros++;
    } else erros++;

    // === PERGUNTA 7 === (tipo radio com fórmula)
    const p7 = document.querySelector('input[name="pergunta7"]:checked');
    if (p7) {
      // Compara ignorando espaços entre os caracteres
      if (p7.value.replace(/\s+/g, '') === gabarito['pergunta7'].replace(/\s+/g, '')) acertos++;
      else erros++;
    } else erros++;

    // === PERGUNTA 8 === (tipo radio com fórmula)
    const p8 = document.querySelector('input[name="pergunta8"]:checked');
    if (p8) {
      // Compara ignorando espaços entre os caracteres
      if (p8.value.replace(/\s+/g, '') === gabarito['pergunta8'].replace(/\s+/g, '')) acertos++;
      else erros++;
    } else erros++;

    // === PERGUNTA 9 === (tipo radio com fórmula)
    const p9 = document.querySelector('input[name="pergunta9"]:checked');
    if (p9) {
      // Compara ignorando espaços entre os caracteres
      if (p9.value.replace(/\s+/g, '') === gabarito['pergunta9'].replace(/\s+/g, '')) acertos++;
      else erros++;
    } else erros++;

    // === PERGUNTA 10 === (tipo radio com fórmula)
    const p10 = document.querySelector('input[name="pergunta10"]:checked');
    if (p10) {
      // Compara ignorando espaços entre os caracteres
      if (p10.value.replace(/\s+/g, '') === gabarito['pergunta10'].replace(/\s+/g, '')) acertos++;
      else erros++;
    } else erros++;

    // Cria um objeto com os dados do resultado
    const resultado = {
      acertos,
      erros,
      data: new Date().toLocaleString() // salva a data e hora local
    };

    // Salva os resultados no localStorage com o email como chave
    let banco = JSON.parse(localStorage.getItem('quizResultados') || '{}');
    banco[email] = resultado;
    localStorage.setItem('quizResultados', JSON.stringify(banco));
    // Preenche os campos ocultos do formulário com os dados do quiz
document.getElementById('campoAcertos').value = acertos;
document.getElementById('campoErros').value = erros;

// Cria um resumo textual das respostas
const respostasResumo = `
   Pergunta1: ${p1 ? p1.value : 'sem resposta'}
      Pergunta2: ${p2 ? p2.value : 'sem resposta'}
      Pergunta3: ${p3 ? p3.value : 'sem resposta'}
      Pergunta4: ${p4 ? p4.value : 'sem resposta'}
      Pergunta5: ${p5 ? p5.value : 'sem resposta'}
      Pergunta6: ${p6 ? p6.value : 'sem resposta'}
      Pergunta7: ${p7 ? p7.value : 'sem resposta'}
      Pergunta8: ${p8 ? p8.value : 'sem resposta'}
      Pergunta9: ${p9 ? p9.value : 'sem resposta'}
      Pergunta10: ${p10 ? p10.value : 'sem resposta'}
    `;
document.getElementById('campoResumo').value = respostasResumo.trim();

    // Exibe o resultado para o usuário na tela
    resultadoDiv.innerHTML = `
      <p><strong>Resultado para ${email}</strong></p>
      <p>Acertos: ${acertos}</p>
      <p>Erros: ${erros}</p>
      <p>Seu resultado foi salvo com sucesso!</p>
    `;
    document.getElementById('quizForm').submit();
  });
});