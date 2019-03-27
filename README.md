# Udacity FEND Project - "Feed Reader Testing"

This project uses [Jasmine](https://jasmine.github.io/) to test the functionality of a feed reader website.

### Instructions
To view the Feed Reader website, download all the files and open `index.html` in the browser of your choice.
Once loaded, test results should be displayed at the bottom of the page.

Alternatively, you can view the site on github pages by using the link below.
https://github.com/lizzie11212/Udacity_Feedreader_Testing.git

##  Tests That Were Implemented

* Tests for allfeeds has been defined and that it is not empty 
* Tests for allFeeds have a url and that the url is not empty
* Tests for allFeeds have a name and that the name is not empty 
* Searches for the class of 'menu-hidden' in the body tag and checks that the menu is hidden
* Toggles on click event if the menu appears or disappears
* Tests if the loadFeed function has at least a single '.entry' within the '.feed' container
* Tests to see if two entries are not equal

## Udacity Instructions

Excersize location: <a href="https://github.com/lizzie11212/Udacity_Feedreader_Testing.git">Click Here</a>

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included <a href="https://jasmine.github.io/">Jasmine</a> and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.