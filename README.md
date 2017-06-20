# todo-app
Backend RESTful API

# Installation
1. Git clone https://github.com/foxzy/todo-app.git
2. Install application, use `npm install`
3. Run server, use `node ./bin/www`

To test, call to the API using any tools like Postman. 

# API Reference
RESTFul API

## Methods

### `GET` /tasks
List all existing tasks

#### Response
<table>
    <tr>
        <td><code>200</code></td>
        <td>Success</td>
        <td>An array of task object. See example response body</td>
    </tr>
</table>

    [
        {
            "id": 1,
            "subject": "This is my TODO API",
            "content": "Feel free to folk my project repository.",
            "tags": ["todo"],
            "status": "done"
        }
    ]

### `GET` /task/:id
Get an individual task

#### Parameters
<table>
    <tr>
        <td>id</td>
        <td>integer</td>
        <td>The id of the task</td>
    </tr>
</table>

#### Response
<table>
    <tr>
        <td><code>200</code></td>
        <td>Success</td>
        <td>A task object. See example response body</td>
    </tr>
</table>

    {
        "id": 1,
        "subject": "This is my TODO API",
        "content": "Feel free to folk my project repository.",
        "tags": ["todo"],
        "status": "done"
    }
    
### `POST` /task
Add a new task to the list

#### Fields
See example request body
<table>
    <tr>
        <td><code>subject</code></td>
        <td>string</td>
        <td>The subject of the task</td>
    </tr>
    <tr>
        <td><code>content</code></td>
        <td>string</td>
        <td>The details of the task</td>
    </tr>
    <tr>
        <td><code>tags</code></td>
        <td>string[]</td>
        <td>Any tags refer to the task</td>
    </tr>
</table>

    {
        "subject": "This is my TODO API",
        "content": "Feel free to folk my project repository.",
        "tags": ["todo"]
    }
    
#### Response
<table>
    <tr>
        <td><code>200</code></td>
        <td>Success</td>
        <td>The id of the task. See example response body</td>
    </tr>
</table>

    {
        "id": 1
    }
    
### `PUT` /task/:id
Update an individual task

#### Parameters
<table>
    <tr>
        <td>id</td>
        <td>integer</td>
        <td>The id of the task</td>
    </tr>
</table>

#### Fields
See example request body
<table>
    <tr>
        <td><code>subject</code></td>
        <td>string</td>
        <td>The subject of the task</td>
    </tr>
    <tr>
        <td><code>content</code></td>
        <td>string</td>
        <td>The details of the task</td>
    </tr>
    <tr>
        <td><code>tags</code></td>
        <td>string[]</td>
        <td>Any tags refer to the task</td>
    </tr>
</table>

    {
        "subject": "This is my TODO API",
        "content": "Feel free to folk my project repository.",
        "tags": ["todo"]
    }
    
#### Response
<table>
    <tr>
        <td><code>200</code></td>
        <td>Success</td>
        <td><i>None</i></td>
    </tr>
</table>

### `PUT` /task/:id/status
Update status of an individual task

#### Parameters
<table>
    <tr>
        <td>id</td>
        <td>integer</td>
        <td>The id of the task</td>
    </tr>
</table>

#### Fields
<table>
    <tr>
        <td><code>status</code></td>
        <td>string</td>
        <td><code>pending</code> or <code>done</code> - status of the task</td>
    </tr>
</table>

    {
        "status": "done"
    }

### `DELETE` /task/:id
Delete an individual task from the list

#### Parameters
<table>
    <tr>
        <td>id</td>
        <td>integer</td>
        <td>The id of the task</td>
    </tr>
</table>

#### Response
<table>
    <tr>
        <td><code>200</code></td>
        <td>Success</td>
        <td><i>None</i></td>
    </tr>
</table>
