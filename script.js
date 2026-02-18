// =========================
// ANIMAÇÃO DE CARDS AO SCROLL
// =========================
const cards = document.querySelectorAll('.card');

function animateCards() {
    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if(top < trigger){
            card.classList.add('show');
        }
    });
}

window.addEventListener('scroll', animateCards);
window.addEventListener('load', animateCards); // anima cards ao carregar página

// =========================
// SCROLL SUAVE NO MENU
// =========================
const menuLinks = document.querySelectorAll('nav a');

menuLinks.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if(targetElement){
            window.scrollTo({
                top: targetElement.offsetTop - 70, // ajusta para header fixo
                behavior: 'smooth'
            });
        }
    });
});

// =========================
// ANIMAÇÃO DE BOTÕES
// =========================
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-2px) scale(1.02)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0) scale(1)';
    });
});
