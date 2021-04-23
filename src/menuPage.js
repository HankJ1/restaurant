import {createElement} from './homepage.js';

const menuPage = (() => {

    const father = document.querySelector(".test-body");

    function body() {
        createElement("div", "menu-photo", "", father, "", "body");
        createElement("div", "name-greeting", "MENU", document.querySelector(".menu-photo"), "", "body");

        createElement("div", "black-square", "", father, "", "body");
        createElement("div", "menu-background", "", document.querySelector(".black-square"), "", "body");
        
        //lunch baby
        createElement("pre", "lunch", "LUNCH", document.querySelector(".menu-background"), "", "body");
        createElement("ul", "lunch-list", "", document.querySelector(".menu-background"), "", "body");
        createElement("li", "lunch-item", `Turkey Sandwhich - some bread, some cheese, and if youre lucky, some turkey`, document.querySelector(".lunch-list"), "", "body");
        createElement("li", "lunch-item", "American Burger - We're talking buns, we're talking beef, and we're talking sliced beats", document.querySelector(".lunch-list"), "", "body");
        createElement("li", "lunch-item", "Arugula Salad - Eat yo greens boi", document.querySelector(".lunch-list"), "", "body");
        createElement("li", "lunch-item", "Stuffed Prawns - You ever see District 9?", document.querySelector(".lunch-list"), "", "body");

        //dinner baby
        createElement("pre", "dinner", "DINNER", document.querySelector(".menu-background"), "", "body");
        createElement("ul", "dinner-list", "", document.querySelector(".menu-background"), "", "body");
        createElement("li", "dinner-item", `Braised Pork Rib - Succulent slow braised pork on a pillowtop of creamy mashed potatoes topped with ` +
        `a most dilicous medly of crimini mushrooms and feta cheese... mmmmmm  `, document.querySelector(".dinner-list"), "", "body");
        createElement("li", "dinner-item", `Tomoto Soup - what are you, a child?`, document.querySelector(".dinner-list"), "", "body");
        createElement("li", "dinner-item", `Bullion Soup - I'm not sure whats in here. All sales are final`, document.querySelector(".dinner-list"), "", "body");
        createElement("li", "dinner-item", `Babyback Ribs - I want my babybakc babyback babyback ribs!`, document.querySelector(".dinner-list"), "", "body");
        createElement("li", "dinner-item", `Wild Goat - 2 people died hunting this goat. It comes with an exquisite plum sauce though`, document.querySelector(".dinner-list"), "", "body");
        createElement("li", "dinner-item", `Assorted Berries - Our chef likes to grow berries in his backyard. I think this is a bowl of whatever his kids didnt eat. He's passionate about ` +
         `organic produce so watch out for bugs`, document.querySelector(".dinner-list"), "", "body");
        createElement("li", "dinner-item", `Steak I guess? - If you want something a little more docile than goat`, document.querySelector(".dinner-list"), "", "body");
        createElement("li", "dinner-item", `Neighborhood Rabbit - Have you ever wanted to eat one of those rabbits that run around your neighborhood? ` + 
        `Let us know how it is`, document.querySelector(".dinner-list"), "", "body");
    }

    return {
        body
    }

})();

export {menuPage};