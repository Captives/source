export default {
  changeCityAction(context, item){
    context.commit('changeCity', item);
  },
  sendMessage(context, item){
    context.commit('broadcast', item);
  },
  clearMessage(context, item){
    context.commit('clearMessage', item);
  },
  socket_userMessage: (context, message) => {
    context.dispatch('newMessage', message);
    context.commit('NEW_MESSAGE_RECEIVED', message);
    console.log('message.is_important', message.is_important);
    if (message.is_important) {
      context.dispatch('alertImportantMessage', message);
    }
  }
}
