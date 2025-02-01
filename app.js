let names = [];

function addName() {
    const nameInput = document.getElementById('name-input');
    const name = nameInput.value.trim();

    const regex = /^[A-Za-z\s]+$/;

    if (name && regex.test(name)) {
        names.push(name);
        nameInput.value = ''; 
        updateNamesList();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingresa un nombre válido (solo letras y espacios)',
            allowOutsideClick: false,
            customClass: {
                popup: 'mi-alerta'
            }
        });
    }
}

function updateNamesList() {
    const namesList = document.getElementById('names');
    namesList.innerHTML = '';
    names.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        namesList.appendChild(li);
    });
}

function assignSecretFriend() {
    if (names.length < 2) {
        Swal.fire({
            icon: 'warning',
            title: '¡Atención!',
            text: 'Necesitas al menos 2 nombres para asignar amigos secretos',
            allowOutsideClick: false, 
            customClass: {
                popup: 'mi-alerta'
            }
        });
        return;
    }

    const secretFriend = shuffleArray([...names])[0];


    const resultList = document.getElementById('result');
    resultList.innerHTML = '';

    const li = document.createElement('li');
    li.textContent = `Tu amigo secreto es: ${secretFriend}`;
    resultList.appendChild(li);

    Swal.fire({
        icon: 'success',
        title: '¡Amigo asignado!',
        text: `Tu amigo secreto es: ${secretFriend}`,
        allowOutsideClick: false, 
        customClass: {
            popup: 'mi-alerta'
        }
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {  
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
}

function resetGame() {
    names = [];
    document.getElementById('names').innerHTML = '';
    document.getElementById('result').innerHTML = '';
}
