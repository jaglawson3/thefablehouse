
class NavbarController {
  //start-non-standard




  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.menu = [{
        'title': 'Home',
        'state': 'main'
      },{
        'title': 'Preview Story',
        'state': 'story'

      }];
    this.isCollapsed = true;
      //end-non-standard
  }
}

angular.module('theFableHouseApp')
  .controller('NavbarController', NavbarController);
