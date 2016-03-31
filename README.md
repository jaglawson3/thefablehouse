# The Fable House

This application was built to demonstrate a proof of concept for an application that utilizes a choice based narrative scheme to engage both young children and their parents. Much like the paperback books of the 80s and 90s, this application provides children's stories that feature a shifting narrative based on a binary decision tree. Ultimately, it was meant to foster a collective experience for young kids and their parents. As 'screens' become more and more prevalent and ubiquitous in modern life, it seems imperative to explore ways to make those screen experiences collective and generate exchange between kids and their parents. Feel free to explore this project, it was built for an academic context.

The story provided under the link preview story is only partially built out. I created the scenes and vector illustrations. Obviously many improvements can and hopefully will be made to this in time. The deployed application can be found at www.thefablehouse.com

A JSON called story_tree.json is provided in the assets/images folder which is the substrate of the entire narrative. Left and Right options refer to the buttons and logic associated with the various choices available in the story. The animated svgs were created using Graphic and Animatron. The resulting mp4 files were then optimized for the web using Handbrake. This is a work of love for me. I made it for my daughter. I hope to continue adding features to it and developing the storylines to accommodate a more full narrative.

In the future, given the time, I would love to add a blue light filter so these stories could be read on a tablet at bedtime without being activating. It would also be interesting to explore different genres or lexile levels. Much of the styling on this was constrained by time and is not ideal, however the general idea is demonstrated.

Feel free to contact me if you have any questions at jaglawson3@gmail.com

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

The scaffolding for this project was created using the Yeoman angular-fullstack generator found at https://github.com/angular-fullstack/generator-angular-fullstack.git

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.
