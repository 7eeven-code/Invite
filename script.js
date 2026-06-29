const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const celebration = document.getElementById('celebration');
const buttons = document.querySelector('.buttons');
const heartsContainer = document.getElementById('hearts');

// Botão SIM
yesBtn.addEventListener('click', () => {
    buttons.style.display = 'none';
    celebration.style.display = 'block';
    
    // Criar corações
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = '❤️';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = window.innerHeight + 'px';
            heartsContainer.appendChild(heart);
            
            setTimeout(() => heart.remove(), 2500);
        }, i * 100);
    }
});

// Botão NÃO - foge do mouse
noBtn.addEventListener('mouseenter', () => {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 50);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.zIndex = '100';
});

// Mobile - botão nao foge ao tocar
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 50);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.zIndex = '100';
});
