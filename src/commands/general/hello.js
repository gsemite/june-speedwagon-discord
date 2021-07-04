import { Command, CommandoMessage } from 'discord.js-commando';

export default class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'hello',
			group: 'general',
			memberName: 'hello',
			description: 'Répond avec une salutation.',
		});
	}

	/**
	 *
	 * @param {CommandoMessage} message
	 */
	run(message) {
		console.log(`Hello command executed by ${message.author.username}`);
		const msgToSend =
			message.author.username === 'lerouxnoir' ? 'Oh non pas toi...' : 'Hey !!';
		message.say(msgToSend);
	}
}
