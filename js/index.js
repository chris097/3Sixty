/*
  Rules: 
  1. Keep your code dry
*/
 // 1. UIController gonna be our helper
 function UIController(className, value){
    let UI = document.querySelector(className);
    if(value){
      UI.style.display = value;
    }
    return UI;
  };

// 2. store classes && values in our object
function createClass(){
    return {
      getClass : function(){
        return{
            none : 'none',
            click : 'click',
            block : 'block',
            modalClass: '.modal',
            loginClass : '.log-in',
            clearFix : '.clear-fix',
            signUpClass : '.sign-up',
            userLogInClass : '.user-log-in',
            logInModalClass : '.login-modal',
            userSignUpClass : '.user-sign-up',
            signUpModalClass : '.sign-up-modal',
            removeLogInClass : '.remove-form-log-in',
            removeSignUpClass : '.remove-form-sign-up'
        }
      }
    }
  };
  // 3. create SetEventListener
  appController(createClass)
  function appController (UICtrl){

      // 3-1 create global variables
      let input, inputBtn;
       input = UICtrl();
       inputBtn = input.getClass();

      // 3-2 create event click function
      // display click on login button eventListener
      let clickLoginBtn = () =>{
          // 1 display userLogin
          setTimeout(() => {
            UIController(inputBtn.userLogInClass, inputBtn.block); 
          }, 200);
            UIController(inputBtn.clearFix, inputBtn.block); 
      };

      // display click on sigup button eventlistener
      let clickSignUpBtn = () =>{
       // e.preventDefault()
        setTimeout(() => {
          UIController(inputBtn.userSignUpClass, inputBtn.block); 
        }, 200);
          UIController(inputBtn.clearFix, inputBtn.block); 
      };
      // create click button to remove signUpForm
      let removeSignUpForm = () =>{
        UIController(inputBtn.userSignUpClass, inputBtn.none); 
        UIController(inputBtn.clearFix, inputBtn.none);
      }
      // create click button to remove logInForm
      let removeLogInForm = () =>{
        UIController(inputBtn.userLogInClass, inputBtn.none); 
        UIController(inputBtn.clearFix, inputBtn.none);
      } 
      // click on get started to display logInForm
      let clickModal = () =>{
        clickLoginBtn()
      }
      // click on logInForm link to display logInForm
      let clickSignUpModal = () =>{
        clickLoginBtn()
        UIController(inputBtn.userSignUpClass, inputBtn.none);
      }
      // click on signUpForm link to display signUpForm
      let clickLogInModal = () =>{
        clickSignUpBtn()
        UIController(inputBtn.userLogInClass, inputBtn.none);
      }
      // 
    // 3-3 create click event
    UIController(inputBtn.loginClass).addEventListener(inputBtn.click, clickLoginBtn, false);
    UIController(inputBtn.signUpClass).addEventListener(inputBtn.click, clickSignUpBtn, false);
    UIController(inputBtn.removeSignUpClass ).addEventListener(inputBtn.click, removeSignUpForm, false);
    UIController(inputBtn.removeLogInClass ).addEventListener(inputBtn.click, removeLogInForm, false);
    UIController(inputBtn.modalClass ).addEventListener(inputBtn.click, clickModal, false);
    UIController(inputBtn.signUpModalClass ).addEventListener(inputBtn.click, clickSignUpModal, false);
   UIController(inputBtn.logInModalClass ).addEventListener(inputBtn.click, clickLogInModal, false);
  }


/*eventHandler()
function eventHandler() {
    // Variables
    let userLogIn, userSignUp, clearFix;
    userLogIn = document.querySelector('.user-log-in');
    userSignUp = document.querySelector('.user-sign-up');
    clearFix = document.querySelector('.clear-fix');

    // Arguments
    if(window.addEventListener){
         // querySelector
       document.querySelector('.log-in').addEventListener('click', clickLogIn, false);
       document.querySelector('.sign-up').addEventListener('click', clickSignUp, false);
       document.querySelector('.modal').addEventListener('click', clickModal, false);
       document.querySelector('.sign-up-modal').addEventListener('click', signUpModal, false);
       document.querySelector('.login-modal').addEventListener('click', logInModal, false);
       document.querySelector('.remove-form-sign-up').addEventListener('click', removeSignUp, false);
       document.querySelector('.remove-form-log-in').addEventListener('click', removeLogIn, false);
    }else if(window.attachEvent){
        // add for internet explorer version pervious to IE9
        document.querySelector('.log-in').addEventListener('click', clickLogIn, false);
        document.querySelector('.sign-up').addEventListener('click', clickSignUp, false);
        document.querySelector('.modal').addEventListener('click', clickModal, false);
        document.querySelector('.sign-up-modal').addEventListener('click', signUpModal, false);
        document.querySelector('.login-modal').addEventListener('click', logInModal, false);
        document.querySelector('.remove-form-sign-up').addEventListener('click', removeSignUp, false);
        document.querySelector('.remove-form-log-in').addEventListener('click', removeLogIn, false);
    }

    // Functions
    function clickLogIn(){
        if(userLogIn){
            setTimeout(() => {
                userLogIn.style.display = 'block';
            }, 200);
            clearFix.style.display = 'block';
        }
    }
    function clickSignUp(){
        if(userSignUp){
            setTimeout(() => {
                userSignUp.style.display = 'block';
            }, 200);
            clearFix.style.display = 'block';
        }
    }
    function clickModal(){
        clickLogIn()
    }
    function logInModal(){
        clickSignUp()
        userLogIn.style.display = 'none';
    }
    function signUpModal(){
        clickModal()
        userSignUp.style.display = 'none';
    }
    function removeSignUp(){
        if(userSignUp){
            userSignUp.style.display = 'none';
            clearFix.style.display = 'none';
        }
    }
    function removeLogIn(){
        if(userLogIn){
            userLogIn.style.display = 'none';
            clearFix.style.display = 'none';
        }
    }
}*/
