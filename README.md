lo-fi-deck
==========

> Quick and dirty way to make a presentation of sorts for developers.



## Dependencies
The required dependencies and known working versions for this project.

- [node](http://nodejs.org/) @0.12.3
- [npm](https://www.npmjs.com/) @2.10.0 ( packaged with node install )
- [grunt](http://gruntjs.com/) @~0.4.5
- [middleman](http://middlemanapp.com/) @~>3.3.12
- [sass](http://sass-lang.com/install) @3.4.13
- [compass](http://compass-style.org/) @1.0.3
- [properjs](https://github.com/ProperJS/) @~0.1



## Installation
Install all global project dependencies. This list denotes starting from a blank slate. First install [node](http://nodejs.org/download/) for your machine. Node will install with npm.
```shell
npm install -g grunt-cli

npm install -g properjs-cli

gem install middleman

gem install compass

gem install sass
```



## Getting Started
Install all local project dependencies via the `package.json` file.
```shell
npm install

properjs

grunt watch
```



## Development

### Run the Server
Run the local server using middleman.
```shell
middleman server
```

### Making Slides
The Javascript is built to run a simple in-browser slide deck. Base styles are in `source/stylesheets` and Javascript is in `source/javascripts`. Your template is located at `source/index.html.erb` and it has a few dummy slides to get you started. Just have fun :)