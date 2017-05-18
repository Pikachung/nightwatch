
module.exports = {  
	
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    usernameField: {
      selector: 'input[name=j_username]'
    },
    passwordField: {
      selector: 'input[name=j_password]'
    },
    submit: {
      selector: '#button'
    }
  },
  commands: [{
    signInAsAdmin: function(username,password) {
      return this.setValue('@usernameField', username)
                 .setValue('@passwordField', password)
                 .click('@submit');
    }
  }]
};