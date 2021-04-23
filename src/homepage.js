

function createElement(type, userClass, text, parent, reference, datakey) {
    const newElement = document.createElement(`${type}`)
        if (type !== "br") {
            newElement.classList.add(`${userClass}`);
        }
        newElement.textContent=`${text}`;
        newElement.dataset.title=`${datakey}`;
        // if (type === "div") { 
        //     tempParent = newElement;
        // }   
        if (reference == "") {
            parent.appendChild(newElement);
        } else {
            console.log("insrt before triggered" + userClass);
            parent.insertBefore(newElement, reference);
        }
        
}

const createHomepage = (() => {

const father = document.querySelector(".test-body");
//const firstDiv = document.querySelector("#content");

function header() {
    createElement("div", "header", "", father, "", "");
    createElement("image", "logo", "", document.querySelector(".header"), "", "");
    createElement("span", "slogan", "We Serve Food Here, I Gaurantee It.", document.querySelector(".header"), "", "");
    createElement("button", "contact", "Contact", document.querySelector(".header"), "", "");
    createElement("button", "menu", "Menu", document.querySelector(".header"), "", "");
    createElement("button", "home", "Home", document.querySelector(".header"), "", "");
}

function body() {
    createElement("div", "main-photo", "", father, "", "body");
    createElement("div", "black-square", "", father, "", "body");

    createElement("div", "name-greeting", "WELCOME TO JIMMY's", document.querySelector(".main-photo"), "", "body");
    createElement("br", "break1", "", document.querySelector(".name-greeting"), "", "body");

    createElement("a", "takeout-ref", "", document.querySelector(".name-greeting"), "", "body");
    createElement("button", "takeout-button", "Get Delivery", document.querySelector(".takeout-ref"), "", "body");

    createElement("div", "blurb-container", "", document.querySelector('.black-square'), "", "body");
    createElement("pre", "blurb", "Here at Jimmy's we are committed to providng you with the highest quality product." + 
        " It is our priveledge to have you here with your family and it is out promise to gouge you on everything we can." + 
        " You may find yourself asking 'should these french fries really cost $12.00 dollars?' Don't worry, this is normal." + 
        " Just distract yourself with the modern decor and scantily clad servers and put on a smile eh.",
        document.querySelector('.blurb-container'), "", "body");
    createElement("div", "spacer", "", document.querySelector(".blurb"), "", "");
    createElement("p", "blurb2", "Come check us out on Social Media!", document.querySelector(".blurb"), "", "body");
}

function footer() {
    createElement("div", "footer", "", father, "", "");
    createElement("image", "fb", "", document.querySelector(".footer"), "", "");
    createElement("image", "insta", "", document.querySelector(".footer"), "", "");
    createElement("image", "twitter", "", document.querySelector(".footer"), "", "");
}

return {
    header,
    body,
    footer,
}

})();

export {createElement, createHomepage};

