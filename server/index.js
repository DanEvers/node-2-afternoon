const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const port = 3001;

const {createMessage, readMessages, updateMessage, deleteMessage} = require('./controllers/messages_controller')

app.post('/api/messages', createMessage);
app.get('/api/messages', readMessages);
app.put('/api/messages/:id', updateMessage);
app.delete('/api/messages/:id', deleteMessage);

app.listen( port, () => console.log(`Dan, I am listening on port ${port}`))