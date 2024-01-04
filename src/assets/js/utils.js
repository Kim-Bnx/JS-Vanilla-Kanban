const utils = {
    hideModals: function() {
        document.querySelectorAll('.modal').forEach(modal => modal.classList.remove('is-active'));
    },
}

export default utils;