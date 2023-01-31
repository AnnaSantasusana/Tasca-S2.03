correccio_optica

db.createCollection('provider', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'provider',
        required: ['name', 'address', 'phone', 'fax', 'nif', 'glasses'],
        properties: {
          name: {
            bsonType: 'string'
          },
          address: {
            bsonType: 'object',
            title: 'object',
            required: ['street', 'number', 'city', 'zip_code', 'country'],
            properties: {
              street: {
                bsonType: 'string'
              },
              number: {
                bsonType: 'string'
              },
              floor: {
                bsonType: 'string'
              },
              door: {
                bsonType: 'string'
              },
              city: {
                bsonType: 'string'
              },
              zip_code: {
                bsonType: 'string'
              },
              country: {
                bsonType: 'string'
              }
            }
          },
          phone: {
            bsonType: 'string'
          },
          fax: {
            bsonType: 'string'
          },
          nif: {
            bsonType: 'string'
          },
          glasses: {
            bsonType: 'array',
            items: {
              title: 'object',
              required: ['glasses_id', 'brand', 'left_eye_graduation', 'right_eye_graduation', 'frame_type', 'frame_color', 'glass_color', 'price'],
              properties: {
                glasses_id: {
                  bsonType: 'int'
                },
                brand: {
                  bsonType: 'string'
                },
                left_eye_graduation: {
                  bsonType: 'double'
                },
                right_eye_graduation: {
                  bsonType: 'double'
                },
                frame_type: {
                  bsonType: 'string'
                },
                frame_color: {
                  bsonType: 'string'
                },
                glass_color: {
                  bsonType: 'string'
                },
                price: {
                  bsonType: 'decimal'
                }
              }
            }
          }
        }
      }
    }
  });
  db.createCollection('customer', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'customer',
        required: ['name', 'zip_code', 'phone', 'mail', 'registration_data', 'purchases'],
        properties: {
          name: {
            bsonType: 'string'
          },
          zip_code: {
            bsonType: 'string'
          },
          phone: {
            bsonType: 'string'
          },
          mail: {
            bsonType: 'string'
          },
          registration_data: {
            bsonType: 'date'
          },
          recommendation_id: {
            bsonType: 'objectId'
          },
          purchases: {
            bsonType: 'array',
            items: {
              title: 'object',
              required: ['glasses_id', 'seller_name', 'purchase_date'],
              properties: {
                glasses_id: {
                  bsonType: 'int'
                },
                seller_name: {
                  bsonType: 'string'
                },
                purchase_date: {
                  bsonType: 'date'
                }
              }
            }
          }
        }
      }
    }
  });
  

