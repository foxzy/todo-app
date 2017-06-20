# todo-app
RESTful API backend for todo task.
#Installation
1.Clone the repository: git clone https://github.com/foxzy/todo-app.git
2.Install the application: npm install
3.Start the server: node server.js
4.Send request with postman 
    Set Headers key:Content-type,
    Value:application/json
 
#Test
1.Create RESTFul API 
GET http://localhost:3000/tasks/        :View all items in the list
GET http://localhost:3000/tasks/:id     :View a single task in the list
POST http://localhost:3000/tasks/       :Add a task to the list
     setbody request raw data
                    {
                         "subject": "office",
                         "status": "PENDING",
                         "Tag": "office",
                         "text": "follow up emails"
                    }
                    
                    
PUT http://localhost:3000/tasks/:id    :Edit existing task 
     setbody request raw data
                    {
                       "content": "clean the room number 401"
                     }         
                    
PUT http://localhost:3000/tasks/:id/update-status    :Set the task status
     setbody request raw data
                     {
                        "status": "pending"
                     }
                     
DELETE http://localhost:3000/tasks/:id        :Delete a task from the list
 