#Type Sript First Module
##Install 

npx create-react-app folder/app-name template typescript

### Set types (Primiteve) string, boolean, number
-string
const name:string = 'Tahmid'; ok
const name:string = Tahmid; Wrong
const name:string = 35; Wrong

-number
const age:number = 35; ok
const age:number = '35'; Wrong
const age:number = 'Tahmid'; Wrong

-Boolean 
const isSmart : boolean = true; ok
const isSmart:boolean = 'true'; Wrong
const isSmart:boolean = '0'; Wrong
const isSmart:boolean = 0; ok [Note: 1 and 0 refer true and false]

## Set type (Non-Primitive) Array, Object
-Array 
const students:string[] = ['Tahmid', 'Saohel' 'Bravo', 'Omar']; Ok - all are the elements of this array is string.
const marks:string[] = [343, 54, 24, 56, 657]; Wrong - all are the elements of this array is number.
const students:number[] = ['Tahmid', 'Saohel' 'Bravo', 'Omar']; Wrong - all are the elements of this array is string.
const marks:number[] = [343, 54, 24, 56, 657]; Ok - all are the elements of this array is number.

-Object
const person:{propertyNmae:type like - name:string, age: number, isMale: true} = {
    name: 'Tahmid', ok
    age: 35, ok
    isMale: true, ok
}

We can use an interface for the above oject type

## interface Declaration for an object
interface Persone(interface name wii be capital letter) {
    property:type,
    -------------
    name: string,
    age: number,
    isMale: true
}

## Using interface on the object
const person:Person(interfacename) = {
    name: 'Tahmid', ok
    age: 35, ok
    isMale: true, ok
}

## Some notes:
-If an prperty is exist on the interface but not existing on the main object
we can put an optional chaining sign on that property-- like isMarried property

interface Persone(interface name wii be capital letter) {
    property:type,
    -------------
    name: string,
    age: number,
    isMale: true,
    isMarried?: true
}

-If an prperty is number or string or boolean on the main object
we can put an | (or sign/single bar above the shift key) withing the two types like below
```
**interface Persone(interface name wii be capital letter) {
    property:type,
    -------------
    name: string | number,
    age: number | string,
    isMale: true,
    isMarried?: boolean | string
}**
```

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
