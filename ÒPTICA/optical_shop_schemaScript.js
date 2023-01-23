optical_shop

db.createCollection( 'provider', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'provider',
            required: ['name', 'address', 'phone', 'fax', 'nif'],
            properties: {
                name: {
                    bsonType: 'string'
                },
                address: {
                    bsonType: 'object',
                    title:'object',
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
                }
            }
        }      
    },
});  

db.createCollection( 'glasses', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title:'glasses',
            required: ['brand', 'left_eye_graduation', 'right_eye_graduation', 'frame_type', 'frame_color', 'glass_color', 'price', 'provider', 'sale'],
            properties: {
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
                },
                provider: {
                    bsonType: 'objectId'
                },
                sale: {
                    bsonType: 'objectId'
                }
            }
        }
    },
});  

db.createCollection( 'customer', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title:'customer',
            required: ['name', 'zip_code', 'phone', 'mail', 'registration_data'],
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
                }
            }
        }
    },
});  

db.createCollection( 'sale', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title:'sale',
            required: ['seller_name', 'sale_date', 'customer'],
            properties: {
                seller_name: {
                    bsonType: 'string'
                },
                sale_date: {
                    bsonType: 'date'
                },
                customer: {
                    bsonType: 'objectId'
                }
            }
        }
    }
});  
