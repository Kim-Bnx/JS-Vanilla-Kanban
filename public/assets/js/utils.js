const utils = {
    base_url: 'http://localhost:8000',
    
    hideModals: function() {
        document.querySelectorAll('.modal').forEach(modal => modal.classList.remove('is-active'));
    },
}

export default utils;