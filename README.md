# Some common usefull components for React App with TailwindCSS

## 1. Ripple Button

```
<Button
className="bg-blue-600 px-8 py-2 text-white mt-10 mr-auto" 
onClick={handleClick} 
> 
Ripple Button 
</Button> 
```
  
  You can pass the button styling properties as className.
  
## 2. Tabs
```
const list = [
  {
    name: "Tab 1",
  },
  {
    name: "Tab 2",
  },
  {
    name: "Tab 3",
  },
  {
    name: "Tab 4",
  },
];
const TabContainer = ({}) => {
  const [active, setActive] = React.useState("Tab 1"); //Initialize the active tab
  return (
    <div>
      <div className="flex justify-center w-full">
        <Tabs
          className=" flex bg-gray-100  w-full text-center justify-around uppercase text-sm font-medium text-gray-500"
          tabClasses="py-2 px-6"
          activeClasses=" text-primary-blue bg-white "
          active={active}
          borderClasses="border-b-4 rounded-t-full border-primary-blue"
          onChange={(e) => setActive(e)}
        >
          {list.map((el) => (
            <div key={el.name} className="flex pb-3 flex-col">
              <span className="">{el.name}</span>
            </div>
          ))}
        </Tabs>
      </div>
    </div>
  );
};
```
### Properties:
    active : Active tab name
    className : Classes for the entire tab container
    tabClasses : Classes for each tab
    activeClasses : Classes for active tab
    borderClasses : Classes for the bottom line for active tab    
    onChange : OnChange funtion; Pass the key of the tab as parameter

Please note that you should pass the unique tab name as key.

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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
