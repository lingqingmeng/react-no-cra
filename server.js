const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
// const User = require('./models/User');
const withAuth = require('./middleware');
const findCheapestPrice = require('./util');


const app = express();

const secret = 'mysecretsshhh';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


/**
 * DB connection logic goes here
 * 
 */


app.use(express.static('./public'));




app.get('/api/home', function(req, res) {
  res.send('Welcome!');
});

app.get('/api/secret', withAuth, function(req, res) {
  res.send('The password is potato');
});

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


/**
 * @description the name of the nodes are also the unique identifiers for the nodes
 * @description the name of the nodes are also the unique identifiers for the nodes
 * @param n = 4, 
 * @param routes = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200],[3,4,25],[4,0,25],[3,5,10],[5,6,20],[6,7,30],[7,0,40]]
 * @param src = 3, 
 * @param dst = 0, 
 * @param k = 1
 * @output 700
 * @image https://gist.github.com/lingqingmeng/56797f732ee6e2f44e95ebd3098de967
 */
app.get('/find_cheapest_route',function (req,res) {

})

app.listen(process.env.PORT || 8080);



