# The Odin Project: New-Todo-List

Link: [https://github.com/prodijay777/new-todo-list/blob/main/README.md](https://prodijay777.github.io/new-todo-list/)
![new-todo-list](https://github.com/prodijay777/new-todo-list/assets/105083538/36116a06-5440-4912-b333-ee36047a03d0)


A todo list project. Users can create and delete projects and 'todo' tasks. Todo tasks can also be modified.
Users can click on todos to show their description. Additionally users can view their projects using the drop down on the left sidebar.

## Goals
One of the main goals was to learn how to separate concerns in the code, with so many different modules. This was especially useful when debugging the code and having clean code. The PubSub pattern was used for this purpose.

## What I've learned
- Use of HTMLWebPackPlugin.
- Use of a HTML template in /src.
- Requirement of css files in index.js, rather than index.html when using Webpack.
- Use of PubSub pattern to decouple modules and separate concerns.
- Use of ES6 import/export.
- Use of .gitignore.
- Requirement of creating multiple instances of Node elements rather than assigning the same instance multiple times.
- Importance of indexes (as data attributes or values if select option)to match DOM elements to objects.
- Use of closest() method to target specific parent node, useful when clicking a node that has children nodes.
- Use of clearfix in CSS to expand parent when child is appended.
- Use of separate module for using Local Storage, as local storage is inherently not shared between multiple modules.
- Returning an object with multiple functions requires that the same name of variables are used.
- Use of the singleton pattern to use a single instance, and thus a single internal state of an object. Used for local storage.
