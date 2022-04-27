import {v4 as uuidv4} from 'uuid';

export const Mutation = {
    addClassroom: (parent, { addClassroomInput }, { db, pubsub }, info) => {
        const newClassroom = {id: uuidv4(),...addClassroomInput};
        db.classroom.push(newClassroom);
        pubsub.publish('newClassroom', {newClassroom})
        return newClassroom;
    },
    addTodo: (parent, { addTodoInput }, { db, pubsub }, info) => {
        const user = db.users.find(user => user.id == addTodoInput.user);
        if(!user) throw new Error('user not found');
        else {
            const newTodo = {id: uuidv4(), ...addTodoInput};
            db.todos.push(newTodo);
            pubsub.publish('Todo', {newTodo,"operation":"add"});
            return newTodo;
        }
    },
    modifyTodo:(parent,{modifyTodoInput,id},{db,pubsub},info)=>{
        const index =  db.todos.findIndex((t) => t.id === id);
        const todo = db.todos[index];
        if(!todo){
            throw new Error('todo not found');
        }
        else {
            console.log(modifyTodoInput);
            if (modifyTodoInput.user) {
                const user = db.users.find(user => user.id === modifyTodoInput.user);
                if (!user) throw new Error('user not found');
                else {
                    todo.user = modifyTodoInput.user;
                }
            }
                todo.name = modifyTodoInput.name ? modifyTodoInput.name : todo.name;
                todo.content = modifyTodoInput.content ? modifyTodoInput.content : todo.content;
                todo.status = modifyTodoInput.status ? modifyTodoInput.status : todo.status;
               pubsub.publish('Todo', {todo,"operation":"modify"});
                return todo;
        }
    },
    deleteTodo:(parent,{id},{db,pubsub},info)=>{
        const index =  db.todos.findIndex((t) => t.id === id);
        const todo = db.todos[index];
        if(!todo){
            throw new Error('todo not found');
        }
        else {
            db.todos.splice(index,1);
            pubsub.publish('Todo', {todo,"operation":"delete"});
            return todo;
        }
    },
}