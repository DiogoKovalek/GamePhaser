const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const operator = require('/Users/Cookie/Documents/Jogo/ProjetoCardgame/operator'); // Adjust the path accordingly

const app = express();
const fs = require('fs');
const path = require('path');

// Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));




// Session middleware
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));


app.get('/', (req, res) => {
    res.send('Welcome to our application Please click the link below to go to the login page:<br><a href="/login">Go to Login</a>');
  });
app.use(express.static('public'));

app.get('/login', (req, res) => {
    fs.readFile(path.join(__dirname, 'public', 'login.html'), (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  });

  app.get('/dashboard', (req, res) => {
    if (req.session.loggedin) {
        fs.readFile(path.join(__dirname, 'public', 'dashboard.html'), (err, data) => {
            if (err) {
              res.writeHead(404);
              res.end(JSON.stringify(err));
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
          });
      } else {
        res.redirect('/login');
      }
    
    

  });

  app.get('/game',(req, res) =>{
    if (req.session.loggedin) {
      fs.readFile(path.join(__dirname, 'public/GamePhaser', 'index.html'), (err, data) => {
          if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
          }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        });
    } else {
      res.redirect('/login');
    }

  });


  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const result = await operator('read', username);
      if (result.length > 0 && result[0].password === password) {
        req.session.loggedin = true;
        res.redirect('/dashboard');
      } else {
        // Provide specific feedback
        if (!result.length) {
          res.status(401).send('Username not found. Please check your username.');
        } else {
          res.status(401).send('Incorrect password. Please check your password.');
        }
      }
    } catch (err) {
      console.error('Database error:', err);
      res.status(500).send('Internal Server Error');
    }
  });


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
