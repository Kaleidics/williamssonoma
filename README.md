# [Williams Sonoma Code Test](https://wscodetest.netlify.com/)

Eddie Chu

This is the repo for the Williams Sonoma code test.

Deployed live website at [Williams Sonoma Code Test](https://wscodetest.netlify.com/)

# Accomplishments
- Reads JSON data from the downloaded seed file. Was not able to fetch from client, blocked by CORS and
  also blocked by 403 Forbidden when using a Node server to proxy
- Displays each product with hero image, name, flags (with custom icons), special message, price
- Carousel is an overlay and you can cycle through the images, both by arrows and by the button navigation
- Mobile first design
- Responsive from width: 320px up to 1920px. Responsive one column to three column layout.
- Basic SEO HTML `head` metadata
- Accessibility: tab indexing, `alt` tag, `aria-label` tag, `role`
- 100s on Google Lighthouse Audit: [Report](https://i.gyazo.com/27047fe1f8be7c0bc7f195c9e5284581.png)
# Technology
The code test uses the following:

- HTML5
- CSS, SASS, no style frameworks used
- JavaScript, ES6
- React
- Enzyme for tests

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

What things you need to install the software and how to install them

- [npm](https://www.npmjs.com/get-npm)


### Installing

1. Clone or fork the repo

```
git clone https://github.com/Kaleidics/williamssonoma.git
```

2. Navigate to project directory. Run `npm install` in terminal inside the project root directory

```
npm install
```
3. Run `npm start` to start the application.
```
npm start
```

4. To run the rests for the code test, make you are in the root directory of the folder. Run `npm test` in the terminal.

```
npm test
```


Eddie Chu - [eddiechu.dev](https://www.eddiechu.dev/)
