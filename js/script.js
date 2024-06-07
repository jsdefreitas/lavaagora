document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const washOptions = document.querySelectorAll('.wash-option');
    const fabricTypes = document.querySelectorAll('.fabric-type');
    const fragrances = document.querySelectorAll('.fragrance');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('login-section').classList.add('d-none');
        document.getElementById('order-section').classList.remove('d-none');
    });

    washOptions.forEach(option => {
        option.addEventListener('click', function() {
            washOptions.forEach(btn => btn.classList.remove('btn-success'));
            this.classList.add('btn-success');
        });
    });

    fabricTypes.forEach(type => {
        type.addEventListener('click', function() {
            fabricTypes.forEach(btn => btn.classList.remove('btn-success'));
            this.classList.add('btn-success');
        });
    });

    fragrances.forEach(fragrance => {
        fragrance.addEventListener('click', function() {
            fragrances.forEach(btn => btn.classList.remove('btn-success'));
            this.classList.add('btn-success');
        });
    });
});

function showSummary() {
    document.getElementById('order-section').classList.add('d-none');
    document.getElementById('summary-section').classList.remove('d-none');
}

function closeSummary() {
    document.getElementById('summary-section').classList.add('d-none');
    document.getElementById('order-section').classList.remove('d-none');
}

function showTrackOrder() {
    document.getElementById('summary-section').classList.add('d-none');
    document.getElementById('track-order-section').classList.remove('d-none');
}

function goBack() {
    document.getElementById('track-order-section').classList.add('d-none');
    document.getElementById('summary-section').classList.remove('d-none');
}
