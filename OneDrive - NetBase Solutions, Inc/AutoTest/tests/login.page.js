module.exports = {
  
  'Demo test Google' : function (browser) {
      
      var loginPage = browser.page.login()
      loginPage.navigate('http://inttest.netbase.com',"");

      browser.url('http://inttest.netbase.com')
      browser.waitForElementVisible('body', 1000)
      browser.setValue('input[name=j_username]', 'itflux@regression.com')
      browser.setValue('input[name=j_password]', '@gt_1627')
      .click$('input[type=login]')
      .pause(1000)
      .waitForElementVisible('body', 1000)
      //.assert.containsText('#main', 'Night Watch')
      .end();
  },
  'Demo test Google2' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('input[name=btnK]', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .click('input[value="Google 搜尋"]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};