const mongoose = require('mongoose');
const { TEST_DB, PRODUCTION_DB, LOCAL_DB } = require('./keys');

let mongoUrl = null;

const mongoConnection = () => {
  if (process.env.NODE_ENV === 'development') {
    mongoUrl = LOCAL_DB || 'mongodb+srv://lekan:uv1DVANFaQMc6Kji@twitter-clone.okjok7u.mongodb.net/test'
  } else if (process.env.NODE_ENV === 'test') {
    mongoUrl = TEST_DB;
  } else {
    mongoUrl = PRODUCTION_DB;
  }

  return mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = mongoConnection;
