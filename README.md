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

The fieldset was overflowing on the contact form and appearing on top of the footer.

Form is moving up and down on page, depending on the text content of the figcaptions. Height needed to be set to the figcaption element

Carousel indicator overlapping with figcaption elements. Solved by positioing ol and li items to bottom of their container element and styling the items.

Once nav bar was fixed, main content of page was scolling on top of the navbar. Found a solution to set the z-index (code credit in credits section). 
When seting the bg colour to the root decoration1, it looked like a different shade to other yellows on the page. Tried setting opacity but then scrolled content was visible behind the navbar. Decided to swap bg and text colours. BG color change to the red chosen color and test to the blue --decoration3 color.

[Back to table of contents](#table-of-contents)

### Bugs

### Performance and accessibility Testing

#### Lighthouse testing

#### Accessibility

### Code Validation

[Back to table of contents](#table-of-contents)

## Deployment

## Credits

### Media

#### Images Used

### Content

### Colours

### Code

### Acknowledgements
