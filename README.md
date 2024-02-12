# Sae401

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## install project 
`npm i` or `npm install` 

## Add a new component

To add a new component, use the Angular CLI command:
ng g c NomDuComposant --skip-styles 

This command generates a new component without a stylesheet. Replace "ComponentName" with the name you want for your component.

## Adding a new service

To add a new service, use the Angular CLI command:

`ng g s NomDuService`
Replace "ServiceName" with the name you want for your service.


## some tailwind class 

| Tailwind CSS         | CSS                            |
|----------------------|--------------------------------|
| bg-red-300           | background: red;               |
| p-2                  | padding: 0.5rem;               |
| m-2                  | margin: 0.5rem;                |
| pt                   | padding-top;                   |
| pl                   | padding-left;                  |
| pr                   | padding-right;                 |
| pb                   | padding-bottom;                |
| text-red             | color: red;                    |
| text-sm              | font-size: 0.875rem;           |
| text-center          | text-align: center;            |
| flex                 | display: flex;                 |
| grid                 | display: grid;                 |
| grid-cols-4          | grid-template-columns: repeat(4, minmax(0, 1fr)); |
| content-center       | align-content: center;         |
| bg-gray-200          | background: #edf2f7;           |
| text-gray-600        | color: #4a5568;                |
| font-bold            | font-weight: bold;             |
| rounded-lg           | border-radius: 0.5rem;         |
| shadow-md            | box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); |
| hover:bg-gray-100    | background: #f7fafc;           |
| hover:text-gray-800  | color: #2d3748;                |
| transition           | transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform; transition-duration: 150ms; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); |
| focus:outline-none   | outline: none;                 |
| hover:shadow-lg      | box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); |
| flex-col             | flex-direction: column;        |
| items-center         | align-items: center;           |
| justify-center       | justify-content: center;       |
| mx-auto              | margin-left: auto; margin-right: auto; |
| max-w-xl             | max-width: 36rem;              |
| py-4                 | padding-top: 1rem; padding-bottom: 1rem; |
| px-6                 | padding-left: 1.5rem; padding-right: 1.5rem; |
| w-full               | width: 100%;                   |
| h-full               | height: 100%;                  |
| overflow-hidden      | overflow: hidden;              |

For more Tailwind CSS classes, refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs/installation).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
