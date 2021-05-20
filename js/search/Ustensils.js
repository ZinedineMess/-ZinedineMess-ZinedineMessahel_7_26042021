'use strict';

import Utils from '../utilities/Utils.js';
import Search from './Search.js';
import RecipesBuilder from '../pages/RecipesBuilder.js';
import Badges from '../pages/Badges.js';
import Message from '../pages/Messages.js';

export default class Ustensils {
    static ustensilsExample = document.getElementById('ustensilesExample');
    static ustensileBadges = document.getElementById('ustensileBadges');

    static init(ustensils) {
        Utils.launcherInput(document.querySelector("#ustensiles > button"),
            document.querySelector("#openUstensilesFilter"),
            document.querySelector("#closeUstensilesFilter"),
            document.querySelector("#hiddenUstensilesFilter"));
        Utils.clearFilters(this.ustensilsExample);
        this.displayUstensils(Utils.sortByTitle(ustensils));
        this.searchInput(ustensils);
        this.giveTheClassActivatedOnClick();
    };

    // display the ustensils in the ustensils zone according to the recipes displayed in the 'recipes' section
    static displayUstensils(ustensils) {
        ustensils.forEach((ustensils) => {
            let listUstensils = document.createElement('li');

            listUstensils.innerHTML = `${Utils.upperText(ustensils)}`
            this.ustensilsExample.appendChild(listUstensils);
            listUstensils.classList.add('list-ustensiles');
            listUstensils.setAttribute('data-filter', `${ustensils}`);
        });
    };

    // allows to search for the ustensils in the input from the ustensils present in the recipes displayed
    static searchInput(ustensils) {
        document.getElementById('inputUstensiles').addEventListener('keyup', (key) => {
            let valueSearch = key.target.value;
            if (Utils.isValid(valueSearch)) {
                Utils.clearFilters(this.ustensilsExample);
                this.displayUstensils(Search.searchInputFilters(ustensils, valueSearch));
                return;
            }
            Utils.clearFilters(this.ustensilsExample);
            this.displayUstensils(Utils.sortByTitle(ustensils));
        });
    };

    static giveTheClassActivatedOnClick() {
        this.ustensilsExample.addEventListener('click', event => {
            let classValue = event.target.classList.value;

            if (-1 === classValue.indexOf('activated')) {
                event.target.classList.add('activated');
                this.filterTags();
                Badges.buildTags(this.ustensileBadges, Utils.upperText(event.target.getAttribute('data-filter')));
                Message.removeResultMessage();
                return;
            }
            event.target.classList.remove('activated');
            Utils.clearRecipesSection();
            Badges.removeTag(this.ustensileBadges);
            RecipesBuilder.buildSection(recipesApiResult);
            return;
        });
    };

    static filterTags() {
        let resultFilters = Search.filters();
        this.show(resultFilters.show);
        this.hide(resultFilters.hide);
    };

    static show(elt) {
        elt.forEach(s => {
            s.style.display = 'block';
        });
    }

    static hide(elt) {
        return elt.forEach(h => {
            h.style.display = 'none';
        });
    }
}
