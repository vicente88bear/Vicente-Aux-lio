// === LOGIN ===
const correctKey = "2328"; // key atualizada
const login = document.getElementById('login');
const painel = document.getElementById('painel');
const loginBtn = document.getElementById('loginBtn');
const keyInput = document.getElementById('keyInput');
const loginMsg = document.getElementById('loginMsg');

loginBtn.addEventListener('click', () => {
    if(keyInput.value === correctKey){
        login.style.display = "none";
        painel.style.display = "block";
    } else {
        loginMsg.textContent = "Key incorreta!";
    }
});

// === PAINEL ===
// Barra de progresso
const slider = document.getElementById('slider');
const barra = document.getElementById('barra');
const percent = document.getElementById('percent');

slider.addEventListener('input', () => {
    barra.style.width = slider.value + '%';
    percent.innerText = slider.value + '%';
});

// Botão Injetar com toggle e abertura do app
const injetarBtn = document.getElementById('injetar');
let injetado = false;

function abrirFreeFire() {
    // Tenta abrir o app instalado
    window.location = "freefire://"; 

    // Fallback: se não abrir, redireciona para a loja depois de 1s
    setTimeout(() => {
        if (navigator.userAgent.match(/android/i)) {
            window.open("https://play.google.com/store/apps/details?id=com.dts.freefireth", "_blank");
        } else if (navigator.userAgent.match(/iphone|ipad|ipod/i)) {
            window.open("https://apps.apple.com/br/app/free-fire/id1305098906", "_blank");
        }
    }, 1000);
}

injetarBtn.addEventListener('click', () => {
    abrirFreeFire(); // Tenta abrir o jogo

    // Alterna cor do botão como antes
    injetado = !injetado;
    if (injetado) {
        injetarBtn.style.backgroundColor = '#00ff99';
        injetarBtn.style.color = '#000';
        injetarBtn.textContent = 'Injetado';
    } else {
        injetarBtn.style.backgroundColor = '#555';
        injetarBtn.style.color = '#fff';
        injetarBtn.textContent = 'Injetar';
    }
});
