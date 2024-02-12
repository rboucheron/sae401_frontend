# Sae401

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## install project 
`npm i` or `npm install` 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

<<<<<<< Updated upstream
=======
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
>>>>>>> Stashed changes

## Add a new component

To add a new component, use the Angular CLI command:
`ng g c NomDuComposant --skip-styles`

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
| pt                   | padding-top;                   |
| pl                   | padding-left;                  |
| pr                   | padding-right;                 |
| pb                   | padding-bottom;                |
| m-2                  | margin: 0.5rem;                |
| mt                   | margin-top;                    |
| ml                   | margin-left;                   |
| mr                   | margin-right;                  |
| mb                   | margin-bottom;                 |
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
| w-1/2                | width: 50%;                    |
| h-full               | height: 100%;                  |
| h-1/2                | height: 50%;                   |
| overflow-hidden      | overflow: hidden;              |

For more Tailwind CSS classes, refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs/installation).

## API call 

To call the API in your service, use the following TypeScript code:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubLoginService {
  apiUrl: string = 'https://api.github.com/users/';

  constructor(private http: HttpClient) {}

  public getUserGitHubInfo(userName: string): Observable<any> {
    const apiUrlWithUsername = `${this.apiUrl}${userName}`;
    return this.http.get(apiUrlWithUsername);
  }
}


