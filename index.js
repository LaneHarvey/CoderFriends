var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var GitHubApi = require("github");
var GitHubStrategy = require('passport-github').Strategy;

var app = express();
module.exports = app;

var massiveInstance = massive.connectSync({connectionString : connectionString});

app.set('db', massiveInstance);

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../public'));

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

var port = 3000;
app.listen(port, function(){
  console.log("It's working on ", port);
});
