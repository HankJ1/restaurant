import {createElement} from './homepage.js';

const contactPage = (() => {

    const father = document.querySelector(".test-body");

    function body() {
        createElement("div", "contact-photo", "", father, "", "body");
        console.log("worked");
        createElement("div", "name-greeting", "INFO", document.querySelector(".contact-photo"), "", "body");

        createElement("div", "black-square", "", father, "", "body");
        createElement("div", "text-cont", "", document.querySelector(".black-square"), "", "body");
        //createElement("div", "menu-background", "", document.querySelector(".black-square"), "", "body");
            createElement("pre", "supertext", "ADDRESS...", document.querySelector(".text-cont"), "", "body");
            createElement("pre", "subtext", "9126 SW 32nd st, Chicken, Alaska", document.querySelector(".text-cont"), "", "body");
            createElement("pre", "supertext", "PHONE...", document.querySelector(".text-cont"), "", "body");
            createElement("pre", "subtext", "213-555-4628", document.querySelector(".text-cont"), "", "body");
            createElement("pre", "supertext", "EMAIL...", document.querySelector(".text-cont"), "", "body");
            createElement("pre", "subtext", "jimmycooksfood@jimmys.com", document.querySelector(".text-cont"), "", "body");
    }

    return {
        body
    }

})();

export {contactPage};