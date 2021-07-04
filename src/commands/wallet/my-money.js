import { Command, CommandoMessage } from 'discord.js-commando';
import { userService } from '../../services/user-service';

export default class MyMoneyCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'mymoney',
			aliases: ['mm'],
			group: 'wallet',
			memberName: 'mymoney',
			description: 'Retourne le contenu du porte-feuille.',
			throttling: {
				usages: 2,
				duration: 10,
			},
		});
	}

	/**
	 * @param {CommandoMessage} message
	 */
	async run(message) {
		let user = await userService.findUser(message);
		console.log(user);
		message.say(`Tu possèdes ${user.wallet} dinar${user.wallet > 1 ? 's' : ''} 💸.`);
	}
}