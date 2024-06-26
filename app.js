const form = document.getElementById('form');
const email = document.getElementById('email');
const name = document.getElementById('name');
const phone = document.getElementById('phone');

function error(input,message){  // hatalı durumda geçerli
  input.className = 'form-control is-invalid';
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = 'invalid-feedback';
}

function success(input){  // başarılı olduğunda geçerli
  input.className = 'form-control is-valid';
}

function checkEmail(input) {  // e-posta adresi formatını kontrol eder
  const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //  return re.test(String(email).toLowerCase());  
  
  if(re.test(input.value)) {
      success(input);
  } else {
      error(input, 'Hatalı email girdiniz');
  }
}

function checkRequired(inputs) {  // belirli form elemanlarının boş olup olmadığını kontrol eder
  inputs.forEach (function(input){
      if(input.value === '') {
          error(input,`${input.id} gerekli`);
      } else {
          success(input);
      }
  })
}

function checkLength(input, min, max) {   // belirli bir form elemanının uzunluğunu belirli bir aralıkta kontrol eder
  if(input.value.length < min) {
      error(input, `${input.id} en az ${min} karakter olmalıdır.`);
  } else if(input.value.length > max) {
      error(input, `${input.id} en fazla ${max} karakter olmalıdır.`);
  } else {
      success(input);
  }
}

function checkPhone(input){  // bir telefon numarasının 10 haneli olup olmadığını kontrol eder
  var exp = /^\d{10}$/;
  if(!exp.test(input.value)) {
      error(input,'telefon 10 haneli olmalı');
  } 
}

form.addEventListener('submit',function(e){  // form elemanlarının durumunu kontrol eder
  e.preventDefault();  // sayesinde formun varsayılan davranışı (sayfanın yeniden yüklenmesi) engellenir

  checkRequired([email, name ,phone]);
  checkEmail(email);
  checkLength(name,7,15);
  checkPhone(phone);
});

var swiper = new Swiper(".slide-content", {
    slidesPerView: "auto",
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });