function Timestamp() {
    const dateInput = document.getElementById('date').value;
    const timeInput = document.getElementById('time').value;

    if (dateInput && timeInput) {
        const dateTimeString = dateInput + 'T' + timeInput + ':00';
        const timestamp = new Date(dateTimeString).getTime() / 1000;
        
        document.getElementById('result').innerText = 'Timestamp: ' + timestamp;
    } else {
        document.getElementById('result').innerText = 'Por favor, selecciona una fecha y hora válidas.';
    }
}