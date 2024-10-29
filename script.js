let currentLetter = '';


function getRandomLetter() {
   const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   return alphabet[Math.floor(Math.random() * alphabet.length)];
}


function startGame() {
   currentLetter = getRandomLetter();
   document.getElementById('randomLetter').textContent = currentLetter;
   document.getElementById('categoriesContainer').style.display = 'block';
   document.getElementById('resultTable').style.display = 'none';
}


function calculatePoints(answer) {
   return answer && answer[0].toUpperCase() === currentLetter ? 10 : 0;
}


function submitAnswers() {
   const nome = document.getElementById('nome').value.trim();
   const cidade = document.getElementById('cidade').value.trim();
   const animal = document.getElementById('animal').value.trim();
   const fruta = document.getElementById('fruta').value.trim();


   const answers = [
       { categoria: 'Nome', resposta: nome },
       { categoria: 'Cidade', resposta: cidade },
       { categoria: 'Animal', resposta: animal },
       { categoria: 'Fruta', resposta: fruta }
   ];


   let resultHTML = '';
   let totalScore = 0;


   answers.forEach(answer => {
       const pontos = calculatePoints(answer.resposta);
       totalScore += pontos;
       resultHTML += `
           <tr>
               <td>${answer.categoria}</td>
               <td>${answer.resposta || '-'}</td>
               <td>${pontos}</td>
           </tr>
       `;
   });
}
resultHTML += `
   <tr>
       <td colspan="2"><strong>Total</strong></td>
       <td><strong>${totalScore}</strong></td>
   </tr>
`;


document.getElementById('resultBody').innerHTML = resultHTML;
document.getElementById('resultTable').style.display = 'table';

