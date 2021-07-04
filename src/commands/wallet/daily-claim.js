import { userService } from '../../services/user-service';
import { Command, CommandoMessage } from 'discord.js-commando';

export default class DailyClaimCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'daily',
      group: 'wallet',
      memberName: 'daily',
      description: 'Fait gagner une somme d\'argent de façon journalière.',
    });
  }

  /**
   *
   * @param {CommandoMessage} message
   */
  async run(message) {
    const user = await userService.findUser(message);
    console.log(user);
    console.log(!user.lastDailyClaim)
    if (!user.lastDailyClaim || isClaimAvailable(user.lastDailyClaim)) {
      user.lastDailyClaim = new Date();
      user.wallet += 100;
      user.save();
    }
  }
}

/**
 * Verifies if the daily claim is available.
 * @param {Date} date 
 * @returns {boolean}
 */
const isClaimAvailable = (date) => {
  const DAY = 24 * 60 * 60 * 1000;
  const timeSpent = new Date() - date;
  return timeSpent >= DAY;
}
