import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  deactivate: function () {
    var model = this.modelFor('friends/edit');
    model.rollback();
  },
  actions: {
    cancel: function () {
      this.transitionToRoute('friends.show', this.get('model'));
      return false;
    }
  }
});
