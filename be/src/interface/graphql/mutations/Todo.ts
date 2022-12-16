import todoStore from '../../db/todoStore';
import {MutationResolvers} from '../generated/graphql';

export const Mutation: MutationResolvers = {
  async addTodo(_parent, args) {
    return todoStore.addTodo(args.content);
  },
  async deleteTodo(_parent, args) {
    return todoStore.deleteTodo(args.id);
  },
};
