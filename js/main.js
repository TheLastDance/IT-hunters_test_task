const loader = document.querySelector('#loader');
const root = document.querySelector('#root');
const popup = document.querySelector('.register');
const signUp = document.querySelector('#sign_up');
const body = document.querySelector('body');
const burger = document.querySelector('#burger_field');
const burgerNav = document.querySelector('#burger_navigation');
const register = document.querySelector('#register_overlay');
const close_btn = document.querySelector('#close_btn');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  body.classList.toggle("noScroll");
  burgerNav.classList.toggle('open');
})

close_btn.addEventListener('click', () => {
  register.classList.toggle("active");
})

signUp.addEventListener('click', (e) => {
  e.preventDefault();
  burger.classList.remove('active')
  burgerNav.classList.remove('open');
  body.classList.remove("noScroll");
  register.classList.toggle("active");
})

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    root.style.visibility = "hidden";
    loader.style.visibility = "visible";
  } else {
    loader.style.display = "none";
    root.style.visibility = "visible";
  }
};