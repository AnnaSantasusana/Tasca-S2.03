pizzeria_schemaScript

db.createCollection('customer', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'customer',
      required: ['name', 'surnames', 'address', 'phone'],
      properties: {
        name: {
          bsonType: 'string'
        },
        surnames: {
          bsonType: 'string'
        },
        address: {
          bsonType: 'object',
          title: 'object',
          required: ['street', 'zip_code', 'locality', 'province'],
          properties: {
            street: {
              bsonType: 'string'
            },
            zip_code: {
              bsonType: 'string'
            },
            locality: {
              bsonType: 'string'
            },
            province: {
              bsonType: 'string'
            }
          }
        },
        phone: {
          bsonType: 'string'
        }
      }
    }
  }
});
db.createCollection('store', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'store',
      required: ['address', 'employee'],
      properties: {
        address: {
          bsonType: 'object',
          title: 'object',
          required: ['street', 'zip_code', 'locality', 'province'],
          properties: {
            street: {
              bsonType: 'string'
            },
            zip_code: {
              bsonType: 'string'
            },
            locality: {
              bsonType: 'string'
            },
            province: {
              bsonType: 'string'
            }
          }
        },
        employee: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['id', 'name', 'surnames', 'nif', 'phone', 'position'],
            properties: {
              id: {
                bsonType: 'int'
              },
              name: {
                bsonType: 'string'
              },
              surnames: {
                bsonType: 'string'
              },
              nif: {
                bsonType: 'string'
              },
              phone: {
                bsonType: 'string'
              },
              position: {
                enum: ['Cook', 'Delivery person']
              }
            }
          }
        }
      }
    }
  }
});
db.createCollection('order', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'order',
      required: ['datetime', 'home_or_store', 'product', 'total_price', 'customer', 'store'],
      properties: {
        datetime: {
          bsonType: 'date'
        },
        home_or_store: {
          enum: ['home', 'store']
        },
        product: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['category', 'name', 'description', 'price', 'quantity'],
            properties: {
              category: {
                enum: ['Classic pizza', 'Vegan pizza', 'Gourmet pizza', 'Hamburguer', 'Drink']
              },
              name: {
                bsonType: 'string'
              },
              description: {
                bsonType: 'string'
              },
              image: {
                bsonType: 'string'
              },
              price: {
                bsonType: 'decimal'
              },
              quantity: {
                bsonType: 'int'
              }
            }
          }
        },
        total_price: {
          bsonType: 'decimal'
        },
        delivery: {
          bsonType: 'object',
          title: 'object',
          properties: {
            employee_id: {
              bsonType: 'int'
            },
            datetime: {
              bsonType: 'date'
            }
          }
        },
        customer: {
          bsonType: 'objectId'
        },
        store: {
          bsonType: 'objectId'
        }
      }
    }
  }
});


