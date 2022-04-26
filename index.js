import { GraphQLServer } from 'graphql-yoga'
import { Query } from './resolvers/Query.js'
import { Student } from './resolvers/Student.js'
import {Todo} from "./resolvers/Todo.js";
import {User} from "./resolvers/User.js";
const typeDefs = "schema/schema.graphql";
const resolvers = {
    Query,
    Student,
    Todo,
    User
};
const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
