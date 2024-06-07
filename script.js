const loginSection = document.getElementById('login-section');
const orderSection = document.getElementById('order-section');
const summarySection = document.getElementById('summary-section');
const trackOrderSection = document.getElementById('track-order-section');

// Simulação de login (substitua por lógica real)
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    loginSection.style.display = 'none';
    orderSection.style.display = 'block';
});

function closeSummary() {
    summarySection.style.display = 'none';
    orderSection.style.display = 'block';
}

function goBack() {
    trackOrderSection.style.display = 'none';
    summarySection.style.display = 'block'; 
}

function showSummary() {
    orderSection.style.display = 'none';
    summarySection.style.display = 'block';
}

function showTrackOrder() {
    summarySection.style.display = 'none';
    trackOrderSection.style.display = 'block';
}

// Adicione aqui a lógica para lidar com as interações do usuário nas telas de pedido e acompanhamento
// (ex: seleção de opções, cálculo de valores, envio de dados para o back-end, etc.)
