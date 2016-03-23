
class NavbarController {
  //start-non-standard
  menu = [{
      'title': 'Home',
      'state': 'main'
    },{
      'title': 'Preview Tale',
      'state': 'story'

    }];

  isCollapsed = true;
    //end-non-standard



  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;

  }
}

angular.module('theFableHouseApp')
  .controller('NavbarController', NavbarController);
