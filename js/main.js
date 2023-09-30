const loader = document.querySelector('#loader');
const root = document.querySelector('#root');
const popup = document.querySelector('.register');
const signUp = document.querySelector('#sign_up');
const body = document.querySelector('body');
const burger = document.querySelector('#burger_field');
const burgerNav = document.querySelector('#burger_navigation');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  body.classList.toggle("noScroll");
  burgerNav.classList.toggle('open');
})

signUp.addEventListener('click', (e) => {
  e.preventDefault();
  popup.style.opacity = "1";
  popup.style.display = 'block';
  burger.classList.remove('active')
  burgerNav.classList.remove('open');
  body.classList.remove("noScroll");
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