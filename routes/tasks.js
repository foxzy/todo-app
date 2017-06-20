var express = require('express');
var router = express.Router();
var model = require('../models/task-mock');

router.get('/tasks', function (req, res) {
    var tasks = model.findAll();
    res.json(tasks)
});

router.get('/task/:id', function (req, res) {
    var task = model.findById(req.params.id);
    res.json(task);
});

router.post('/task',function (req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }

    var task = model.create(req.body);
    res.json({id: task.id});
});

router.put('/task/:id', function (req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }

    var task = model.findById(req.params.id);
    model.update(task, req.body);

    res.sendStatus(200);
});

router.put('/task/:id/status', function (req, res) {
    var task = model.findById(req.params.id);
    model.updateStatus(task, req.body.status);
    res.sendStatus(200);
});

router.delete('/task/:id', function (req, res){
    model.delete(req.params.id);
    res.sendStatus(200);
});

router.get('/tasks/status/:status', function (req, res) {
    var status = req.params.status;
    res.json(model.filterByStatus(status));
});

router.get('/tasks/TagWithStatus/:tag/:status', function (req, res) {
    var tag = req.params.tag;
    var status = req.params.status;
    res.json(model.filterByTagAndStatus(tag,status));
});

module.exports = router;