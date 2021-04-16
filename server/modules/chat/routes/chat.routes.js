  
module.exports = (app) => {
    const chatController = require('../controllers/chat.controller');

    app.route('/chat')
        .get(chatController.read)
}