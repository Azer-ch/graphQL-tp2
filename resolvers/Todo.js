
export const Todo = {
    user: ( todo,args,{db} ) => {
        return db.users.find(
            (user) => user.id === todo.user
        );
    }
}
