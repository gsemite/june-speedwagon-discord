import { UserModel } from '../mongo/mongo-connection';
import { CommandoMessage } from 'discord.js-commando';

class UserService {
  constructor() { }

  /**
   * Creates an user in the database.
   * @param {CommandoMessage} message 
   * @returns {Promise<any>}
   */
  createUser = async (message) => {
    const newUser = new UserModel({
      username: message.author.username,
      wallet: 0,
      createdAt: new Date(),
    });

    await newUser
      .save()
      .then(message.say('Le porte-feuille a été initialisé avec succès.'))
      .catch(err => {
        console.log(err);
        message.say('Une erreur est survenue lors de la création du porte-feuille.')
      });

    return newUser;
  }

  /**
   * Finds a user in the database.
   * @param {CommandoMessage} message 
   * @returns {Promise<any>} promise containing the user
   */
  findUser = async (message) => {
    let doc = await UserModel.findOne({ username: message.author.username });
    if (!doc) {
      doc = await this.createUser(message);
    }
    return doc;
  }
}

// Singleton
export const userService = new UserService();