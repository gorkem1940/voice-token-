// =============== Port ===============
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Bot Is Working Well!'));

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
// =============== Bot ===============

const Discord = require('discord.js-self');
const user_1 = new Discord.Client();
const user_2 = new Discord.Client();
const user_3 = new Discord.Client();
const user_4 = new Discord.Client();


const { id, id_1, error, success } = require('./config.json');

user_1.on('ready', () => {
	console.log(`USER_1 ${user_1.user.tag}!`);
	user_1.user.setPresence({ activity: { name: 'boys' }, status: 'dnd' });
	const channel = user_1.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});

user_2.on('ready', () => {
	console.log(`USER_2 ${user_2.user.tag}!`);
	user_2.user.setPresence({ activity: { name: 'girl' }, status: 'dnd' });
	const channel = user_2.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});

user_3.on('ready', () => {
	console.log(`USER_3 ${user_3.user.tag}!`);
	user_3.user.setPresence({ activity: { name: 'kusuruma bakma' }, status: 'dnd' });
	const channel = user_3.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});

user_4.on('ready', () => {
	console.log(`USER_4 ${user_4.user.tag}!`);
	user_4.user.setPresence({
		activity: { name: 'Escape from Tarkov' },status: 'dnd'
	});
	const channel = user_4.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});

//user_1.login("ODUyNzY4MzEzMzE4NTcyMDUy.GgORcv.nFcllodfXMyXmTzx-mtZWzv0KbzpieOV7nskHo");
//user_2.login("ODUyNzY5OTEwMDYxMDA2OTE4.GeUUbu.83z869LEOZF7wMlXlgmfO1ZBseHINE1JEyoedI");
//user_3.login("ODUyNzc0NDUwMjAxNDkzNTA1.GIwsFx.SKPLwPWkTq2zSvK0mTxe3HnqhFhmW7WUHxA23U");
user_4.login("ODUyNzY4MzEzMzE4NTcyMDUy.GgORcv.nFcllodfXMyXmTzx-mtZWzv0KbzpieOV7nskHo");