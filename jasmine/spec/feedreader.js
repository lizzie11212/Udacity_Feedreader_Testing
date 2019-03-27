$(function() {
   
    describe('RSS Feeds', function() {
        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it('each feed has a URL', function() {
             for (let feed of allFeeds){
               expect(feed.url).toBeDefined();
               expect(feed.url.length).not.toBe(0);
               expect(typeof feed.url).toMatch('string');
               expect(new URL(feed.url)).toBeTruthy();
             }
         });


         it('each feed has a name', function() {
             for (let feed of allFeeds){
               expect(feed.name).toBeDefined();
               expect(feed.name.length).not.toBe(0);
               expect(typeof feed.url).toMatch('string');
             }
         });

    });

    describe('The menu', function() {

         it('hidden by default', function(){
              expect($('body').hasClass('menu-hidden')).toBeTruthy();
         });

          it('changes visibility when icon is clicked', function(){
              let menuIcon = $('.menu-icon-link');
              menuIcon.click();
              expect($('body').hasClass('menu-hidden')).toBeFalsy();
              menuIcon.click();
              expect($('body').hasClass('menu-hidden')).toBeTruthy();
          });
    });

    describe('Initial Entries', function() {

         beforeEach(function(done){
           loadFeed(0,done);
         });

         it ('has at least one entry in feed container', function(){
           let container = document.querySelector('.feed');
           let entries = container.querySelectorAll('.entry');
           expect(entries.length).toBeGreaterThan(0);
         });

    });

    describe('New Feed Selection', function(){

         let feed1;
         let feed2;

         beforeEach(function(done){
           loadFeed(1, function(){
             feed1 = document.querySelector('.feed').innerHTML;
             loadFeed(2, function(){
               feed2 = document.querySelector('.feed').innerHTML;
               done();
             });
           });
         })

         it('new feed is loaded and the content changes', function(){
           expect(feed1).toBeDefined();
           expect(feed2).toBeDefined();
           expect(feed1).not.toBe(feed2);
         });
    });
}());
