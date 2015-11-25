'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

var hasClass = function (element, cls) {
  return element.getAttribute('class').then(function (classes) {
    return classes.split(' ').indexOf(cls) !== -1;
  });
};

describe('my app', function() {


  it('should automatically redirect to / when location hash/fragment is empty', function() {
    browser.get('/');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });


  describe('about', function() {

    beforeEach(function() {
      browser.get('#/about');
    });


    it('should render about page when user navigates to /about', function() {
      expect(element.all(by.css('[ui-view] h1')).first().getText()).
        toMatch(/ABOUT PAGE/);
    });

  });


  describe('contact', function() {
    var name = element(by.model('contact.name'));
    var phone = element(by.model('contact.phone'));
    var email = element(by.model('contact.email'));
    var message = element(by.model('contact.message'));
    var submit = element(by.buttonText("Submit"));
    var confirmation = element(by.id('contact-confirm'));

    beforeEach(function() {
      browser.get('#/contact');
    });


    it('should render contact when user navigates to /contact', function() {
      expect(element.all(by.css('[ui-view] h1')).first().getText()).
        toMatch('Contact Me');
    });

    it('should allow submission', function() {
      name.sendKeys('name');
      phone.sendKeys('123456');
      email.sendKeys('email@google.com');
      message.sendKeys('message text');
      submit.click();

      expect(confirmation.getText()).
        toMatch('Thank you');
    });

    it('should disallow submission for invalid email', function() {
      name.sendKeys('name');
      phone.sendKeys('123456');
      email.sendKeys('invalidemail.com');
      message.sendKeys('message text');
      submit.click();

      expect(hasClass(email, 'ng-invalid')).toBe(true);
      expect(submit.isEnabled()).toBe(false);
      browser.pause();
    });

  });
});
