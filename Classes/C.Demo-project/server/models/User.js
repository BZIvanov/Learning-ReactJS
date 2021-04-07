const { Schema, model } = require('mongoose');
const encryption = require('../utilities/encryption');

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required';

const userSchema = new Schema({
  email: { type: String, required: REQUIRED_VALIDATION_MESSAGE, unique: true },
  username: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
  salt: String,
  password: String,
  roles: [String],
});

userSchema.method({
  authenticate: function (password) {
    return (
      encryption.generateHashedPassword(this.salt, password) === this.password
    );
  },
});

const User = model('User', userSchema);

module.exports = User;

module.exports.seedAdminUser = () => {
  User.find({}).then((users) => {
    if (users.length > 0) return;

    const salt = encryption.generateSalt();
    const password = encryption.generateHashedPassword(salt, '12345678');

    User.create({
      email: 'admin@admin.com',
      username: 'Admin',
      salt,
      password,
      roles: ['Admin'],
    });
  });
};
