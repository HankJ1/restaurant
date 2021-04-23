
import { createHomepage } from './homepage.js';
import {menuPage} from './menuPage.js';
import {contactPage} from './contactPage.js';
    

const pageAssembly = (() => {
    function deleteData() {
        const bodyElements = document.querySelectorAll('[data-title="body"]');
        bodyElements.forEach(element => element.remove());
    }

    function assembleHomepage() {
        createHomepage.header();
        createHomepage.body();
        createHomepage.footer();
    }

    function assembleMenupage() {
        menuPage.body();
    }

    function assembleContactpage() {
        contactPage.body();
    }

    return {
        deleteData,
        assembleHomepage,
        assembleMenupage,
        assembleContactpage
    }
})();

const listeners = (() => {

    function makeListenerMenu(){
       const menuButton = document.querySelector(`.menu`);
       menuButton.addEventListener('click', () => {
           pageAssembly.deleteData();
           pageAssembly.assembleMenupage();
       })
    }
    function makeListenerContact(){
        const contactButton = document.querySelector(`.contact`);
        contactButton.addEventListener('click', () => {
            pageAssembly.deleteData();
            pageAssembly.assembleContactpage();
        })
     }
     function makeListenerHome(){
        const homeButton = document.querySelector(`.home`);
        homeButton.addEventListener('click', () => {
            pageAssembly.deleteData();
            createHomepage.body();
        })
     }

     function setAllListeners() {
         makeListenerMenu();
         makeListenerContact();
         makeListenerHome();
     }

    return {
        setAllListeners
    }

})();

pageAssembly.assembleHomepage();

listeners.setAllListeners();





