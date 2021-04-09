const { Schema, model } = require('mongoose');
const encryption = require('../util/encryption');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  roles: [{ type: String, required: true }],
});

userSchema.method({
  authenticate: function (password) {
    const currentHashedPass = encryption.generateHashedPassword(
      this.salt,
      password
    );

    return currentHashedPass === this.hashedPassword;
  },
});

const User = model('User', userSchema);

User.seedAdminUser = async () => {
  try {
    const users = await User.find();

    if (users.length > 0) return;

    const salt = encryption.generateSalt();
    const hashedPassword = encryption.generateHashedPassword(salt, 'Admin');
    return User.create({
      username: 'Admin',
      email: 'Admin@gmail.com',
      salt,
      hashedPassword,
      roles: ['Admin'],
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = User;
