# LandgateUiTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.  Please follow the Angular Cli link on how to setup and install the required dependencies.  

This test project is designed to help us understand your level of web development skills with Angular, NGRX, HTML, CSS, TypeScript, and Javascript. This project is not meant for you to take many hours to complete.  You are however free to spend as much time as you would like completing it. The suggested time to spend is between two and three hours.

### General Instructions

It is advised that you read through all the various parts to understand the overall scope and expectations of this project. The instructions are separated into two parts. You will find the generalized expectations in this ReadMe below. 
You will also find throughout the HTML and Angular code suggested implementation points (these will be noted by a // TODO: with instructions).      

### Part 1 - HTML and CSS
We have created a basic home page layout with a header, footer, and content section. Use whatever techniques and libraries you are familiar with to style the home page. Think mobile first when applying your styles. Included in the project configuration is Bootstrap however feel free to use the styling approach of your choice.  

#### Steps to complete:
- Make the header component a navigation bar with links that shrinks to a menu button in mobile view.

- Make the content section text horizontally and vertically aligned as well as styled white in color.

- Make the footer component a responsive 3 column layout.


### Part 2 - Angular / TypeScript / NGRX
Within the Header component there is a placeholder for a link to a People Component.  There is a skeleton of that component included in the repository.  

#### Steps to complete:
- Create a new route in app-routing.module.ts to the people component **or** use people-ngrx (see below for bonus details on using people-ngrx)
- Look inside the people(-ngrx) html and people(-ngrx) component.ts for instructions on what to implement.
- PersonModel needs completion
- people.service.ts needs completion
- If you choose to implement using people-ngrx the actions / effects / reducer / selectors need completion.

### Part 3 Bonus:
This is the bonus section for individuals who want the make the best impression.  The below is purposely vague to give you a chance to shine and standout among the crowd.
 
  HTML and CSS
  
  - Apply a good web font
  - Colorize footer
  - Add custom section to home page (use your imagination)
  
  Angular / TypeScript / NGRX
  
  - People / People-Ngrx have the same implementation requirements except People-Nrgx uses the Ngrx Store as a data mechanism.
    There is inside of the people-ngrx folder a skeleton of a people feature with actions / selectors / effects and reducer.  
    LandGate uses NGRX for state management.  Being able to complete the People-Ngrx will be looked on quite favorably.


## Simple Setup

Run `npm install`
      
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
