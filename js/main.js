const loader = document.querySelector('#loader');
const root = document.querySelector('#root');
const popup = document.querySelector('.register');
const signUp = document.querySelector('#sign_up');

signUp.addEventListener('click', (e) => {
  e.preventDefault();
  popup.style.opacity = "1";
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