const inputValue = document.querySelector('.input');
const form = document.querySelector('#myForm');
const errortext = document.querySelector('.errorMessage_p');
const underForm = document.querySelector('.underFormText');
const text = document.querySelector('underFormText');
const svg = document.querySelector('.svg');
const container = document.querySelector('container');


// svg.setAttribute('width', '327px');


form.addEventListener('submit', function(event) {
    event.preventDefault();
    function buttonActive(){
        const isMail = ['@gmail.com', '@yahoo.com', '@yahoo.com', '@outlook.com', '@aol.com', '@icloud.com', '@protonmail.com', '@mail.com', '@yandex.ru', 'live.com'];
        let isError = 1
        for (var mail of isMail) {
            if (inputValue.value.includes(mail)){
                isError = 0
            }
        }
        if (isError){
            underForm.classList.add('errorMessage_p_show');
            underForm.classList.remove('errorMessage_p_hide');
            underForm.textContent = 'Oops! Please check your email'
            underForm.style.color = 'red'
        }else{
            underForm.textContent = 'Succesfully'
            underForm.style.color = 'green'
        }
    }
    buttonActive()
})





// function chengeSVG() {
//     svgFirst.setAttribute('width', '56px');
//     svgSecond.setAttribute('width', 45);
//     svgThird.setAttribute('width', 73);
//     svgForth.setAttribute('width', 77);
// }
// chengeSVG();