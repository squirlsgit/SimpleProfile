## Notes on Purpose of App

This project is for me to test and demo some animations and ideas I brainstormed.
Inbetween work I'll be updating this project for a while.

## Install

ts-node: npm i -g ts-node
nodemon: npm i -g nodemon
make-runnable: npm i -g make-runnable


## requires recent version of node
tspath: npm i -g tspath 

## install 3.4+ version of typescript
typescript: npm i -g typescript@latest

herokuCLI https://devcenter.heroku.com/articles/heroku-cli


## getMaterialDesignFormat
URL: https://mcg.mbitson.com

## publish Json from MaterialDesignPalette File
## cd to root of project.
node tools/paletteToJson.js <Folder-Directory> <Base-Name> <Ouput-Path?>
## Output Path defaulted to Folder Directory + baseName + .json
## Output Path, if defined, should describe a relative path at the Folder Directory.

#  Use this Command if scss file is ./src/Palettes/palettes.scss | 
#  It will publish & overwrite palettes.json in that directory.
node tools/paletteToJson.js ./src/Palettes palettes

# Then update files that depend on palettes.scss and palettes.json ~~~~~


## Ico Converter

URL: https://icoconvert.com/
