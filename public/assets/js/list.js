import utils from "./utils.js";
import cardModule from "./card.js";

const listModule = {
  // CREATE LIST HTML ELEMENT
  makeInDOM: function(list) {
    const 
      list_template = document.querySelector('#listTemplate').content,
      listHTML = document.importNode(list_template, true);

    listHTML.querySelector('.panel').setAttribute('data-list-id', list.id);
    listHTML.querySelector('.panel').setAttribute('data-list-position', list.position);
    listHTML.querySelector('.list-name').textContent = list.name;

    // Update the form for modifications
    listHTML.querySelector('[name="id"]').value = list.id;
    listHTML.querySelector('[name="name"]').value = list.name;

    // Event listeners
    listHTML.querySelector('#addCardButton').addEventListener('click', cardModule.showAddModal);
    listHTML.querySelector('h2').addEventListener('dblclick', listModule.showEditList);
    listHTML.querySelector('form').addEventListener('submit', listModule.handleEditForm);
    listHTML.querySelector('#deleteListButton').addEventListener('click', listModule.handleDelete);

    // Make the cards draggable
    const cardContainer = listHTML.querySelector('.panel-block');
    Sortable.create(cardContainer, {
      group: 'list', // ref to draggable list
      draggable: '.box',
      onEnd: cardModule.handleDragCard // update list position on release
    });

    // Add list in dom 
    document.querySelector('.list-container').appendChild(listHTML);
  },


  // ADD LIST
  // Show modal for adding list
  showAddModal: function() {
    const listNb = document.querySelectorAll('.panel').length;
    const listModal = document.querySelector('#addListModal');
    listModal.querySelector('[name="position"]').value = listNb + 1;

    document.querySelector('#addListModal').classList.add('is-active');
  },

  // ADD LIST
  // Submit the form
  handleAddForm: async function(event) {
    event.preventDefault();                     
    const formData = new FormData(event.target); 

    const payload = {};
    formData.forEach((value, key) => payload[key] = value);

    let response;
    try {
      response = await fetch(utils.base_url + '/lists', { 
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if(response.ok) {
        const newList = await response.json();
        listModule.makeInDOM(newList); // make new list in DOM

        // Scroll at the end of the container
        const listContainer = document.querySelector('.list-container');
        listContainer.scrollTo(listContainer.scrollWidth, 0)
    
        event.target.reset(); // reset input                      
        utils.hideModals();    

      } else {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } catch (error) { 
      alert(error.message)
    }
                           
  },

  // EDIT LIST
  // Show edit form
  showEditList: function(event) {
    event.target.classList.add('is-hidden');
    event.target.nextElementSibling.classList.remove('is-hidden');
  },

  // EDIT LIST
  // Submit the edit list title form
  handleEditForm: async function(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    const editedList = event.target.closest('.panel');

    let response;
    try {
      response = await fetch(utils.base_url + '/lists/' + editedList.dataset.listId, {
        method: 'PATCH',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.get('name')
        }),
      });

      if(response.ok) {
        const edit = await response.json();
        editedList.querySelector('.list-name').textContent = edit.name;
  
        editedList.querySelector('form').classList.add('is-hidden');
        editedList.querySelector('h2').classList.remove('is-hidden');
      } 
      else {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } catch (error) { 
      alert(error.message)
    }
  
  },

  // DELETE LIST
  // Submit a delete list
  handleDelete: async function(event) {
    const deletedList = event.target.closest('.panel');

    const confirm = window.confirm('Are you sure you want to delete this list?');

    if(confirm) {
      let response;
      try {
        response = await fetch(utils.base_url + '/lists/' + deletedList.dataset.listId, { 
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
          }
        });

        if(response.ok) {
          deletedList.remove();
        } 
        else {
          const errorResponse = await response.json();
          throw new Error(errorResponse.error);
        }
      } 
        catch (error) { alert(error.message) }
      } 
  },

  // UPDATE LIST POSITION
  // Save the list position
  handleDragList: async function() {
    const lists = document.querySelectorAll('.panel');

    lists.forEach(async (lists, index) => {
      // This formData is empty (there is no form on the DOM)
      // it will be manually set with the index
      const formData = new FormData();
      formData.set('position', index);

      let response;
      try {
      response = await fetch(utils.base_url + '/lists/' + lists.dataset.listId, {
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

export default listModule;