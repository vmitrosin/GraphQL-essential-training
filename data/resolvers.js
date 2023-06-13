import {Widgets} from './dbConnectors';

const resolvers = {
  getProduct: ({id}) => {
    return new Promise((resolve) => {
      Widgets.findById({_id: id}, (err, product) => {
        if (err) return reject(err);
        else resolve(product);
      })
    });
  },
  createProduct: ({input}) => {
    const newWidget = new Widgets({
      name: input.name,
      description: input.description,
      price: input.price,
      soldOut: input.soldOut,
      inventory: input.inventory,
      stores: input.stores,
    });
    newWidget.id = newWidget._id;
    return new Promise((resolve, reject) => {
      newWidget.save((err) => {
        if(err) reject(err);
        else resolve(newWidget);
      });
    });
  }
}

export default resolvers;