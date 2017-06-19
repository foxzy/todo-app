/**
 * Created by parunya on 6/18/2017 AD.
 */
var tasks = [
    {
        "id": 1,
        "status": "COMPLATED",
        "Tag": "home",
        "text": "sweet the room"
    },
    {
        "id": 2,
        "status": "COMPLATED",
        "Tag": "bill",
        "text": "Pay k-bank invoice"
    },
    {
        "id": 3,
        "status": "COMPLATED",
        "Tag": "shopping",
        "text": "buy bodySuite"
    },
    {
        "id": 4,
        "status": "INPROGRESS",
        "Tag": "shopping",
        "text": "buy usething"
    },
];


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
}
exports.filterByTag = function (tag) {
    var filtered = tasks.filter(function (item) {
        return item.Tag === tag;
    });
    return filtered;
}
exports.filterByTagAndStatus = function (tag,status) {
    var filtered = tasks.filter(function (item) {
        return item.Tag === tag && item.status === status ;
    });
        return filtered;
}
exports.updateTask = function (task, data)
{
    for (var name in task) {
        if (task.hasOwnProperty(name)) {
            //console.log(name.toString());



        }
    }
}



