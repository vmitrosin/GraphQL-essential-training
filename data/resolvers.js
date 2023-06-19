import {Widgets} from './dbConnectors';

const resolvers = {
  getProduct: ({id}) => {
    return Widgets.findById({_id: id}).exec();
  },

  getAllProducts: () => {
    return Widgets.find()
  },

  createProduct: async ({input}) => {
    await  Widgets.create({
      name: input.name,
      description: input.description,
      price: input.price,
      soldOut: input.soldOut,
      inventory: input.inventory,
      stores: input.stores,
    });
  },

  updateProduct: async ({input}) => {
    const filter = {_id: input.id};
    await Widgets.updateOne(filter, {
      name: input.name,
      description: input.description,
      price: input.price,
      soldOut: input.soldOut,
      inventory: input.inventory, 
      stores: input.stores,
    });
  },
  
  deleteProduct: async ({id}) => {
    const filter = {_id: id};
    await Widgets.findOneAndRemove(filter);
  }
}

export default resolvers;