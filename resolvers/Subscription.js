export const Subscription = {
    changedTodo: {
        subscribe(parent, args, { pubsub }, info) {
            return pubsub.asyncIterator('Todo');
        }
    },
}