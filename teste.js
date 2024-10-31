const fetch = require('node-fetch');
const fs = require('fs');
const FormData = require('form-data');

// Use sua chave de API
const API_KEY = 'f6RjZNBNkfJCEAxgWpDB8S2W';

async function removeBackground() {
    const formData = new FormData();
    
    // Substitua o caminho pela sua imagem local
    formData.append('image_file', fs.createReadStream('testes/fundo_mobile.jpg'));

    const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
            'X-Api-Key': API_KEY,
        },
        body: formData,
    });

    if (response.ok) {
        const buffer = await response.buffer();
        fs.writeFileSync('imagem_sem_fundo.png', buffer);  // Salvando a imagem sem fundo
        console.log('Imagem sem fundo salva!');
    } else {
        console.log(`Erro: ${response.statusText}`);
    }
}

removeBackground();
