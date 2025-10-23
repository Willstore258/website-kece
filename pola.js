const patternGrid = document.getElementById('patternGrid');
const correctPattern = ['1', '2', '3', '4', '5'];
let userPattern = [];

for (let i = 1; i <= 9; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.textContent = i;
  dot.dataset.num = i;

  dot.addEventListener('click', () => {
    if (!userPattern.includes(dot.dataset.num)) {
      dot.classList.add('active');
      userPattern.push(dot.dataset.num);
    }

    if (userPattern.length === correctPattern.length) {
      if (JSON.stringify(userPattern) === JSON.stringify(correctPattern)) {
        window.location.href = 'beranda.html';
      } else {
        alert('Pola salah, coba lagi!');
        userPattern = [];
        document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
      }
    }
  });

  patternGrid.appendChild(dot);
}
