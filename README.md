# Fun Space Quiz

Site MockUp to be inserted

This is a fun interactive site for kids to learn about space while playing a simple “travel through space game”. User can also view interesting Space related images and facts and send in their own facts or ask questions.
Primary goal of the site is to encourage kids to have fun while learning about space and solar system in a fun, interactive way.

## **To open any links in a new tab, please press Ctrl + click**

## Table of Contents

- [UX](#ux)
  - [External User Goals](#external-user-goals)
  - [Site Owner Goals](#site-owner-goals)
  - [Strategy and Scope](#strategy-and-scope)
  - [Structure](#structure-of-the-website)
  - [Wireframes](#wireframes)
  - [Surface](#surface)
    - [Colors](#colors)
    - [Typography](#typography)
    - [Images](#images)
    - [Features](#features)
- [Technologies](#technologies-used)
- [Testing](#testing)
  - [Functionality testing](#functionality-testing)
  - [Compatibility testing](#compatibility-testing)
  - [User stories testing](#user-stories-testing)
  - [Issues found during site development](#issues-during-development)
  - [Bugs](#bugs)
  - [Performance and Accessibility testing](#performance-and-accessibility-testing)
  - [Code Validation](#code-validation)
- [Deployment](#deployment)
- [Credits](#credits)

---

## UX

### External User goals

As a prospective user, I want to

- Play the game to reach the moon and other planets.
- View questions and answers about space/planets to learn more.
- Be able to see my score for the game.
- View images of planets and space.
- Be able to view the site on mobile/desktop/tablet.
- Be able to access all pages and navigate without confusion, without too many clicks.
- Submit questions.
- Learn more about space.

### Site Owner goals

#### As site owner I want

- To provide a fun, interactive site that is easy to navigate, and can be viewed on different screen sizes.
- The user to enjoy playing the game.
- Give some interesting facts and information on the subject.
- Provide form for users to ask a question or tell us what they know.

### Strategy and scope

Looking at both strategy and scope of the project, I referred back to the user stories, which helped in planning out the project.
On the strategy plane, I did research looking at basic games, quizzes and information relevant to the topic. I also did some research by asking children I know what they like about space. I identified what worked well and not so well from a UX perspective, including colours and how interesting or unusual information is for the user.
Colours and interesting inforFor my site, I listed out the opportunities/problems and how each of these might be addressed.
And for the scope plane, I planned out the content and functional requirements.

[strategy and scope tables](readme-assets/strategy-scope-plan.pdf)

### Structure of the website

The structure of the site is designed so that on landing on the site, the user can easily go straight
to the game or if they wish, can go to the learn more page, where they can view images/facts about Space and also contact the site owner. Easy to use nav bar to be included on game page and learn more page, from which the user can access the game, view the gallery images and contact the site owner.

[Structure Plan](readme-assets/structure-plane-plan.pdf)

### Wireframes

[Wireframe Mobile](readme-assets/spacegame-wireframe-mobile.pdf)
[Wireframe Tablet](readme-assets/spacegame-wireframe-tablet.pdf)
[Wireframe Desktop](readme-assets/spacegame-wireframe-desktop.pddf)
These were built using balsamiq.

### Surface

[Surface Plan](readme-assets/surface-plane-plan.pdf)

#### Colors

I plan to use bright colours to make a fun visual site.

- fee440
- 8ef9f3
- 00f5d4
- 395c6b
- d33f49

#### Typography

I plan to use Exo2 and Poppins fonts.

#### Images

I plan to use landing page full background image, with buttons over-laid, an image for the game area with a planet type icon for each point in the game.
There will also be a success image for when user finishes the game and a number of images for the lern more carousel.

[Back to table of contents](#table-of-contents)

## Features

The site consists of

**_Website has the following features_**

### Landing Page

containing the following:

- Button to select game play
- Button to go to learn more page
- Instructions for game play, which will be a pop up on smaller screens

### Navigation Menu

- Contains links to Game page, Learn More Page, which contains the gallery carousel and to the contact form, collpasible icon on smaller screens.

### Game Page

- navigation menu
- game play area
- Question and answer area
- success pop up

### Learn More Page

Contains two sections:

- Gallery Carousel, which will contain images and related information
- contact form, where the user can ask a question or send a fact/other information they want to share.

### Future Features

[Back to table of contents](#table-of-contents)

## Technologies Used

- HTML5 - Programming language for structuring the site.
- CSS3- Style sheet programming language
- [Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/) Use as a framework for layout and responsiveness.

emailjs.com
removebackground
tinyjpg
paint tool on lao#ptop windows
jshint

[Back to table of contents](#table-of-contents)

## Testing

### Functionality Testing

### Compatibility Testing

### User stories Testing

#### As a prospective user, I want to

#### As site owner I want to

[Back to table of contents](#table-of-contents)

### Issues during development

I used the bootstrap documentation code for the carousel.
I wanted text related to the image to appear under it but using the code exactly as it was in the documentation, did not give the user view on all screens as I wanted,
I tried a few different code snippets I found researching the topic but after trying a few different versions, I decided use the original bootstrap code
 but modify it. I decided to enclose the images with the figure tag and to use the figcaption tag for the text details.
 Img, figure and carousel controls were required to be styled to ensure text appeared beneath img, and ctrls to left/right, without overlap, and also appearing as expected on diff screen sizes.

The fieldset was overflowing on the contact form and appearing on top of the footer. Resolved once styling applied to container and the element itself.

Form is moving up and down on page, depending on the text content of the figcaptions. Height needed to be set to the figcaption element

Carousel indicator overlapping with figcaption elements. Solved by positioing ol and li items to bottom of their container element and styling the items.

Once nav bar was fixed, main content of page was scolling on top of the navbar. Found a solution to set the z-index (code credit in credits section).
When seting the bg colour to the root decoration1, it looked like a different shade to other yellows on the page. Tried setting opacity but then scrolled content was visible behind the navbar. Decided to swap bg and text colours. BG color change to the red chosen color and test to the blue --decoration3 color.

Form input boxes overflow fieldset on xs screen size. Reduced size of font on input boxes to resolve

When setting up the shuffle questions function, I tried to find a number of ways to do this, including sorting the quiz array. couldn't get anything to work.
When I was researching I came across the fisher yates algorithim method. I wouldn't get it to work but needed to spend more time understaning it.
Understood and set it up but was getting an issue in the console, where it was telling me .length on the array name wasn't defined. To resolve, I set a new array varaible and passed it in the quiz variable, as quiz variable held in another js file.

accessing correct answer in the array, tried few diff methods. Needed to set a hidden span, and change format of correct answer in the array

score not incremting, ok now.

add canvas element with star bg. add moon draw image and rockets as movers. First used lines to test. update coordiantes on rocket for spacing
Add earth img

notes for js game

 need to create array/container for answered questions
 need to stop user being able to answer same question. Bug: can keep answering same q and score keeps incrementing
 <!-- function to limit number of questions in game -->

changed colors used color pciker in wave extension and [this site](https://www.colorcombos.com/combolibrary.html)
[Back to table of contents](#table-of-contents)

### Bugs

Images did not initially display on the deployed site. For the carousel images, I needed to remove the / before the file path and for the bg images on game and landing pages, I need to change the relative path to "../images" instead of "/assets/images". These changes resolved the issue on the live site.

set focus in doc ready, was telling that wrg ans q was last. reoder, run game after focus

fixed: If user gets first question wrong, get game over message as score is still at 0. added another confition to the if else statement to do nothing when score is 0.

set up reset btns, set d-hide modal triggers but then wrg answer next w doesn't work. needed on click to be added to button with id of wrgAnsFocus. fixed.

footer floating up on lg screens per dev tools
Added empty div, and set height, which keeps footer down but may need to increase game area size for leg scrrens. had added a media query but then removed it and te4sted live site. Media q and spacin div not needed on live site. dev tools issue

BUT CANVAS DRAW ELEMENTS NOT SHOWING ON LIVE SITE...FILE PATH. fixed

LIVE SITE: NO SPACING ISSUES ON AMI.RESPONSIVE BUT ARE ON TECHSINI.COM???? apple devices???  GAME PG ONLY

favicon and canvas imgs file paths

New game, not refreshing first question. needed to reoder function calls in the reset Javascript fn

media q for fig captions and carousel indictors on xs smal screens, also hiude h1 heading on small screens

email js and validation causing a 501 error. removed submit fn frrom js file, re-arranged order in email.js, send email fn first. fixed issue
To check on live site as it was causing a 405 issues there..

jsHint /*jshint esversion:6*/ added to top of js file, removed warnings. found anser on slack.
'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
jshint getting message about the jquery variable. found solution on [stackoverflow](https://stackoverflow.com/questions/8852765/).... declares to JSHint that $ is a global variable, and the false indicates that it should not be overridden.

jshint: talling my QuizData bot defined. this is the array of questions held in questions.js
Solution on [this site](https://medium.com/recraftrelic/es5-vs-es6-with-example-code-9901fa0136fc). set up import/export on the 2 js files.
But this then caused an issue where message, Uncaught SyntaxError: Cannot use import statement outside a module". Solution to that on stackover flow post
solution was to give js files type of module. Removed that issue but next issue then related to the onlcik events in the html file for next q.site not displaying a next q when that onclick removed from modal button. Still works when main new q button selected. Needed to add Event listeners for next q buttons on wrg answer and correct answer modals

corrected initial; validation errorsL now issues with footer too mig and no txt on learn pg, game page, text under footer and also text wrg color*
pk, was styles for 404 pg over writing corrected now

jshint gives me a msg that emailjs is not defined. However if I do define it, it causes a 501 error or 405 error on live site. Removed the declaration.

### Performance and accessibility Testing

#### Lighthouse testing

#### Accessibility

### Code Validation

[Back to table of contents](#table-of-contents)

## Deployment

The project was deployed to GitHub pages using the following steps:

1. Log into GitHub and select the repo.
2. Go to settings
3. Select Pages from vertical menu on left
4. On Source, select Master Branch and click save.
5. Website is now live and the URL will be displayed. [Link to live site](https://lisahackett97.github.io/fun-space-quiz/)
6. When updates are commited and pushed to GitHub, live site will be updated.

To download and run locally, follow the below steps:

1. Log into GitHub and select the repository, fun-space-quiz
2. Select Code
3. Click Download Zip
4. Once files have downloaded, you can extract and useclone-project.png locally.

Select this file for screenshot [Run Locally]

To Clone, follow the below steps:

1. Log into GitHub and select the repository, fun-space-quiz
2. Select Code
3. Click https and copy the link
4. Open git bash
5. Change the working directory to where you want the cloned directory
6. Use command git clone and the copied URL
7. Press ente

Select this file for screenshot [Clone repo]

Forking the repository:

1. Log into GitHub and select the repository, MS1-Dog-Daycare
2. Select Fork on top right hand corner.
3. A copy should be created in your github profile and pull requests submitted.

GitHub docs link [Forking a repository](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop#forking-a-repository/)

## Credits

z-index
Credit: solution to my issue with navbar and content z-indez was found on [Freecodecamp.org](https://forum.freecodecamp.org/t/why-is-my-navbar-behind-other-content/62059)

add credit in re fisher yates code

// code on how to set focus to nextq button on modal, found on stackoverflow

favicons.io

webkits Prefixed by [autoprefixer](https://autoprefixer.github.io)

<!-- wrapper around main body section in order to apply stick footer styles
  code for sticky footer https://css-tricks.com/couple-takes-sticky-footer/
 -->

### Media

#### Images Used

Images are credited as followins:

unsplash.com

-carousel-pluto
-carousel-saturn  
-carousel-neptune
-carousel-venus
-carousel-mars
-carousel-mercury
-carousel-uranus
-carousel-jupiter
-carousel-the-sun
-carousel-diamonds
-404-bg
-game-stars

Pexels.com

-landing-stars
-carousel-galaxy

raw-pixel.com (public domain imgs)

-carousel-earth

vecteezy.com/free-vector/

-game images: Earth, moon and rocket (with rocket img being adjusted with windows paint tool for the done icon)
-landing-rocket
-landing-astronaut

shutterstock.com standard licence

-carousel-asteroid-dino

### Content

- content from quiz on the following site, with some additional quiz content take from the 2nd site
  funtrivia.com
  kidsworldfun.com

- content for carousel on learn more page
planetsforkids.org
parenting.firstcry.com/articles/20-must-know-facts-about-space-for-kids/
space-facts.com/planets/
esa.int

### Colours

### Code

### Acknowledgements
