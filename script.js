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
   let acertos = 0;
    let erros = 0;

    const p1 = document.querySelector('input[name="pergunta 1"]:checked');
    const p2 = document.querySelector('input[name="pergunta 2"]');
    const p3 = document.querySelector('input[name="pergunta 3"]');
    const p4 = document.querySelector('input[name="pergunta 4"]:checked');
    const p5 = document.querySelector('input[name="pergunta 5"]:checked');
    const p6 = document.querySelector('input[name="pergunta 6"]:checked');
    const p7 = document.querySelector('input[name="pergunta 7"]:checked');
    const p8 = document.querySelector('input[name="pergunta 8"]:checked');
    const p9 = document.querySelector('input[name="pergunta 9"]:checked');
    const p10 = document.querySelector('input[name="pergunta 10"]:checked');

    if (p1 && p1.value === gabarito['pergunta 1']) acertos++; else erros++;
    if (p2 && normalizeText(p2.value) === normalizeText(gabarito['pergunta 2'])) acertos++; else erros++;
    if (p3Selecionados.length === gabarito['pergunta3'].length &&
        p3Selecionados.every(v => gabarito['pergunta3'].includes(v))) {
      acertos++;
    } else {
      erros++;
    }
    if (p4 && p4.value.replace(/\s+/g, '') === gabarito['pergunta 4'].replace(/\s+/g, '')) acertos++; else erros++;

    const resumo = `
      Pergunta 1: ${p1 ? p1.value : 'sem resposta'}
      Pergunta 2: ${p2 ? p2.value.trim() : 'sem resposta'}
      Pergunta 3: ${p3 ? p3.value.trim() : 'sem resposta'}
      Pergunta 4: ${p4 ? p4.value : 'sem resposta'}
      Pergunta 5: ${p5 ? p5.value : 'sem resposta'}
      Pergunta 6: ${p6 ? p6.value : 'sem resposta'}
      Pergunta 7: ${p7 ? p7.value : 'sem resposta'}
      Pergunta 8: ${p8 ? p8.value : 'sem resposta'}
      Pergunta 9: ${p9 ? p9.value : 'sem resposta'}
      Pergunta 10: ${p10 ? p10.value : 'sem resposta'}
    `;

    document.getElementById('campoAcertos').value = acertos;
    document.getElementById('campoErros').value = erros;
    document.getElementById('campoResumo').value = resumo.trim();

    alert(`Você acertou ${acertos} e errou ${erros}. Enviando seu feedback...`);

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
    const p1 = document.querySelector('input[name="pergunta 1"]:checked');
    if (p1) {
      if (p1.value === gabarito['pergunta 1']) acertos++;
      else erros++;
    } else erros++; // nenhuma opção selecionada

    // === PERGUNTA 2 === (tipo radio)
    const p2 = document.querySelector('input[name="pergunta 2"]:checked');
    if (p2) {
      if (p2.value === gabarito['pergunta 2']) acertos++;
      else erros++;
    } else erros++; // nenhuma opção selecionada

    // === PERGUNTA 3 === (tipo radio)
    const p3 = document.querySelector('input[name="pergunta 3"]:checked');
    if (p3) {
      if (p3.value === gabarito['pergunta 3']) acertos++;
      else erros++;
    } else erros++; // nenhuma opção selecionada

    // === PERGUNTA 4 === (tipo radio)
    const p4 = document.querySelector('input[name="pergunta 4"]:checked');
    if (p4) {
      if (p4.value === gabarito['pergunta 4']) acertos++;
      else erros++;
    } else erros++; // nenhuma opção selecionada

    // === PERGUNTA 5 === (tipo radio)
    const p5 = document.querySelector('input[name="pergunta 5"]:checked');
    if (p5) {
      if (p5.value === gabarito['pergunta 5']) acertos++;
      else erros++;
    } else erros++; // nenhuma opção selecionada

    // === PERGUNTA 6 === (tipo radio)
    const p6 = document.querySelector('input[name="pergunta 6"]:checked');
    if (p6) {
      if (p6.value === gabarito['pergunta 6']) acertos++;
      else erros++;
    } else erros++; // nenhuma opção selecionada

    // === PERGUNTA 7 === (tipo radio)
    const p7 = document.querySelector('input[name="pergunta 7"]:checked');
    if (p7) {
      if (p7.value === gabarito['pergunta 7']) acertos++;
      else erros++;
    } else erros++; // nenhuma opção selecionada

    // === PERGUNTA 8 === (tipo radio)
    const p8 = document.querySelector('input[name="pergunta 8"]:checked');
    if (p8) {
      if (p8.value === gabarito['pergunta 8']) acertos++;
      else erros++;
    } else erros++; // nenhuma opção selecionada

    // === PERGUNTA 9 === (tipo radio)
    const p9 = document.querySelector('input[name="pergunta 9"]:checked');
    if (p9) {
      if (p9.value === gabarito['pergunta 9']) acertos++;
      else erros++;
    } else erros++; // nenhuma opção selecionada

    // === PERGUNTA 10 === (tipo radio)
    const p10 = document.querySelector('input[name="pergunta 10"]:checked');
    if (p10) {
      if (p10.value === gabarito['pergunta 10']) acertos++;
      else erros++;
    } else erros++; // nenhuma opção selecionada

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

    // Exibe o resultado para o usuário na tela
    resultadoDiv.innerHTML = `
      <p><strong>Resultado para ${email}</strong></p>
      <p>Acertos: ${acertos}</p>
      <p>Erros: ${erros}</p>
      <p>Seu resultado foi salvo com sucesso!</p>
    `;
  });
});
