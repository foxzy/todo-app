# todo-app
RESTful API backend for todo task.
##Installation
<ol>
<li><p>Clone the repository: git clone https://github.com/foxzy/todo-app.git</p></li>
<li><p>Install the application: npm install</p></li>
<li><p>Start the server: node server.js</p></li>
<li><p>Install the application: npm install</p></li>
<li><p>Send request with postman </p>
     <p>Set Headers key:Content-type,</p>
     <p>Value:application/json</p>
</li>
</ol>

###API Document
1.Create RESTFul API 
<ol>
<li>GET http://localhost:3000/tasks/        :View all items in the list</li>
<li>GET http://localhost:3000/tasks/:id     :View a single task in the list</li>
<li>POST http://localhost:3000/tasks/       :Add a task to the list

    setbody request raw data
                  {
                    "subject": "office",
                    "status": "PENDING",
                    "Tag": "office",
                    "text": "follow up emails"
                   }
     
</li>
<li>PUT http://localhost:3000/tasks/:id       :Edit existing task

    setbody request raw data
                   {
                    "content": "clean the room number 401"
                   } 
                                                
 </li>
 <li>PUT http://localhost:3000/tasks/:id/update-status    :Set the task status
 
     setbody request raw data
                   {
                    "status": "pending"
                   }
                   
 </li>
 <li>DELETE http://localhost:3000/tasks/:id        :Delete a task from the list</li>
</ol>






 