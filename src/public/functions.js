document.addEventListener('DOMContentLoaded', ()=> {

const formMed = document.querySelector('.formularioMedico')

const ingresar= document.getElementById('ingresar')

ingresar.addEventListener('click', () => {
    formMed.style.visibility = 'visible'
    formAdm.style.visibility = 'hidden'
})


const user = document.getElementById('user');
const pass = document.getElementById('pass');
const error = document.querySelector('.error');
let errorUser = document.querySelector('.errorUser');
let errorPass = document.querySelector('.errorPass');

function validarLogin(e) {

   
    if (user.value.trim() === '' && pass.value.trim() === '') {
        e.preventDefault(); 
        error.style.visibility = 'visible'; 
        return false;
    }

    let user_er = /^[A-Za-zÀ-ÿ\s]+$/; 
    let pass_er = /^\d+$/;

   if (user.value.trim() === '') {
    e.preventDefault()
    errorUser.innerHTML = '*Campo obligatorio.'
    errorUser.style.visibility = 'visible'
    return false
   } else if(!user_er.test(user.value)){
    e.preventDefault()
    errorUser.innerHTML = '*Éste campo no admite números.'
    errorUser.style.visibility = 'visible'
    return false
   }

   if (pass.value.trim() === '') {
    e.preventDefault()
    errorPass.innerHTML = '*Campo obligatorio.'
    errorPass.style.visibility = 'visible'
    return false
   } else if(!pass_er.test(pass.value)){
    e.preventDefault()
    errorPass.innerHTML = '*Éste campo sólo admite números.'
    errorPass.style.visibility = 'visible'
    return false
   }

    return true;  
}

user.addEventListener('focus', ()=> {
   user.value = ''
   error.style.visibility = 'hidden'
   errorUser.style.visibility = 'hidden'
   error.style.visibility = 'hidden'
    
})
pass.addEventListener('focus', ()=> {
   pass.value = ''
   error.style.visibility = 'hidden' 
   errorUser.style.visibility = 'hidden' 
   errorPass.style.visibility = 'hidden' 
    
})

document.getElementById('loginMedico').addEventListener('submit', validarLogin);


})