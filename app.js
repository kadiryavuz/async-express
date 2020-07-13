const express = require('express');
const path = require('path');


const handler = require('./functions').asyncHandler;
const getUsers = require('./functions').fetchUsers;

const app = express();

app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'));


app.get('/', handler(async (req,res) => {
  const users = await getUsers();
  res.render('index', {title: "Random Users", users: users.results});
})); 


app.listen(3000, () => console.log('App listening on port 3000!'));