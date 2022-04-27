
export const User = {
    todos: ( user,args,{db} ) => {
        return db.todos.filter( todo => todo.user === user.id );
    }
}
