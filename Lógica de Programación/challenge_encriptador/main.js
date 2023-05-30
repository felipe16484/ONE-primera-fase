
const image_logo = document.getElementById('image_logo');
const encrypt_button = document.getElementById('encrypt');
const decrypt_button = document.getElementById('decrypt');
const copy_button = document.getElementById('copy_button');
const output_image = document.getElementById('output_image');
const output_no_image = document.getElementById('output_no_image');

let input_text = document.getElementById('input_text');
let output_text = document.getElementById('output_text');

const arr_vowels = 'aeiou'.split('');
const arr_vowels_encrypt = 'ai enter imes ober ufat'.split(' ');

image_logo.addEventListener('click',() => {

    input_text.value='';
    output_text.value='';

    if (!output_no_image.classList.contains("hidden")) {
        output_no_image.classList.toggle('hidden')
        output_image.classList.toggle('hidden')
    }

});

encrypt_button.addEventListener('click',() => {

    if (input_text.value !== ''){

        let final_encrypt = '';

        output_image.classList.add('hidden');
        output_no_image.classList.remove('hidden');

        for (let i = 0; i < input_text.value.length; i++) {
            
            let index = arr_vowels.indexOf(input_text.value[i]);

            if (index !== -1){
                final_encrypt += arr_vowels_encrypt[i];
            }else {
                final_encrypt += arr_vowels[i];
            }
        }
        
        output_text.value = final_encrypt.toString();

    }

});

decrypt_button.addEventListener('click',() => {
    alert('Hola2')
});

copy_button.addEventListener('click',() => {
    alert('Hola3')
});