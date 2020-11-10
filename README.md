# MR Frontend Developer Technical Test

## Tasks 

**Create a responsive web page made up of 5 main components:**

- Nav Bar roughly 70% -80% width with dynamic My Cart counter  
- Image (2 main flex boxes with image on left side and centered)
- Title / price (bold with barely visible horizontal lines spaced above and below) / lorem ipsum description in lighter font.
- Size selectors / Add to cart button
- Mini cart which extends from Nav bar

**Mobile key differences**

- Full width NavBar / only cart icon and number
- Ordering, Image , Title, Price (no horizontal lines), description, Size and button (left side )


## Technology

- I will use **Create-React-App** for quick implementation and easy ability to deploy if time permits.
- **React** 
- **JS**
- pure **CSS** styling for symplicity

Design Prototype

Desktop: https://invis.io/WEAP5MIGX

Mobile: https://invis.io/ASAP5RSBD

There are multiple screens of each prototype, you can view all the screen by clicking the grid icon at bottom right
You can interact with the prototype by clicking/hovering certain areas of the prototype. This gives you some idea of how we expect the page to work. More details are in the requirements section below.
Colour Schemes:

Header background: #F6F6F7

Font colour:  #222222 and #888888

Required star *: #C90000

Border light grey: #CCCCCC

Border dark grey #222222

Classic Tee jpg: https://drive.google.com/file/d/0B8KYnbdnrRGXSXVoMzdqRWhCTXc/view?usp=sharing

Requirements

Implement a web page based on the design prototype, you do NOT have to be “pixel perfect”. But we would recommend trying to meet 90% of the design at the same same screen size.
Responsive web design. The site needs to fit to the different size of the user’s screen. Only large desktop and mobile design are provided. You need to fill in the blank on what the page looks like in between.
Add to Cart section (main body of the page)

When page first loaded there is no size selected. (desktop screen 1, mobile screen 1)
Selected size is shown next to the size label, tile is highlighted as shown in the prototype (desktop screen 4, mobile screen 3).
Add to Cart button on hover colour changes, apply a 0.2 second transition to animate this (desktop screen 3)
Mini Cart section (top right)

On desktop, Mini Cart is shown when mouse hovering over “My Cart”. On mobile devices, Mini Cart is shown when the user taps “My Cart” (desktop screen 2, mobile screen 2)
If you are not doing the optional task below, implement the Mini Cart content same as what is in the design prototype. On the other hand if you are implementing the add to cart JS, the user should start with an empty Mini Cart.
Optional Task: JavaScript add to cart functionality
Add to cart functionality

JavaScript to do an add to cart functionality, product with the options selected is added to the Mini Cart Section
Clicking Add to Cart without size selected will show an error message (include screen number here)
Successfully adding a product to cart, with a size option selected, will populate this product in the mini cart section.
There should only be one row of the same size product, product quantity in minicart increases as the same size product is added multiple times.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
