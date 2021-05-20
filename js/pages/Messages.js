'use strict';

export default class Messages {
    static resultMessage = document.getElementById('resultMessage');
    static resultSpan = document.querySelector('#resultMessage > span');

    // displays the message with the number of recipes corresponding to the search
    static buildResultMessageWithResult(recipes) {
        this.launchResultMessage();
        this.resultMessage.style.backgroundColor = '#c4dcff'
        this.resultSpan.innerHTML = recipes.length + ' recette(s) correspond(ent) à votre recherche';
        return this;
    };

    // displays the message indicating to the user that no recipe matches the search
    static buildResultMessageWithNoResult() {
        this.launchResultMessage();
        this.resultMessage.style.backgroundColor = '#FFE9A5';
        this.resultSpan.innerHTML = 'Aucune recette ne correspond à votre recherche... Vous pouvez chercher "tarte aux pommes", "poisson", etc.';
        return this;
    };

    // displays the message containing the number of recipes
    static launchResultMessage() {
        return this.resultMessage.style.display = 'flex';
    };

    // disappear the message containing the number of recipes
    static removeResultMessage() {
        return this.resultMessage.style.display = 'none';
    };
}
