var express = require('express');
var router = express.Router();

var tasks = require('./tasks')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function (req, res) {
  res.send('<h1>Wellcome to todo-list app</h1>');
});

router.get('/tasks', function (req, res) {
  res.json(tasks.findAll())
});

router.get('/task/:id', function (req, res) {
  var id = req.params.id;
  res.json(tasks.findById(id));
});

router.post('/task',function (req, res) {
    tasks.persist(req.body)
    res.sendStatus(200);
});

router.put('/task/:id', function (req, res) {
    if (!req.body) return res.sendStatus(400);
    var id = req.params.id;
    var task = tasks.findById(id);
    tasks.update(task, req.body);
    res.sendStatus(200);
});

router.delete('/task/:id', function (req, res){
    tasks.delete(req.params.id);
    res.sendStatus(200);
});

router.put('/task/:id/status', function (req, res) {
    var task = tasks.findById(req.params.id);
    tasks.updateStatus(task, req.body.status);
    res.sendStatus(200);
});

router.get('/tasks/status/:status', function (req, res) {
    var status = req.params.status
    res.json(tasks.filterByStatus(status));
});

router.get('/tasks/TagWithStatus/:tag/:status', function (req, res) {
    var tag = req.params.tag
    var status = req.params.status
    res.json(tasks.filterByTagAndStatus(tag,status));
});

module.exports = router;
