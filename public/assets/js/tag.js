import utils from "./utils.js";

const tagModule = {
    // CREATE TAG HTML ELEMENT
    makeInDOM: function(tag) {
        const tagDOM = document.createElement('span');

        tagDOM.dataset.tagId = tag.id;
        tagDOM.textContent = tag.name;
        tagDOM.style.backgroundColor = tag.color;
        tagDOM.classList.add('tag', 'has-text-white');
        
        // Get card container
        const cardDOM = document.querySelector(`.box[data-card-id="${tag.card_has_tag.card_id}"]`);
        // Add tag in DOM
        cardDOM.querySelector('.tags').appendChild(tagDOM);
    },

    // CREATE CHECKBOX INPUT ELEMENT FOR FORM
    makeInForm: function(tag, isChecked) {
        // Label
        const label = document.createElement('label');

        label.classList.add('checkbok', 'is-block');
        label.setAttribute('data-tags-id', tag.id);
        label.textContent = tag.name;

        // Checkbox input
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('name', tag.name);

        // Check status
        input.checked = isChecked;

        label.prepend(input); // child of the label

        // Add input in the form dom
        document.querySelector('#addTagModal .field').append(label);
    },

    // UPDATE TAG CARD
    // Show modal to customize the tag card
    showCustomModal: async function(event) {
        // Get the card
        const card = event.target.closest('.box');
        const cardId = card.dataset.cardId; 

        // Target the modal and update the form with the card id
        const modal = document.querySelector('#addTagModal');
        modal.querySelector('[name="id"]').value = cardId;

        // Get all the tags of the card to make an array with their id
        const cardTags = Array.from(card.querySelectorAll('.tag'));
        const associatedTagId = cardTags.map(tag => parseInt(tag.dataset.tagId));

        let response;
        try {
            // Fetch all the API tags to display them in the form
            response = await fetch('/tags', {method: 'GET' });

            if(response.ok) {
                const tags = await response.json();
                // Empty the form so it doesn't interfere with other modifications tag
                const field = document.querySelector('#addTagModal .field');
                field.innerHTML = '';
    
                tags.forEach(tag => {
                    // Check the box if the tag is already associated with the card
                    if(associatedTagId.includes(tag.id)) {
                        tagModule.makeInForm(tag, true);
                    } 
                    // or don't check
                    else {
                        tagModule.makeInForm(tag, false);
                    }
                });
            } else {
                const errorResponse = await response.json();
                throw new Error(errorResponse.error);
              }
        } catch (error) { 
          alert(error.message)
        }
        
        // Show modal
        document.querySelector('#addTagModal').classList.add('is-active');
    },

    // UPDATE TAG CARD
    // Submit the modificated tags
    handleCustomTag: async function(event) {
        event.preventDefault();
        const formData = new FormData(event.target); 

        // To have the card id
        const param = {};
        formData.forEach((value, key) => param[key] = value);

        // Get all the check input tag
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const checkedIds = [];
        // Get the id of the check input tag
        checkboxes.forEach(checkbox => {
            const tagId = checkbox.parentElement.getAttribute('data-tags-id');
            if (tagId) {
                checkedIds.push(parseInt(tagId, 10)); // Parsing the ID as an integer
            }
        });
    
        // Prepare the payload in the right format
        const payload = {
            tagsId: JSON.stringify([...checkedIds])
        };

        let response;
        try {
        response = await fetch('/cards/' + param.id + '/tags', {
            method: 'PATCH',
            headers: { 
            'accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if(response.ok) {
            const card = await response.json();

            // Select the card and empty the old associate tag
            const field = document.querySelector(`[data-card-id="${card.id}"] .tags`);
            field.innerHTML = '';

            // Add the new associated tag
            card.tags.forEach(tag => {
                tagModule.makeInDOM(tag, true);
            });

            utils.hideModals();  
        } else {
            const errorResponse = await response.json();
            throw new Error(errorResponse.error);
        }
        } catch (error) { alert(error.message)}

       
    },

    
}

export default tagModule;