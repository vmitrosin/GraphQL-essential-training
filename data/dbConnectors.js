import mongoose from 'mongoose';

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://public:muie2utoti@cluster0.4plyfv2.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

const widgetSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  soldOut: {
    type: String
  },
  inventory: {
    type: String
  },
  stores: {
    type: Array
  }
});

const Widgets = mongoose.model('widgets', widgetSchema);

export {Widgets};