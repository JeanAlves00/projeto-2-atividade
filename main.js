document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('agenda-telefonica');
    const contactsList = document.getElementById('lista-contato');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const nome = document.getElementById('nome').value;
        const numero = document.getElementById('numero').value;

        if (nome.trim() === '' || numero.trim() === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const newRow = contactsList.insertRow();
        const nomeCell = newRow.insertCell(0);
        const numeroCell = newRow.insertCell(1);

        nomeCell.textContent = nome;
        numeroCell.textContent = numero;

        form.reset();
    });
});
