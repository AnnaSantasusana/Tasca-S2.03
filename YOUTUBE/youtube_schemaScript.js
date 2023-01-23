youtube_schemaScript

db.createCollection('user', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'user',
      required: ['email', 'password', 'name', 'birth_date', 'gender', 'country', 'zip_code'],
      properties: {
        email: {
          bsonType: 'string'
        },
        password: {
          bsonType: 'string'
        },
        name: {
          bsonType: 'string'
        },
        birth_date: {
          bsonType: 'date'
        },
        gender: {
          enum: ['M', 'F']
        },
        country: {
          bsonType: 'string'
        },
        zip_code: {
          bsonType: 'string'
        }
      }
    }
  }
});
db.createCollection('video', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'video',
      required: ['user', 'title', 'description', 'size', 'file_name', 'duration', 'num_reproductions', 'num_likes', 'num_dislikes', 'state', 'tags', 'publication_datetime'],
      properties: {
        user: {
          bsonType: 'objectId'
        },
        title: {
          bsonType: 'string'
        },
        description: {
          bsonType: 'string'
        },
        size: {
          bsonType: 'double'
        },
        file_name: {
          bsonType: 'string'
        },
        duration: {
          bsonType: 'string'
        },
        thumbnail: {
          bsonType: 'string'
        },
        num_reproductions: {
          bsonType: 'int'
        },
        num_likes: {
          bsonType: 'int'
        },
        num_dislikes: {
          bsonType: 'int'
        },
        state: {
          enum: ['Public', 'Hidden', 'Private']
        },
        tags: {
          bsonType: 'array',
          items: {
            bsonType: 'string'
          }
        },
        publication_datetime: {
          bsonType: 'date'
        },
        interaction: {
          bsonType: 'object',
          title: 'object',
          properties: {
            like: {
              bsonType: 'array',
              items: {
                title: 'object',
                properties: {
                  userID: {
                    bsonType: 'objectId'
                  },
                  datetime: {
                    bsonType: 'date'
                  }
                }
              }
            },
            dislike: {
              bsonType: 'array',
              items: {
                title: 'object',
                properties: {
                  userID: {
                    bsonType: 'objectId'
                  },
                  datetime: {
                    bsonType: 'date'
                  }
                }
              }
            },
            comment: {
              bsonType: 'array',
              items: {
                title: 'object',
                properties: {
                  userID: {
                    bsonType: 'objectId'
                  },
                  text: {
                    bsonType: 'string'
                  },
                  datetime: {
                    bsonType: 'date'
                  },
                  reaction: {
                    bsonType: 'object',
                    title: 'object',
                    properties: {
                      like: {
                        bsonType: 'array',
                        items: {
                          title: 'object',
                          properties: {
                            userID: {
                              bsonType: 'objectId'
                            },
                            datetime: {
                              bsonType: 'date'
                            }
                          }
                        }
                      },
                      dislike: {
                        bsonType: 'array',
                        items: {
                          title: 'object',
                          properties: {
                            userID: {
                              bsonType: 'objectId'
                            },
                            datetime: {
                              bsonType: 'date'
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});
db.createCollection('channel', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'channel',
      required: ['user', 'name', 'description', 'creation_date'],
      properties: {
        user: {
          bsonType: 'objectId'
        },
        name: {
          bsonType: 'string'
        },
        description: {
          bsonType: 'string'
        },
        creation_date: {
          bsonType: 'date'
        },
        subscribers: {
          bsonType: 'object',
          title: 'object',
          properties: {
            userID: {
              bsonType: 'array',
              items: {
                bsonType: 'objectId'
              }
            }
          }
        }
      }
    }
  }
});
db.createCollection('playlist', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'playlist',
      required: ['user', 'name', 'creation_date', 'state', 'video'],
      properties: {
        user: {
          bsonType: 'objectId'
        },
        name: {
          bsonType: 'string'
        },
        creation_date: {
          bsonType: 'date'
        },
        state: {
          enum: ['Public', 'Private']
        },
        video: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        }
      }
    }
  }
});