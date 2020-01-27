let messages = [];
let id = 0;

module.exports = {
    // Create - Should be able to create a message using text and time off of the request body.
        // Should be able to assign a unique id to the message. 
    createMessage: (req, res) => {
        const {text, time} = req.body;
        const newMessage = {
            id,
            text,
            time
        }
        id++;
        messages.push(newMessage);
        res.status(200).send(messages) 
    },
    // Read - Should be able to return the messages array.
    readMessages: (req, res) => {
        res.status(200).send(messages);
    },
    // Update - Should be able to update the text property of a message using the request body.
        // Should be able to determine which message to update using an id url parameter.
    updateMessage: (req, res) => {
        const { text } = req.body;
        const index = messages.findIndex(element => element.id == req.params.id);
        const message = messages[index];

            messages[index] = {
                id: message.id,
                text: text || message.text,
                time: message.time
            };
        res.status(200).send(messages)
    },
    // Delete - Should be able to delete a message using an id url parameter.
    deleteMessage: (req, res) => {
        const index = messages.findIndex(element => element.id == req.params.id);
        messages.splice(index, 1);
        res.status(200).send(messages);
    }
}