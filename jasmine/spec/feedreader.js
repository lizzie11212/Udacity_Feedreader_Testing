/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function(){
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', () => {
      /* This is our first test - it tests to make sure that the
       * allFeeds variable has been defined and that it is not
       * empty. Experiment with this before you get started on
       * the rest of this project. What happens when you change
       * allFeeds in app.js to be an empty array and refresh the
       * page?
       */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it('each feed has a URL', () => {
             for (let feed of allFeeds){
               expect(feed.url).toBeDefined();
               expect(feed.url.length).not.toBe(0);
               expect(typeof feed.url).toMatch('string');
               expect(new URL(feed.url)).toBeTruthy();
             }
         });


         it('each feed has a name', () => {
             for (let feed of allFeeds){
               expect(feed.name).toBeDefined();
               expect(feed.name.length).not.toBe(0);
               expect(typeof feed.url).toMatch('string');
             }
         });

    });

    describe('The menu', () => {

         it('hidden by default', () => {
              expect($('body').hasClass('menu-hidden')).toBeTruthy();
         });

          it('changes visibility when icon is clicked', () => {
              let menuIcon = $('.menu-icon-link');
              let menuBody = $('body');
              menuIcon.click();
              expect(menuBody.hasClass('menu-hidden')).toBeFalsy();
              menuIcon.click();
              expect(menuBody.hasClass('menu-hidden')).toBeTruthy();
          });
    });

    describe('Initial Entries', () => {

         beforeEach( (done) => {
           // Anything inside this block executes before
           // each spec (it) inside this describe.
           loadFeed(0,done);
         });

         it ('has at least one entry in feed container', () => {
           let container = document.querySelector('.feed');
           let entries = container.querySelectorAll('.entry');
           expect(entries.length).toBeGreaterThan(0);
         });

    });

    describe('New Feed Selection', () => {

         let feed1;
         let feed2;

         beforeEach( (done) => {
           loadFeed(1, () => {
             feed1 = document.querySelector('.feed').innerHTML;
             loadFeed(2, () => {
               feed2 = document.querySelector('.feed').innerHTML;
               done();
             });
           });
         })

         it('new feed is loaded and the content changes', () => {
           expect(feed1).toBeDefined();
           expect(feed2).toBeDefined();
           expect(feed1).not.toBe(feed2);
         });
    });
}());
