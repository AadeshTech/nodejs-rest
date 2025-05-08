const Message = require('../models/Message');
const Group = require('../models/Group');

module.exports = (io) => {
    io.on('connection', (socket) => {
      console.log('Socket connected:', socket.id);
  
      socket.on('join_group', async ({ group, user }) => {
        socket.join(group);
        console.log(`${user} joined group ${group}`);
        io.to(group).emit('notification', `${user} joined group ${group}`);
      });
  
      socket.on('group_message', ({ group, from, message }) => {
        console.log(`${from} sending to group ${group}: ${message}`);
        io.to(group).emit('group_message', { from, message });
      });
  
      socket.on('leave_group', async ({ group, user }) => {
        socket.leave(group);
        console.log(`${user} left group ${group}`);
        io.to(group).emit('notification', `${user} left group ${group}`);
      });
    });
  };