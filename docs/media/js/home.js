$(document).ready(function () {
    $('#frCep').simpleMask({
        'mask': 'cep',
        'nextInput': true
    });
    $('#frDtel').simpleMask({
        'mask': 'ddd-tel9',
        'nextInput': true
    });
    $('#frTel').simpleMask({
        'mask': 'tel9',
        'nextInput': true
    });
    $('#frData').simpleMask({
        'mask': 'data',
        'nextInput': true
    });
    $('#frCpf').simpleMask({
        'mask': 'cpf',
        'nextInput': true
    });
    $('#frCnpj').simpleMask({
        'mask': 'cnpj',
        'nextInput': true
    });
    $('#frCallback').simpleMask({
        'mask': '#####',
        'nextInput': true,
        'onComplete': function (element) {
            console.log('onComplete - Campo preenchido!', element);
            alert('Campo com callback completado! Verifique o console.');
        }
    });
    $('#frCep').focus();
});

function switchTab(name, btn) {
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + name).classList.add('active');
    btn.classList.add('active');
}

// Highlight.js
if (typeof hljs !== 'undefined') {
    hljs.highlightAll();
} else {
    console.warn('hljs not found!');
}