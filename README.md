# GraphQL-Essential-Training

### **Create a product**
```gql
mutation {
  createProduct(input: {
    name: "Widget 1",
    description: "Description for the new widget",
    price: 21.99,
    soldOut: SOLDOUT,
    inventory: 99,
    stores: [
      {store: "Pasadena"},
      {store: "Ventura"}
    ]
  }) {
    id
  }
}
```

### **Update a product**
```gql
mutation {
	updateProduct(input: {
    id: "abc",
    name:"Modified widget",
    description: "This is a new description",
    price: 1.99,
    soldOut: SOLDOUT,
    inventory:21,
    stores: [{store: "New York"}]
  }) {
    name
    stores {
      store
    }
  }
}
```

### **Get a product by id**
```gql
query {
  getProduct(id: "abc") {
    id
    name
    description
    price
    soldOut
    inventory
    stores {
      store
    }
    soldOut
  }
}
```

### **Get all product**
```gql
query {
  getAllProducts {
    id
    name
    description
    price
  }
}
```

### **Delete a product by id**
```gql
mutation {
	deleteProduct(id: "abc")
}
```

### **Aliases**
Create multiple operations on different products with the same query
```gql
query {
  price: getProduct(id: "abc") {
    name
    price
  },
  description: getProduct(id: "xyz") {
    name
    description
  }
}
```

### **Fragments**
Code blocks that repeat and used in GQL operations
```gql
query {
  widget1: getProduct(id: "abc") {
    ...widgetFragment
  },
  widget2: getProduct(id: "xyz") {
    ...widgetFragment
  }
}

fragment widgetFragment on Product {
  name
  price
  description
  soldOut
}
```