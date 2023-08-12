# Creating Library

ng new ngLibApp

- Generate Library via CLI:
````javascript
ng generate library my-util-lib
````
- Build the Library

Rebuilding an app using libraries
Before consuming the library, it must be build as an Angular library.
Here we will build the library for local usage so that we can use it within the same application.
After that we will re-build the library for global usage so that any angular application can use it.

````javascript
ng build my-util-lib
````

- The above  command will generate the library dist folder
````html
------------------------------------------------------------------------------
Built Angular Package
 - from: /Users/mahesh/Training/ngLibApp/ngLibApp/projects/my-util-lib
 - to:   /Users/mahesh/Training/ngLibApp/ngLibApp/dist/my-util-lib
------------------------------------------------------------------------------
````
- We can refer it by importing it in the app.module.ts and hence we can import its module

````javascript
import { MyUtilLibModule } from 'my-util-lib';
````


# Using the Library in the other project

- Copy the libratry build path from the dist folder which was generated when we build the loibrary, in out case its is as follows
````html
 /Users/mahesh/Training/ngLibApp/ngLibApp/dist/my-util-lib
````

- Now, create a new Angular application e.g.
````html
ng new ngNewClientForLib
````
- Navigate to the app project folder and install the library in this project using the following command

````html
npm install /Users/mahesh/Training/ngLibApp/ngLibApp/dist/my-util-lib

````

- Whern you run this client project that is using your library may crash and will give the error so, open the angular.json in the client project and add the following in in your angular app that depends on your local library, set 
projects.projectName.architect.build.options.preserveSymlinks = true 


in angular.json will prevent the angular cli from updating linked local library

- Now run the applciation, it will run 

- YOu can publish the Angular Library in production mode using the following command

ng build <library name> --prod
cd dist/<library name>
npm publish
