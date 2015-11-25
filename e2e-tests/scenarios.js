'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

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

    beforeEach(function() {
      browser.get('#/contact');
    });


    it('should render contact when user navigates to /contact', function() {
      expect(element.all(by.css('[ui-view] h1')).first().getText()).
        toMatch('Contact Me');
    });

  });
});
