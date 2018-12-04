# FlickrApi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.

Node: v10.14.1
NPM: 6.4.1

This project using:
- [ngx-masonry](https://github.com/gethinoakes/ngx-masonry);
- [ngx-infinite-scroll](https://github.com/orizens/ngx-infinite-scroll);

This project was based on mobile first using in angular 7 modular concepts ( core / pages (or modules)/ shared).

## Run roject
`npm i && ng serve`

## Project preview tasks

- ~~[task01] Architecture~~
- ~~[task02] Theme~~
- ~~[task03] Components~~
- ~~[task04] Api~~
- [task05] Optimization

## Next tasks

- [task06] Create Models
- [task07] Fix karma tests

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

## Reported Bugs
- Sometimes the masonry gets lost while rendering the photos;
- Flickr api sometimes not return some datas like photo or owner;
- The interceptor doesn't work because the crossdomain is not enabled.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
