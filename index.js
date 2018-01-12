const Discord = require('discord.js');

const client = new Discord.Client();


var active = false

client.on('ready', () => {
  console.log('I am ready!');
});

/* client.on('message', message => {
  if (message.content === '!Initialize') {
    client.createRole('PUGS');
    message.channel.send('bot initialized!')
  }
 });
*/
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
    switch (active) {
      case true:
        message.channel.send('Addon currently ACTIVE');
        break;
      case false:
        message.channel.send('addon currently DEACTIVE');
        break;
                  }
}});

client.on('guildMemberAdd', member => {
  if(active === true) {
    var role = member.guild.roles.find("name", "PUGS");
    member.addRole(role).catch(console.error);
  }
})

client.login(process.env.BOT_TOKEN);
