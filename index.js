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

    if (dateInput && timeInput) {
        const dateTimeString = dateInput + 'T' + timeInput + ':00';
        const timestamp = new Date(dateTimeString).getTime() / 1000;
        
        document.getElementById('result').innerText = 'Timestamp: ' + timestamp;
        document.getElementById('time').innerText = convertTimestamp(timestamp);
    } else {
        document.getElementById('timestampResult').innerText = 'Por favor, selecciona una fecha y hora válidas.';
        document.getElementById('time').innerText = '';
    }
}
