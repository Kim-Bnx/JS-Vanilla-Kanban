const utils = {
    base_url: 'https://js-vanilla-kanban.vercel.app',
    
    hideModals: function() {
        document.querySelectorAll('.modal').forEach(modal => modal.classList.remove('is-active'));
    },
}

export default utils;