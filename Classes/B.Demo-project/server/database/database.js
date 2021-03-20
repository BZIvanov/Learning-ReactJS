const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb://localhost:27017/fog-db', {
    useNewUrlParser: true,
  });
  const db = mongoose.connection;
  db.once('open', (err) => {
    if (err) {
      console.log(err);
    }

    console.log('Database ready');
  });

  db.on('error', (reason) => {
    console.log(reason);
  });
};
