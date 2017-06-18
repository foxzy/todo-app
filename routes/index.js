var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var tasks = require('./tasks')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', function (req, res) {
  res.send('<h1>Wellcome to todo-list app</h1>');
});
router.get('/tasks',function (req,res) {
  res.json(tasks.findAll())
});
router.get('/tasks/:id', function (req, res) {
  var id = req.params.id;
  res.json(tasks.findById(id));
});
router.get('/tasks/status/:status', function (req, res) {
    var status = req.params.status
    res.json(tasks.fildByStatus(status));
});





















module.exports = router;

