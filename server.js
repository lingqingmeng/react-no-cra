const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
// const User = require('./models/User');
const withAuth = require('./middleware');

const app = express();

const secret = 'mysecretsshhh';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


/**
 * DB connection logic goes here
 * 
 */
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize"); // sigh
let sequelize = await require('./app/models')(dbConfig,Sequelize);
let JobDescription = require("./JobDescription.model.js")(sequelize, Sequelize);


app.use(express.static('./public'));




app.get('/api/home', function(req, res) {
  res.send('Welcome!');
});

app.get('/api/secret', withAuth, function(req, res) {
  res.send('The password is potato');
});

app.post("/job_descriptions", async function (req, res) {
  if (!req.body.title || !req.body.description || typeof req.body.published === "undefined") {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  let { title, description, published } = req.body;
  const jane = Tutorials.build({ 
    title,
    description,
    published
  });
  await jane.save();
  res.json({
    message: 'Tutorial with title ' + title + ' was saved to the database!'
  })
});


app.get("/tutorials",function (req, res) {
  Tutorials.findAll()
    .then(data => {
      console.log("data: ",data);
      res.json({ tutorials: data });    
    }).catch(function(err) {
      res.status(err.code || 500).json(err);
    });
})


app.post('/api/register', function(req, res) {
  // convert to postgres

  // const { email, password } = req.body;
  // const user = new User({ email, password });
  // user.save(function(err) {
  //   if (err) {
  //     console.log(err);
  //     res.status(500).send("Error registering new user please try again.");
  //   } else {
  //     res.status(200).send("Welcome to the club!");
  //   }
  // });
});

app.post('/api/authenticate', function(req, res) {
  // convert to postgres

  // const { email, password } = req.body;
  // User.findOne({ email }, function(err, user) {
  //   if (err) {
  //     console.error(err);
  //     res.status(500)
  //       .json({
  //       error: 'Internal error please try again'
  //     });
  //   } else if (!user) {
  //     res.status(401)
  //       .json({
  //       error: 'Incorrect email or password'
  //     });
  //   } else {
  //     user.isCorrectPassword(password, function(err, same) {
  //       if (err) {
  //         res.status(500)
  //           .json({
  //           error: 'Internal error please try again'
  //         });
  //       } else if (!same) {
  //         res.status(401)
  //           .json({
  //           error: 'Incorrect email or password'
  //         });
  //       } else {
  //         // Issue token
  //         const payload = { email };
  //         const token = jwt.sign(payload, secret, {
  //           expiresIn: '1h'
  //         });
  //         res.cookie('token', token, { httpOnly: true }).sendStatus(200);
  //       }
  //     });
  //   }
  // });
});

app.get('/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
});

app.listen(process.env.PORT || 8080);
