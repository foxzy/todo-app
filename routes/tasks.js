/**
 * Created by parunya on 6/18/2017 AD.
 */
var tasks = [
    {
        "id": 1,
        "subject": "This is my TODO API",
        "content": "Feel free to folk my project repository.",
        "tags": "todo",
        "status": "done"
    },
    {
        "id": 2,
        "subject": "Pay k-bank invoice",
        "content": "Pay k-bank invoice",
        "status": "done",
        "tags": ["bill"]
    },
    {
        "id": 3,
        "subject": "Buy body suite",
        "content": "Buy body suite",
        "status": "done",
        "tags": ["shopping"]
    },
    {
        "id": 4,
        "subject": "Buy used things",
        "content": "Buy used things",
        "status": "done",
        "tags": ["shopping"]
    }
];

function findLastId() {
    var id = 0;
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id > id) {
            id = tasks[i].id;
        }
    }
    return id;
}

exports.findAll = function() {
    return tasks;
};

exports.findById = function (id) {
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) return tasks[i];
    }
};

exports.filterByStatus = function (status) {
    var filtered = tasks.filter(function (item) {
        return item.status === status;
    });
    return filtered;
};

exports.filterByTag = function (tag) {
    var filtered = tasks.filter(function (item) {
        return item.Tag === tag;
    });
    return filtered;
};

exports.filterByTagAndStatus = function (tag,status) {
    var filtered = tasks.filter(function (item) {
        return item.Tag === tag && item.status === status ;
    });
        return filtered;
};

exports.update = function (task, data)
{
    for (var prop in data) {
        if (task.hasOwnProperty(prop)) {
            task[prop] = data[prop];
        }
    }
};

exports.persist = function (data) {
    var task = data;
    task.id = findLastId() + 1;
    tasks.push(task)
};

exports.delete = function (id) {
    tasks = tasks.filter(function (task) {
        return task.id != id;
    })
};

exports.updateStatus = function (task, status) {
    task.status = status;
};


