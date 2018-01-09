const Discord = require('discord.js');

const client = new Discord.Client();


var active = false

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === '!Initialize') {
    roll.create('PUGS');
    message.channel.send('bot initialized!')
  }
 });

client.on('message', message => {
  if (message.content === '!enable') {
    message.channel.send('enabling...');
    active = true
    message.channel.send('AutoRole successfully enabled!')
  }
});

client.on('message', message => {
  if (message.content === '!disable') {
    message.channel.send('disabling...');
    active = false
    message.channel.send('AutoRole successfully disabled!')
  }
});

client.on('message', message => {
  if (message.content === '!check') {
    if active = true {
      message.content.send('Autorole is currently ACTIVE')}
    if active = false {
      message.content.send('Autorole is currently OFF')}
  }
});

client.on('guildMemberAdd', member => {
  if active = true {
    member.addRole(PUGS);
    message.channel.send('${Member} has been added to PUGS');
  }
});

client.login(process.env.BOT_TOKEN);
