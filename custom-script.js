// Header Scroll
let lastScrollPosition = 0;
let scrolledUp = false;
let scrolledDown = false;

const headerMenu = document.querySelector("#header-menu")
const headerMobile = document.querySelector("#header-mobile")

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;
  if (headerMenu && window.scrollY > 115) {
    console.log("Maior que 115" + " " + window.scrollY)
    headerMenu.style.position = "fixed"
    document.querySelector("#topbar-menu").style.position = "fixed"

  } else {
    headerMenu.style.top = ""
    headerMenu.style.position = "relative"
    document.querySelector("#topbar-menu").style.position = "relative"
  }

  if (headerMobile && window.scrollY > 115) {
    headerMobile.style.position = "fixed"
  } else {
    headerMobile.style.position = ""
    headerMobile.style.top = ""
    
  }

  if (headerMenu && currentScrollPosition > lastScrollPosition) {
    // o usuário rolou para baixo
    if (!scrolledDown) {
      scrolledDown = true;
      scrolledUp = false;
      funcaoRolagemParaBaixo();
    }
  } else {
    // o usuário rolou para cima
    if (!scrolledUp) {
      scrolledUp = true;
      scrolledDown = false;
      funcaoRolagemParaCima();
    }
  }

  lastScrollPosition = currentScrollPosition;
});

function funcaoRolagemParaCima() {
  console.log('O usuário rolou para cima');
  // coloque aqui o código que você quer executar quando o usuário rolar para cima
  document.querySelector("#topbar-menu").style.height = ""
  headerMenu.style.top = "30px"
  headerMenu.style.height = ""
  document.querySelector("#menu-categoria").style.height = ""
  document.querySelector("#logo-menu").style.paddingTop = ""
  document.querySelector("#search").classList.remove("active")
  headerMobile.style.top = "44px"
  

}

function funcaoRolagemParaBaixo() {
  console.log('O usuário rolou para baixo');
  document.querySelector("#topbar-menu").style.height = 0
  headerMenu.style.top = 0
  document.querySelector("#menu-categoria").style.height = 0
  document.querySelector("#logo-menu").style.paddingTop = 0
  document.querySelector("#search").classList.add("active")
  headerMenu.style.height = "67px"
  headerMobile.style.top = "0"

  // coloque aqui o código que você quer executar quando o usuário rolar para baixo
}



//Page My Account
const formLogin = document.querySelector("#form-login")
if (formLogin) {
  const rememberMe = document.querySelector("#form-login").querySelector(".woocommerce-form-login__rememberme")
  const lostPass = document.querySelector("#form-login").querySelector(".lost_password")
  lostPass.insertAdjacentElement("afterbegin", rememberMe)
}




console.log("Script ON")