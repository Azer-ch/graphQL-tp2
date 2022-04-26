import { db } from "../data/db.js";

export const Query = {
    hello: (parent, args, context, info) => {
        console.log('parent : ', parent);
        console.log('context : ', context);
        console.log('info : ', info);
        console.log('args : ', args);
        return `Hello ${args.name || 'World'}`;
    },
    infos: () => {
        return {
            name: 'Sellaouti',
            firstname: 'Aymen'
        }
    },
    getAllStudents: () => {
        return db.students;
    },
    getStudent: (_, {id}) => {
        return db.students.find(
            (student) => student.id == id
        );
    },
    getTodoById:(parent, args, context, info) => {
        return db.todos.find(
            (todo) => todo.id == args.id
        );
    },
    getUserById:(parent,args,context,info) => {
        return db.users.find(
            (user) => user.id == args.id
        );
    },
}
