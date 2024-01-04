import listModule from "./list.js";
import cardModule from "./card.js";
import tagModule from "./tag.js";

import utils from "./utils.js";

const app = {

  // Init function 
  init: async function () {
    app.addListeners();
    await app.getListFromAPI();
  },

  addListeners: function() {
    // Open new list modals
    document.querySelector('#addListButton').addEventListener('click', listModule.showAddModal);

    // Close all modals
    const modalButtons = document.querySelectorAll('.close, .modal-background');
    modalButtons.forEach(button => button.addEventListener('click', utils.hideModals));
     
    // Submit new list form
    document.querySelector('#addListForm').addEventListener('submit', listModule.handleAddForm);

    // Submit new card form
    document.querySelector('#addCardForm').addEventListener('submit', cardModule.handleAddForm);

    // Submit updated tags form
    document.querySelector('#addTagForm').addEventListener('submit', tagModule.handleCustomTag);
  },

  
  // GET LIST FROM THE API
  // With cards and tags includes
  getListFromAPI: async function() {
    let response;
    try {
      response = await fetch('/lists', { method: 'GET' });
    } catch (error) { console.error(error); }

    if(response && response.ok) {
      const lists = await response.json();

      lists.forEach(list => {
        listModule.makeInDOM(list); // Create list in DOM

        list.cards.forEach(card => {
          cardModule.makeInDOM(card); // Create card

          card.tags.forEach(tag => {
            tagModule.makeInDOM(tag); // Create tag
          })
        })

        // Make all the lists draggable
        const listContainer = document.querySelector('.list-container');
        
        Sortable.create(listContainer, {
          draggable: '.panel',
          onEnd: listModule.handleDragList // update list position on release
        });
      });
    }
  },
  
};

// Start when DOM fully loaded
document.addEventListener('DOMContentLoaded', app.init );