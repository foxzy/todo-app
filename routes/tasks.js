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
        "status": "",
        "Tag": "shopping",
        "text": "buy bodySuite"
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
exports.fildByStatus = function (status) {
    for (var i = 0; i< tasks.length; i++)
    {
        if(tasks[i].status == status) return tasks[i];
    }
}


