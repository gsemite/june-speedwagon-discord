import { CommandoClient } from 'discord.js-commando';
import { join } from 'path';
import { commandPrefix, owner, token } from '../config.json';

const client = new CommandoClient({
	commandPrefix,
	owner,
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['general', 'Commandes générales.'],
		['wallet', 'Commandes pour gérer le porte-feuille.'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(join(__dirname, 'commands'));

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
	client.user.setActivity('avec sa queue');
});

client.on('error', console.error);

client.login(token);
