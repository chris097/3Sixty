/*
  Rules: 
  1. Keep your code dry
*/
 // 1. UIController gonna be our helper
 function dashboardCtrl(className, value){
    let UI = document.querySelector(className);
    if(value){
      UI.style.display = value;
    }
    return UI;
  };
  //console.log(dashboardCtrl('.dot-modal-content', 'block'))
  // 2. store classes && values && IDs in our object
  function dashboardClass(){
    return {
      getClass : function(){
        return{
            none : 'none',
            click : 'click',
            block : 'block',
            edit: '#edit',
            editNext: '#edit-0',
            spinner : '.spinner',
            connect : '.connect',
            editNote : '.edit-menu-container',
            dotModal : '.note_features-dot',
            exDotModal : '.note_features-dot-0',
            delete : '.delete',
            deleteNext : '.delete-0',
            deleteNote : '.delete-container',
            clearFix : '.clear-fix',
            createNote : '#create-note',
            components : '.dashboard_features',
            dashMenuOpen : '.dashboard-menu_open',
            dashMenuClose : '.dashboard-menu_close',
            messageMenuCont : '.message-menu-container',
            dotModalCont : '.dot_features',
            exDotModalCont : '.dot_features-0',
            removeEditNote : '.remove-edit-box',
            removeCreateNote : '.remove-message-box',
            removeDeleteNote : '.remove-delete-box'
        }
      },
    }
}
  // 3. create eventController to store event functions
  eventController(dashboardClass)
  function eventController (dashClass){
      // 1. global variables
      let dashBtn = dashClass().getClass();
      // 3-2. display event click function
      let displayCreateNote = () =>{
        setTimeout(() => {
            dashboardCtrl(dashBtn.messageMenuCont, dashBtn.block);
        }, 200);
        dashboardCtrl(dashBtn.clearFix, dashBtn.block);
      }
      let delayDashboard = () => {
        dashboardCtrl(dashBtn.clearFix, dashBtn.block);
        setTimeout(() => {
          dashboardCtrl(dashBtn.clearFix, dashBtn.none);
          dashboardCtrl(dashBtn.spinner, dashBtn.none);
          dashboardCtrl(dashBtn.connect, dashBtn.none);
        }, 3000);
      }
        delayDashboard()
      //
      let displayDashFeatures = () =>{
          dashboardCtrl(dashBtn.components, dashBtn.block);
          dashboardCtrl(dashBtn.dashMenuOpen, dashBtn.none);
          dashboardCtrl(dashBtn.dashMenuClose, dashBtn.block);
      }
      //
      let removeDashFeatures = () => {
        dashboardCtrl(dashBtn.components, dashBtn.none);
        dashboardCtrl(dashBtn.dashMenuOpen, dashBtn.block);
        dashboardCtrl(dashBtn.dashMenuClose, dashBtn.none);
      }
      //
      let displaydotModalCont = () => {
          dashboardCtrl(dashBtn.dotModalCont, dashBtn.block);
      }
      let displayDotNote = () => {
          dashboardCtrl(dashBtn.exDotModalCont, dashBtn.block);
      }
      //
      let displayEditNote = () => {
        setTimeout(() => {
            dashboardCtrl(dashBtn.editNote, dashBtn.block);
        }, 200);
        dashboardCtrl(dashBtn.clearFix, dashBtn.block);
      }
  
      //
      
      //
      let displayDeleteNote = () => {
        setTimeout(() => {
            dashboardCtrl(dashBtn.deleteNote, dashBtn.block);
        }, 200);
        dashboardCtrl(dashBtn.clearFix, dashBtn.block);
      }
      let removeDeleteNote = () => {
            dashboardCtrl(dashBtn.deleteNote, dashBtn.none);
            dashboardCtrl(dashBtn.clearFix, dashBtn.none);
      }
      let removeEditNote = () => {
        dashboardCtrl(dashBtn.editNote, dashBtn.none);
        dashboardCtrl(dashBtn.clearFix, dashBtn.none);
      }
      let removeCreateNote = () => {
        dashboardCtrl(dashBtn.messageMenuCont, dashBtn.none);
        dashboardCtrl(dashBtn.clearFix, dashBtn.none);
      }
      // 3-3 create click event
      dashboardCtrl(dashBtn.createNote).addEventListener(dashBtn.click, displayCreateNote, false);
      dashboardCtrl(dashBtn.dashMenuOpen).addEventListener(dashBtn.click, displayDashFeatures, false);
      dashboardCtrl(dashBtn.dashMenuClose).addEventListener(dashBtn.click, removeDashFeatures, false); 
      dashboardCtrl(dashBtn.dotModal).addEventListener(dashBtn.click, displaydotModalCont, false); 
      dashboardCtrl(dashBtn.edit).addEventListener(dashBtn.click, displayEditNote, false); 
      dashboardCtrl(dashBtn.editNext).addEventListener(dashBtn.click, displayEditNote, true); 
      dashboardCtrl(dashBtn.delete).addEventListener(dashBtn.click, displayDeleteNote, false); 
      dashboardCtrl(dashBtn.deleteNext).addEventListener(dashBtn.click, displayDeleteNote, false); 
      dashboardCtrl(dashBtn.removeDeleteNote).addEventListener(dashBtn.click, removeDeleteNote, false); 
      dashboardCtrl(dashBtn.removeEditNote).addEventListener(dashBtn.click, removeEditNote, false); 
      dashboardCtrl(dashBtn.removeCreateNote).addEventListener(dashBtn.click, removeCreateNote, false); 
      dashboardCtrl(dashBtn.exDotModal).addEventListener(dashBtn.click, displayDotNote, false); 
  }






/*
addEventHandler()
function addEventHandler() {
    // Variables
     let createNote, clearFix, dotModal, editBox, deleteBox;
     createNote = document.querySelector('.message-menu-container');
     clearFix = document.querySelector('.clear-fix');
     dotModal = document.querySelector('.dot-modal-content');
     dotModals = document.querySelector('.dot-modal-content-0');
     editBox = document.querySelector('.edit-menu-container');
     deleteBox = document.querySelector('.delete-container');

    // Arguments
    if(window.addEventListener){
        // getElementByID
        document.getElementById('create-note').addEventListener('click', getCreateNote, false);
        document.getElementById('dot-modal').addEventListener('click', getModalBox, false);
        document.getElementById('dot-modal-0').addEventListener('click', getModalBoxs, false);
        document.getElementById('edit').addEventListener('click', getEditBox, false);
        document.getElementById('edit-0').addEventListener('click', addEditBox, false);
        document.getElementById('delete').addEventListener('click', getDeleteBox, false);
        document.getElementById('delete-0').addEventListener('click', addDeleteBox, false);

        // querySelector
        document.querySelector('.remove-message-box').addEventListener('click', removeCreateNote, false);
        document.querySelector('.remove-edit-box').addEventListener('click', removeEditNote, false);
        document.querySelector('.remove-delete-box').addEventListener('click', removeDeleteNote, false);
    }else if(window.attachEvent){
        // add for internet explorer version pervious to IE9
         // getElementByID
        document.getElementById('create-note').addEventListener('click', getCreateNote, false);
        document.getElementById('dot-modal').addEventListener('click', getModalBox, false);
        document.getElementById('dot-modal-0').addEventListener('click', getModalBoxs, false);
        document.getElementById('edit').addEventListener('click', getEditBox, false);
        document.getElementById('delete').addEventListener('click', getDeleteBox, false);
        document.getElementById('delete-0').addEventListener('click', addDeleteBox, false);
        document.getElementById('edit').addEventListener('click', addEditBox, false);
         // querySelector
        document.querySelector('.remove-message-box').addEventListener('click', removeCreateNote, false);
        document.querySelector('.remove-edit-box').addEventListener('click', removeEditNote, false);
        document.querySelector('.remove-delete-box').addEventListener('click', removeDeleteNote, false);
    }

    // Functions
    // Display block ie to view a specific content... 
    //
    function getCreateNote(){
        createNote.style.display = 'block';
        clearFix.style.display = 'block';
    }
    function getModalBox(){
        dotModal.style.display = 'block';
        dotModals.style.display = 'none';
    }
    function getModalBoxs(){
        dotModals.style.display = 'block';
        dotModal.style.display = 'none';
    }
    function getEditBox(){
        editBox.style.display = 'block';
        clearFix.style.display = 'block';
    }
    function addEditBox(){
        getEditBox()
    }
    function getDeleteBox(){
        deleteBox.style.display = 'block';
        clearFix.style.display = 'block';
    }
    function addDeleteBox(){
        getDeleteBox()
    }
    // Display none ie to remove || delete a specific content
    function removeCreateNote(){
        createNote.style.display = 'none';
        clearFix.style.display = 'none';
    }
    function removeEditNote(){
        editBox.style.display = 'none';
        clearFix.style.display = 'none';
        dotModal.style.display = 'none';
        dotModals.style.display = 'none';
    }
    function removeDeleteNote(){
        deleteBox.style.display = 'none';
        clearFix.style.display = 'none';
        dotModal.style.display = 'none';
        dotModals.style.display = 'none';
    }
}
*/

