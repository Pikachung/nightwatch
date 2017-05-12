module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('input[name=btnK]', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .click('input[value="Google 搜尋"]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
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
  },
};