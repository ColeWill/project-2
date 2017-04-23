// GET /
function home(req, res) {  
  res.render('index'); //render the index.ejs home page
}

module.exports = {
  home: home,
};