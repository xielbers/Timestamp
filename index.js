function CurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    document.getElementById('date').value = `${year}-${month}-${day}`;
}

function CurrentTime() {
    const now = new Date();
    const hours = ('0' + now.getHours()).slice(-2);
    const minutes = ('0' + now.getMinutes()).slice(-2);
    document.getElementById('time').value = `${hours}:${minutes}`;
}

function Timestamp() {
    const dateInput = document.getElementById('date').value;
    const timeInput = document.getElementById('time').value;
    const copyButton = document.getElementById('copyButton');

    if (dateInput && !timeInput) {
        const dateTimeString = dateInput + 'T00:00:00';
        const timestamp = new Date(dateTimeString).getTime() / 1000;
        document.getElementById('result').innerText = 'Timestamp: ';
        document.getElementById('timestamp').innerText = `${timestamp}`;
        copyButton.style.display = 'inline';
    } else if (dateInput && timeInput) {
        const dateTimeString = dateInput + 'T' + timeInput + ':00';
        const timestamp = new Date(dateTimeString).getTime() / 1000;
        document.getElementById('result').innerText = 'Timestamp: ';
        document.getElementById('timestamp').innerText = `${timestamp}`;
        copyButton.style.display = 'inline';
    } else if (!dateInput && timeInput) {
        document.getElementById('result').innerText = 'Error: Por favor, selecciona una fecha válida.';
        copyButton.style.display = 'none';
    } else {
        document.getElementById('result').innerText = 'Error: Por favor, selecciona una fecha y/o hora válidas.';
        copyButton.style.display = 'none';
    }
}

function Copy() {
    const resultText = document.getElementById('timestamp').innerText;
    if (resultText) {
        navigator.clipboard.writeText(resultText)
            .then(() => {
                alert('Resultado copiado al portapapeles');
            })
            .catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
    }
}
