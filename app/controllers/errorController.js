const errorController = {
    notFound: (_, res) => {
        res.status(404).json({error: 'Please verify the provided id.'});
    }
};

module.exports = errorController;