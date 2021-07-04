import mongoose from 'mongoose';

import { userSchema } from '../schema/user-schema';

const url = 'mongodb://localhost:27017/local';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};
mongoose.connect(url, options);
const db = mongoose.connection;


db.on('connected', () =>
  console.log('[MongoDB] is running on port 27017')
);

db.on('disconnected', () =>
  console.warn('[MongoDB] is not connected')
);

db.on('error', console.error.bind(console, 'connection error:'));

const UserModel = mongoose.model('User', userSchema);

export { db, UserModel }