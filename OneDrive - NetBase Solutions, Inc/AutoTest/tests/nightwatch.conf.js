'use strict'

require('babel/register')

var selenium = require('selenium-server-standalone-jar');
var chromeDriver = require('chrome-driver-standalone');

var config = {
  //baseUrl: process.env.baseUrl || 'https://dev-app.netbase.com',
  "custom_commands_path": "tests/command",
  "page_objects_path": "tests/pages",
  "data_path": "tests/data",
  "src_folders": ["tests"],
  "selenium": {
    "start_process": true,
    "server_path": selenium.path,
    "cli_args": {
      "webdriver.chrome.driver": chromeDriver.path
    }
  },
  "test_settings": {
    "default": {
      "launch_url": "https://dev-app.netbase.com",
      "globals": {
        "waitForConditionTimeout": 30000
      },
      "desiredCapabilities": {
        "browserName": "chrome",
      }
    }
  }
}

module.exports = config;