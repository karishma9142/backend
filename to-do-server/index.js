const express = require("express");
const app = express();
app.use(express.json());
const todos =[{
    ID : 1,
    title : "first todo" ,
    completed : "flase" ,
    description : "eat"
}]
app.get("/todos" , function(req,res){
    res.status(200).json({
        todos
    });
});
app.get("/todos/:id" , function(req,res){
    const id = parseInt(req.params.id);
    for(let i=0;i<todos.length;i++){
        if(todos[i].ID===id){
            res.json(todos[i]);
        }
    }
    res.status(404).json({
        error : "Todo not found"
    });
});
app.post("/todos" , function(req,res){
    const id = Math.floor(Math.random() * 100) + 1;
    const { title, description, completed = false } = req.body;

  const newTodo = { ID: id, title, description, completed };
  todos.push(newTodo);

  res.status(200).json({ msg: "Todo added successfully", todo: newTodo });
});
app.put("/todos/:id" , function(req,res){
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.ID === id);
    if(!todo){
        return res.status(404).json({
            msg : "Not found"
        })
    }
    const {title , description , completed} = req.body;
    if (title !== undefined) todo.title = title;
    if (description !== undefined) todo.description = description;
    if (completed !== undefined) todo.completed = completed;
    res.status(200).json({
        msg : "Todo updated successfully" ,
        todo 
    })
});
app.delete("/todos/:id" , function(req,res){
    const id = parseInt(req.params.id);
    const index = todos.findIndex(t=>t.ID===id);
    if(index==-1){
        return res.status(404).json({
            msg :"not found"
        })
    }
    todos.splice(index,1);
    res.json({
        msg : "todo deleted succesfully"
    })
});
app.listen(3000);