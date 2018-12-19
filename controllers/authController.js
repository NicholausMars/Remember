
const User = require('../models/User');
const passport        = require('passport');
module.exports = {
  login: (req,res)=>{
    console.log(req.user);
    res.redirect('/api/profile');
  },
  signup:       passport.authenticate('local-login', {
    successRedirect : '/api/profile',
    failureRedirect : '/api/login',
  }),
  google:       passport.authenticate('google', {scope : ['email']}),
  googleCB:     (req, res) =>{res.redirect('/main')},
  facebook:     passport.authenticate('facebook', {scope : ['email']}),
  facebookCB:   (req, res) =>{res.redirect('/main')},
  logout: (req,res) =>{
    req.logout();
    res.redirect('/');
  }
}
/*
 makes it possible to access the user email information
scope :['email']
*/
