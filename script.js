document.addEventListener('DOMContentLoaded', () => {

  // Função para normalizar texto: remove espaços, acentos e deixa tudo minúsculo
  function normalizeText(text) {
    return text.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  const gabarito = {
    pergunta1: "d) 515",
    pergunta2: "d) 20,85",
    pergunta3: "e) 60%",
    pergunta4: "b) 123, 351.6, 211.5",
    pergunta5: "c) 14,6",
    pergunta6: "a) 8,83",
    pergunta7: "b) 7,20 e está acima da média",
    pergunta8: "b) 17,50",
    pergunta9: "b) 21",
    pergunta10: "b) azul"
  };

  const main = document.querySelector('main');

  const resultadoSection = document.createElement('section');
  resultadoSection.innerHTML = `
    <h2>Finalize seu Quiz</h2>
    <label for="emailUser">Digite seu email para salvar seu resultado:</label><br>
    <input type="email" id="emailUser" required placeholder="seuemail@exemplo.com"><br><br>
    <button id="btnEnviar">Enviar Respostas</button>
    <div id="resultadoFinal" style="margin-top: 20px;"></div>
  `;
  main.appendChild(resultadoSection);

  const btnEnviar = document.getElementById('btnEnviar');
  const emailInput = document.getElementById('emailUser');
  const resultadoDiv = document.getElementById('resultadoFinal');
  const form = document.getElementById('quizForm');

  btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim().toLowerCase();
    if (!email || !email.includes('@')) {
      alert('Por favor, digite um email válido.');
      return;
    }

    let acertos = 0;
    let erros = 0;
    let resumo = '';

    for (let i = 1; i <= 10; i++) {
      const p = document.querySelector(`input[name="pergunta${i}"]:checked`);
      const valor = p ? p.value : 'sem resposta';
      resumo += `Pergunta${i}: ${valor}\n`;

      if (p && normalizeText(valor) === normalizeText(gabarito[`pergunta${i}`])) {
        acertos++;
      } else {
        erros++;
      }
    }

    document.getElementById('campoAcertos').value = acertos;
    document.getElementById('campoErros').value = erros;
    document.getElementById('campoResumo').value = resumo.trim();

    const resultado = { acertos, erros, data: new Date().toLocaleString() };
    let banco = JSON.parse(localStorage.getItem('quizResultados') || '{}');
    banco[email] = resultado;
    localStorage.setItem('quizResultados', JSON.stringify(banco));

    resultadoDiv.innerHTML = `
      <p><strong>Resultado para ${email}</strong></p>
      <p>Acertos: ${acertos}</p>
      <p>Erros: ${erros}</p>
      <p>Seu resultado foi salvo com sucesso!</p>
    `;

    form.submit();
  });

});
