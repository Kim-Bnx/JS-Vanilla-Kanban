import utils from "./utils.js";
import tagModule from "./tag.js";

const cardModule = {
  // CREATE CARD HTML ELEMENT
  makeInDOM: function(card) {
    const 
      cardTemplate = document.querySelector('#cardTemplate').content,
      cardHTML = document.importNode(cardTemplate, true),
      cardContainer = document.querySelector(`[data-list-id="${card.list_id}"] .panel-block`)

    cardHTML.querySelector('.box').setAttribute('data-card-id', card.id);
    cardHTML.querySelector('.box').setAttribute('data-card-position', card.position);
    cardHTML.querySelector('.card-name').textContent = card.title;

    // Update the form for modifications
    cardHTML.querySelector('[name="id"]').value = card.id;
    cardHTML.querySelector('[name="title"]').value = card.title;

    // Event listeners
    cardHTML.querySelector('#editCardButton').addEventListener('click', cardModule.showEditForm);
    cardHTML.querySelector('form').addEventListener('submit', cardModule.handleEdit);
    cardHTML.querySelector('#deleteCardButton').addEventListener('click', cardModule.handleDelete);
    cardHTML.querySelector('#customTagButton').addEventListener('click', tagModule.showCustomModal);

    // Add the new card in DOM
    cardContainer.appendChild(cardHTML);
  },

  // ADD CARD
  // Show modal for adding card
  showAddModal: function(event) {
    // Get the list ID
    const list = event.target.closest('.panel');

    // Count the number of cards to determine the position of the new one
    const cardsNb = list.querySelectorAll('.box').length;

    const listId = list.dataset.listId; // dataset["list-id"]

    const cardModal = document.querySelector('#addCardModal');

    // For the hidden input
    cardModal.querySelector('[name="list_id"]').value = listId;
    cardModal.querySelector('[name="position"]').value = cardsNb + 1;


    document.querySelector('#addCardModal').classList.add('is-active');
  },

  // ADD CARD
  // Submit the new card form
  handleAddForm: async function(event) {
    event.preventDefault();                     
    const formData = new FormData(event.target); 

    const payload = {};
    formData.forEach((value, key) => payload[key] = value);

    console.log(payload);

    let response;
    try {
      response = await fetch('/cards', {
        method: 'POST',
        headers: { 
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if(response && response.ok) {
        const newCard = await response.json();
        console.log(newCard);
        cardModule.makeInDOM(newCard);
  
        event.target.reset(); // reset input
        utils.hideModals();                           
      } 
      else {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } 
    catch (error) {
      console.log(error);
      alert(error.message)
    }
  },


  // EDIT CARD
  // Show the input to edit the card title
  showEditForm: function(event) {
    const editedCard = event.target.closest('.box');

    editedCard.querySelector('.card-name').classList.add('is-hidden');
    editedCard.querySelector('.card-name').nextElementSibling.classList.remove('is-hidden');
  },

  // EDIT CARD
  // Sumbit update card title
  handleEdit: async function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const payload = {};
    formData.forEach((value, key) => payload[key] = value);
    
    // Get the card
    const editedCard = event.target.closest('.box');
    
    let response;
    try{
      response = await fetch('/cards/' + payload.id, {
        method: 'PATCH',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if(response.ok) {
        const edit = await response.json();
        editedCard.querySelector('.card-name').textContent = edit.title; // Change the DOM title
  
        editedCard.querySelector('form').classList.add('is-hidden');
        editedCard.querySelector('.card-name').classList.remove('is-hidden');
      }
      else {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } 
    catch (error) {alert(error.message)}
  },
    

  // DELETE CARD
  handleDelete: async function(event) {
    const deletedCard = event.target.closest('.box');

    const confirm = window.confirm('Are you sure you want to delete this card?');

    if(confirm) {
      let response;
      try {
        response = await fetch('/cards/' + deletedCard.dataset.cardId, { 
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
          }
       });

      if(response.ok) {
        deletedCard.remove();
      } 
      else {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } 
      catch (error) { alert(error.message) }
    } 
  
  },

  // UPDATE CARD POSITION
  handleDragCard: function(event) {
    let cards = event.from.querySelectorAll('.box');

    // Save the position
    cardModule.updateCards(cards);

    // If the card is still in the same list, the function end there
    if(event.from === event.to) return;

    // Get the new card list and its id
    cards = event.to.querySelectorAll('.box');
    const listId = event.to.closest('.panel').dataset.listId;

    // Save the position and the list container
    cardModule.updateCards(cards, listId);
  },

  // SAVE CARD MODIFICATION IN API
  updateCards: async function(cards, listId = null) {
    cards.forEach(async (cards, index) => {
      // formData is empty (no form on DOM)
      // manually set with the index (and list container if there is a new one)
      const formData = new FormData();
      formData.set('position', index);
      if(listId) formData.set('list_id', listId);

      let response;
      try {
      response = await fetch('/cards/' + cards.dataset.cardId, {
          method: 'PATCH',
          headers: { 
          'accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(Object.fromEntries(formData)),
      });
      const json = await response.json();

      if (!response.ok) throw json;

      } catch (error) {
        alert('A problem occurred while updating the new list position.');
        console.error(error);
      }

    })
  }
}

export default cardModule;