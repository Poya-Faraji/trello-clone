## trello-clone

This readme file is my notes and a walkthrough on how I built a react trell-clone without using any AI just to improve my `react` and web development skills.

The goal of this challenge is to learn `react` in way that excels current job market's peak development standards.

If there are some typing issues, note that I haven't used any AI not even a grammer check to show my **dedication** and hard work. But as usual, I am gonna improve it, so feel free to have a pull request or submit an issue if you manage to spot anything.

And before diving in I know the `kanban` is the correct term, but I used canban `logo.svg` and `c` favicon, so I stick to them.

You can see the project [live](https://trello-clone-en2tph0dx-poya-farajis-projects.vercel.app/) live [here](https://trello-clone-en2tph0dx-poya-farajis-projects.vercel.app/)

Project demo soon will be available and deployed on vercel...

### Tech used:

- npm
- vite
- typescript
- react
- prettier
- eslint
- clsx
- toastify
- react-router
- react-hook-form
- react-error-boundary
- immer
- zod
- zustand
- dndkit

### Environment tech

- git
- github
- vscode
- bash
- firefox
- chrome

# Getting started

Lets create the project starting with `npm` and `vite`.

```bash
npm create vite@latest
```

- then chose TypeScript
  **Vite does most of the optimizations**

1. Clear files set icons check public folder clear readme.md and ...

2. after you had your project basics and configs and on then you must proceed to next

3. useful and must install setup for easier development is installing prettier

```bash
npm i -D ptrettier
```

4. Setting an import alias to avoid ../../.
   1. First go the `tsconfig.app.json` file then

   2. Then add below configs into `compilerOptions`

   ```bash
        "baseUrl": ".",
        "paths": { "@/*": ["./src/*"] }
   ```

   3. make sure it is inside the`compilerOptions` and not something else

- This is config was for TypeScript to understand what is going on and this one is for vite to use these configs

5. Go inside `vite.config.js` and then
   1. After react(),

   2. import these

   ```javascript
    // above here make sure you import path from node
    import path from "node:path"

     resolve: {
   alias: {
     "@": path.resolve(__dirname, "./src"),
   }
   }
   ```

   the entire code should look like something similar to this :

   ```js
   import react from "@vitejs/plugin-react";
   import { defineConfig } from "vite";

   import path from "node:path";

   // https://vite.dev/config/
   export default defineConfig({
     plugins: [react()],
     resolve: {
       alias: {
         "@": path.resolve(__dirname, "./src"),
       },
     },
   });
   ```

   3. In order for TypeScript to recognize your node types you should install and configure it as dev dependencies to that

   ```bash
   npm i -D @types/node
   ```

   4. now whenever you write "@" this means you mention directory 'src'

6. There is an optional library for sorting your import if you prefer you can use this as well
   helps with the clean code

```bash
npm i -D @trivago/prettier-plugin-sort-imports
```

7. In the main directory we create file named `.prettierrc.json` and inside it enter

```json
{
  "plugins": ["@trivago/prettier-plugin-sort-imports"],
  "importOrder": [
    "^(vite|@vitejs)(/(.*))?$",
    "^(react|react-dom)(/(.*))?$",
    "^react-router(/(.*))?$",
    "^react-error-boundary(/(.*))?$",
    "^(immer|use-immer)(/(.*))?$",
    "^zustand(/(.*))?$",
    "^@tanstack(/(.*))?$",
    "^@dnd-kit(/(.*))?$",
    "^react-toastify(/(.*))?$",
    "^(react-hook-form|@hookform/resolvers|zod)(/(.*))?$",
    "^clsx(/(.*))?$",
    "<THIRD_PARTY_MODULES>",
    "^@/api",
    "^@/components",
    "^@/context",
    "^@/data",
    "^@/dto",
    "^@/hooks",
    "^@/icons",
    "^@/layouts",
    "^@/modals",
    "^@/pages",
    "^@/providers",
    "^@/reducers",
    "^@/schemas",
    "^@/stores",
    "^@/types",
    "^@/utils",
    "^@/styles",
    "^(\\.|\\.\\.)/(.(?!.css))*$",
    "\\.css$"
  ],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true,
  "importOrderGroupNamespaceSpecifiers": true
}
```

### **Note** that @ here are import aliases.

- Make sure, to run this command before you commit to GitHub.

```bash
npx prettier . --write
```

- My prettier in vscode doesn't seem to format with the configs for some reason I will be using the command before I commit.

8. Next is eslint configs inside `eslint.config.js` file
   1. just add this global after `defineConfig`

```javascript
export default defineConfig([
  globalIgnores(["dist"]),
  {
    // some configs exist by default here don't touch these..
  },
  // Add this object
  {
    rules: {
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-member-accessibility": "error",
    },
  },
]);
```

I love these configs

---

### Returning tsx

As you know JavaScript doesn't let your return multiple values it only allows 1, or you can return wrapped in array

- Few notes
  - make sure inside tsx close all the tags
  - make sure self-closing tags are self-closed
  - attributes for elements are camelCase
  - You can import Fragment to use it in return os simply use <></> this is equivalent of the returning by wrapping with array
  - class is reserved use className
  - htmlFor instead of for
  - {} helps us to use JavaScript inside HTML (I don't like saying this because we are using JavaScript there is no HTML in there...)

  - you can't use object directly in there
  - we will use maps for loops in react.

You can use expression not statement in JavaScript.

### Ternary and how to return conditional in react

```javascript
{
  conidtion ? "if true returns this" : "else returns this";
}
```

Another way is to use `&&`

```javascript
condition && "result we want to return";
```

If you are wondering how this works if condition is false it will return false which will not be rendered in the DOM. but if the first value which is the condition is true it will continue and returns the last value if it is truthy value.

### How to return multilines:

```javascript
{
  names.lenght === 0 ? (
    <div>No one is here...</div>
  ) : (
    names.map((name) => <p>{name}</p>)
  );
}
```

Why we used parentheses here because it is multilined and not single line.

### You can put tsx even looped tsx inside JS values

The below example

```javascript
const name = ["Me", "Myself", "I"]
const empty = <div>No one is here...</div>
const filled = name.map((name) => <div>Hello {name}</div>)

  return (
    <>
      {
        name.length === 0 ? (
          empty
        ) : (
          filled
        )
      }
    </>
  );
}
```

Or you can just use this:

```javascript
return name.length === 0 ? empty : filled;
```

Or you can just use regular JavaScript if statement:

```javascript
if (name.length === 0) {
  return empty;
} else {
  return filled;
}
```

### Babel

Is a convertor of tsx to regular JavaScript
so look at JavaScript as

### Types

- tsx.Element : tsx Element ⇒ tsx is library that react uses
- ReactElement : this represents tsx.Element react calls a tsx.Element React element

- The main difference between them is ReactElement gives information about
  props give us information on type props and key

- ReactNode: It is whatever react can render can be ReactElement, string number bigint
  Iterable<ReactNode> ReactPortal boolean, null, undefined.

- For react objects you can return ReactElement | ReactElement[] or simply return react node ReactNode.

### Why we don't use document

- For security don't fucking use you might cause xss.
- Or your changes can be removed or rewritten by react
- Or this can break the working cycle of React

### What are callback functions

Call back functions are a function that can be passed inside the different function and their return value is used such as

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

function filterFunc(array: number[], callback: (x: number) => boolean) {
  const result: number[] = [];

  for (const x of array) {
    if (callback(x) === true) {
      result.push(x);
    }
  }
}
function callbacl(x: number): boolean {
  return x % 2 === 0;
}

// this is same as sayihng
const eveneNumbers = number.filter((x) => x % 2 === 0);
```

- Best practice try to separate the function from the onClick for later performance issues and use case of useCallback

- Use arrow functions always and this is the convention

- How to name function of handleButtonClick.

### Events

Events in React are not browser specific events, react changes them for its own reason and because of this it has its own types.

- Note:
  you can remove type from here
  make sure to import types from React and not the TypeScript itself
  because vscode or other editors might get confused

- Make it easier to access and use them

```javascript
import type { MouseEvent, ReactNode } from "react";
import "./App.css";

function App(): ReactNode {
  const allNumbers = [1, 2, 3, 4, 5];

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    console.log(allNumbers);
  };

  return <button onClick={handleButtonClick}>Hello</button>;
}
export default App;
```

### UseState and closure

In JavaScript, we can pass functions inside another function which their values are accessible from outside

like in this case `count` will be updated, but it will not be updated in the DOM because react only renders it once if the strict mode is not enabled. But we can see it in console it will go up this is why it is important for us to have a good understanding of closure.

Now you are manipulating this value in the memory react is not fetching it from memory it has no concept of its existence.

So Problems we are having:

1. Changes to Local variables won't trigger renders or rerenders (code into updating DOM)
2. Local variables don't persist between renders

In order to solve these problems we will utilize useState
any function that start with use ⇒ is a known as hook

### useState syntax

```javascript
const [count, setCount] = useState(0);
// above code is same as setting the values to
const result = useState(0);
const count = result[0];
const setCount = result[1];
```

Convention is to write the first one.

- Why setVariable name and not the so you don't change the variable without react knowing it.
  Our end code should look like this

```javascript
const [count, setCount] = useState(0);

const handleButtonClick = (): void => {
  setCount(count + 1);
  console.log(count);
};

return (
  <div>
    <p>Current count is : {count}</p>
    <button onClick={handleButtonClick}>Increment</button>
  </div>
);
```

- What if we use multiple useSates how can react tell their difference ? Short answer is they are unique based on the line they are in. And since useSate is imported from React will know the difference can keep track of the value and rerender on change.

- This can be used when we want to read something from URL, cookies, calculation random number generation or calculation based on that.

- Few keynotes:
  1.  useState() will only be called once and initial value will always be set just once
  2.  we can do something like this

  ```javascript
  cosnt[(count, setCount)] = useState(() => {
    console.log("here");
    return Math.floor(Math.random() * 100);
    //return 0
  });
  ```

  3. This will return zero and helpful when we wanna use it in localStorage or calculate initial value

### setValue or setter in useSate conventions

1. First of all react will wait until all the events and call back function to do their job, and it will only render the final result if you more than 1 useState it will wait until all of them are done then it will rerender the final value.

2. It is always suggested to path a callback function to useState. like so

```javascript
setCount((count) => count + 1);
```

3. This will benefit us in the long run. and if we have multiple functions that are using setCount this will affect them.

### Object and Array as State

Don't use this is not good or the right way to do so:

```javascript
function App(): ReactNode {
  const [user, setUser] = useState({
    username: "BijanProgrammer",
    password: "1234",
  });

  const handleButtonClick = (): void => {
    user.password = "";
  };

  return (
    <div>
      <pre>{JSON.stringify(user)}</pre>
      <button onClick={handleButtonClick}>Change</button>
    </div>
  );
}
```

Instead of that use this syntax :

```javascript
const [user, setUser] = useState({
  username: "BijanProgrammer",
  password: "1234",
});

const handleButtonClick = (): void => {
  setUser({
    ...user,
    password: "9999999",
  });
};
```

### Genric

In react `useState` is Generic type you can set custom type out of the function for it

```javascript
type User = {
  username: string,
  password: string
}

function App(): ReactNode {
  const [user, setUser] = useState<Readonly<User>>({
    username: "BijanProgrammer",
    password: "1234"
  });

  const handleButtonClick = (): void => {
    user.password = ""  // Readonly won't allow you to set this
    setUser({
      ...user,
      password: "9999999"
    })
  }
```

- This is used for objects and arrays and not used for number or string because we set const on them when declaring.

### Arrays

Starting with bad practice and this will not work and it is not recommended

```javascript
const [numbers, setNumbers] = useState<number[]>([1,2,3,4,5,6,7,8,9])
const handleButtonClick = () => {
  setNumber((prev)=> {
    prev.push(1)
    return prev;
  })
}
```

Even though we changed this value and pushed it inside numbers array
react will use something like Object.is(numbers, prev) which returns true because. Because this is immutable. And we are referring to same reference.
So this won't change.

so you have to make a copy first

**The correct way**:

```javascript
const [numbers, setNumbers] = useState<number[]>([1,2,3,4,5,6,7,8,9])
const handleButtonClick = () => {
  setNumber((prev)=> {
    // manual copy
    const newNumbers = [...prev]
    newNumbers.push(1)
    return newNumbers;
  })
}
```

So we create a new reference and new value in the memory.

**The best way period**:

```javascript
const [numbers, setNumbers] = useState<number[]>([1,2,3,4,5,6,7,8,9])
const handleButtonClick = () => {
  setNumber(prev => [...prev, 20]) // 20 is the newValue we want to add
```

**IRL use case**:

```javascript
function App(): ReactNode {
  const [numbers, setNumbers] = useState<number[]>([1,2,3,4,5,6]);

  const handleButtonClick = (): void => {
    // this is for adding
    setNumbers(prev => [...prev, 99])
    // removing one
    setNumbers(prev => prev.filter((x) => x !== 1))
    // removing specific index
    // to use this tsconfig lib you must change it to ES2024 from ES2022
    // for me logic worked by typescript was yelling at me
    setNumbers((perv) => perv.toSpliced(4, 1))
}

  return (
    <div>
      <pre>{JSON.stringify(numbers)}</pre>
      <button onClick={handleButtonClick}>Change</button>
    </div>
  );
}
```

Any array method that creates new array is usable this way like `map, filter, flatMap, sort, splice, toSpliced, with` and ...

### Components

- Components are functions.
- Component return ReactNode which are renderable.
- Components are declared using PascalCase.
- Component can have props.
- Components are customizable html elements
- Components are reusable multiple times like functions
- Hooks can be used only inside (components and inside other hooks)
- Calling multiple components means they create new closure and lexical environments which means they can't affect each other.
- Just like functions.

**conventions about components**

- create dedicated folder for components kebab-case
- operate component and their styles into different components PascalCase
- convention for react naming conventions are files must be PascalCase. ( In interview use PascalCase )
- Inside components file use export default functions and always export 1 function from inside the function.
- You can use a different folder structure and learn about them but above is the main standard

### Styling

.css you can use nested styling

### props stands for properties

in TypeScript, we must set props types which.
props are always objects
**for defining types we use PascalCase**
like so

```javascript
type Props = {
  title: string,
};
```

## Using props

This is the convention:

```javascript
type Props = {
  title: string,
};

export function Counter({ title }: Props): ReactNode {
  const [count, setCount] = useState(0);

  const handleButtonClick = (): void => {
    setCount((perv) => perv + 1);
  };
  return (
    <div className="counter">
      <p>Title: {title}</p>
      <p>count: {count}</p>
      <button onClick={handleButtonClick}>Incerement</button>
    </div>
  );
}
```

What you don't do is you don't declare Props type inside function next to prop it reduces readability

Always try to destructure props before using it. If it is not many values.

### Creating a switch theme component

```javascript
import { useState, type ReactNode } from "react";
type Theme = "light" | "dark";

const ThemeSwticher = (): ReactNode => {
  const [theme, setTheme] = useState < Theme > "light";

  const handleThemeButtonClick = (): void => {
    setTheme((perv) => (perv === "dark" ? "light" : "dark"));
  };

  return (
    <div>
      <p>{theme}</p>
      <button onClick={handleThemeButtonClick}>Toggle Theme</button>
    </div>
  );
};
export default ThemeSwticher;
```

### Lifting state up

We want to be able to change the neighbor or sibling elements theme based,
but in react data flow is from parent to child from up to down 1 way data flow
So in order to do this we need to lift the state to the App.tsx

How we can accomplish this:

- If we want to pass a set state

1. Step one cut the state and move it to parent

```javascript
export type Theme = "light" | "dark";
// inside func/App()
const [theme, setTheme] = useState < Theme > "light";
```

2. Export Type or use it in different directory and file for better usability clean code and readability

3. If you hover over `setTheme` in App.tsx you will see this TypeScript type

```
React.Dispatch<React.SetStateAction<Theme>>
```

as you can see the setter/setThem of useState is not a simple function type

4. We need to recieve this from App.tsx in ThemeSwticher.tsx as a prop so we should create a type for it first:

```javascript
type Props = {
  theme: Theme,
  setTheme: (value: Theme) => void,
};
```

5. Instead of this we use this so our setter could work.

```javascript
type Props = {
  theme: Theme,
  setTheme: React.Dispatch<React.SetStateAction<Theme>>,
};
```

Note there is `React.` here we need to remove that so we could import them separately:

```javascript
import type { Theme } from "@/App";
import type { Dispatch, ReactNode, SetStateAction } from "react";

type Props = {
  theme: Theme,
  setTheme: Dispatch<SetStateAction<Theme>>,
};
```

Props can be anything it can be normal value or a function can be ReactElement or ReactNode as well.

6. Now our SwitchTheme is the same But we need to change the App.tsx

```javascript
<ThemeSwticher theme={theme} setTheme={setTheme} />
```

As you can tell this is not a good practice because ThemeSwitcher needs setTheme props
always which reduces reusability it gives it more access to change state even out of the frame we design it to change so we need to create helper function

7. **We need to create an interface/helper function to limit the access**
   And be able to use only 1 function from many components so we move the logic to the App.js as well.

```javascript
const toggleTheme = (): void => {
  setTheme((perv) => (perv === "dark" ? "light" : "dark")); //** this line **
};
// return this for render:
<ThemeSwticher theme={theme} toggleTheme={toggleTheme} />;
```

We moved/cut this line from `ThemeSwitcher.tsx` to `App.tsx`

8. Now edit you ThemSwitcher to look like this

```javascript
import type { Theme } from "@/App";
import type { ReactNode } from "react";

type Props = {
  theme: Theme,
  toggleTheme: () => void,
};

const ThemeSwticher = ({ theme, toggleTheme }: Props): ReactNode => {
  const handleThemeButtonClick = (): void => {
    toggleTheme();
  };
  return (
    <div>
      <p>{theme}</p>
      <button onClick={handleThemeButtonClick}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwticher;
```

9. Important thing is when we have a prop, and we pass it as a function to manipulate events
   we use a onCamelCase as convention. You can use onClick as well and interface function is going to be treated as handler so edit `App.tsx` as

```javascript
const handleOnThemeToggle = (): void => {
  setTheme((perv) => (perv === "dark" ? "light" : "dark"));
};

return <ThemeSwticher theme={theme} onToggle={handleOnThemeToggle} />;
```

and `ThemeSwtiche.tsx` to be:

```javascript
import type { Theme } from "@/App";
import type { ReactNode } from "react";

type Props = {
  theme: Theme,
  onToggle: () => void,
};

const ThemeSwticher = ({ theme, onToggle }: Props): ReactNode => {
  const handleThemeButtonClick = (): void => {
    onToggle();
  };
  return (
    <div>
      <p>{theme}</p>
      <button onClick={handleThemeButtonClick}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwticher;
```

- Takeaways :
  1. Whenever we receive a prop as a function we use onFunctionName

  2. then make sure you don't use setTer directly and have an interface/helper function to call it

  3. make sure that your interface/helper function for setter is named using handleFunctionAction.

  4. We lifted the logic and item_created a seperate fucntion for setter from child to parent
     and passed the function as prop to the child from parent to child.

In conclusion our props can have 2 types of value state or `regular`:

The difference is state change as prop cause rerender and if you can uplift from child to mother like so then from mother you can use it their directly or pass it back to siblings
**pay attention to naming conventions** and **create separate handler function**

- Exceptions for this (children):
  - You pass jsx AKA ReactNode as props
  - Just define prop type to ReactNode
  - You can wrap this JSX around other elements in prop or in the component directly
  - First if you want to pass jsx and render them in another component as a prop use children
  - **children** are reserved in props in react it means you can use them like this

  ```javascript
  <ComponentIHave prop1={stateFunc} prop2={title}>
    <ThemeSwticher theme={theme} onToggle={handleOnThemeToggle} />;
    <p>Above is another component</p>
  </ComponentIHave>
  ```

  - Make sure the type of props for `ComponentIHave` is like this
  - You can still pass it as an attribute, but it is uglier and not a convention

  ```javascript
  // this is same as below
  type Props = {
    theme: Theme,
    name: string,
    isSth: boolean,
    children: ReactNode,
  };
  // this is same as above
  type Props = PropsWithChildren<{
    theme: Theme,
    name: string,
    isSth: boolean,
  }>;

  return (
    <div>
      <h1>This is my comp with children</h1>
      {children}
    </div>
  );
  ```

### Boolean props

There is convention for props that are type boolean, defining them is like so:

```javascript
type Props = {
  theme: Theme,
  name: string,
  isSth: boolean,
  primary?: boolean,
};

const ExampleComponent = ({
  theme,
  name,
  isSth,
  primary = false,
}: Props): ReactNode => {
  return <div>...</div>;
};
export default ExampleComponent;
```

For example instead of isPrimary we say primary and default is false, and it is optional.

How to use it in the beginning of the component

```javascript
// we don't need to set it to true this is possible only for booleans
// this is same as saying primary={true}
<ExampleComponent primary theme="light" name="rndm" isSth="sth"/>
// the second one primary={false} and we don't need to have it
//since it is already handled in the component
<ExampleComponent theme="light" name="rndm" isSth="sth"/>
```

### React Behind the scenes

React: is an S.P.A single page application.
For web, we use react-dom which stands for document object model. to Render the web pages, but we use React for the most part and only the end result will end up looking like that. So react DOM works with react.

- React is logic of your app like useState and other hooks and ...
- React can be used with Native as well like for mobile development instead of DOM and there are more to it.

- Note vite setup is in way for optimization that you have to import the CSS inside the main.tsx instead of HTML itself. so the main.tsx renders the index.html which means everything we have so styles in there are global and anything used in `index.css` will be shared everywhere

- CSS reset and color or values are defined in this file, but we can have many different .css styles for better maintenance and can be imported in `main.tsx`

**Main.tsx** only code

```javascript
createRoot(document.getElementById("root")!).render(<App />);
```

or

```javascript
const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(<App />);
```

Only convention is All component must be wrapped around `App.tsx` file then we only pass our `App` to create root in main. React convention.

- How does react render it uses babel to change jsx to regular JavaScript
- RETURN value of component is the most important part that gets rendered.
- Basically we have multiple functions/components that returns jsx, and they will all be used in `App.tsx` this type of programming is known as recursive.

- What does recursive mean : We call App calls Component1() + Component2() they all each call their children or fucntions/components inside them and this cycle repeats till end?

### Render in react

The command or action that causes render is called trigger a render.

How many times a render happen:

- We have initial render
  - Initial render happens we call render in the main.tsx
- From now on we can tell react to rerender anytime by using useState.
- keynote: useState only rerenders the component it is called in and their children doesn't affect the parent and siblings. (Because tha state value is out of the scope)
- We can optimize renders using memo, useMemo, useCallback

In chrome, you can select an element and inspector and use `ctrl + shift + p` and it will open a command palette for you can type `paint flashing rectangles` to view what is being changed AKA Prerender

- If we had a prop lift no matter where in the deep children you call the setState for it because the state is in the parent it will render all their children.

### How does DOM being updated

Commit:

React developers figured out traversing DOM is not a good idea, and it is performance heavy task so in order to solve this issue (speed in computers) they refer to RAM but, JavaScript and browser uses a different thread of CPU meaning the DOM in browser is different from the one being rendered in react because JavaScript is single threaded language. in order to solve this issue they need to only need to change/rerender/minipulate DOM the difference between react dom and one in the browser.

So here comes the virtual DOM:

- React creates a virtual version of DOM in memory compares the diffs using comparison and if there is change it just changes that part of it
- position of the components matter

- why position matters ?
  - it compares render 1 to render 2 line by line side by side
  - so if there is change it will rerender them to real DOM
  - Extra: this is why we don't use index of map for the key so it knows the difference not the object value.

- These notes are generally good for interviews if you want to get into in depth and learn more and even better refer to documentation of React

- `https://react.dev`

### Map render or rerender

React on map because map size/length is unknown it has to delete the entire array and rebuild it again.
So trace this matter react uses sth called a key on the element but since map can return once thing at a time if you have multiple elements you can just pass the key to the parent of that
but if we want to use `<></>` like this we can't pass key to that so we need to use React fragment AKA `<Fragment></Fragment>`

Use this component to understand key why this matter and why you need to pass a unique ID and how to use key currently use index first then change it to user. ID to see the difference in the render

```javascript
import { Fragment, useState, type ReactNode } from "react";
import "./App.css";
export default function App(): ReactNode {
  const [users, setUsers] = useState([
    { id: "1", username: "user1", role: "ADMIN" },
    { id: "2", username: "user2", role: "USER" },
    { id: "3", username: "user3", role: "USER" },
    { id: "4", username: "user4", role: "USER" },
  ]);

  const handleButtonClick = (): void => {
    setUsers((perv) => {
      const clone = [...perv];

      clone.splice(1, 0, {
        id: String(users.length + 1),
        username: "new user",
        role: "USER",
      });
      return clone;
    });
  };

  return (
    <div className="app-container">
      <ul>
        {users.map((user, index) => {
          return (
            <Fragment key={user.id}>
              <li>
                {user.username} | {user.role}
              </li>
              <input type="text" />
            </Fragment>
          );
        })}
      </ul>

      <button onClick={handleButtonClick}>Change user sate</button>
    </div>
  );
}
```

Ultra important: Above and below

## Map, key rules

For items from database use their ID because they must contain one

For local use something like id and not index or length maybe username that is different or
national id, or you can generate cypto.UUID()

For siblings use a different KEY to this is important

Don't use keys that can change over time

Don't generate keys while rendering use it before render.

Extra: key is available on all elements this can be used in some rare occasions but is very usable

### Weird Key bugs and problems

**IMPORTANT** when we use ternary operation, and we return the same component but with a different value

```javascript
user.length % 2 === 0 ? <Hello label="even" /> : <Hello label="odd" />;
```

Here lets say we have a state for Hello and on button click this will change
react will not know their difference unless we pass them a key

```javascript
user.length % 2 === 0 ? (
  <Hello key={0} label="even" />
) : (
  <Hello key={1} label="odd" />
);
```

Now when ever we call that state setter react will know the difference and unmount the other component and rerender the new one.

Another solution for this is instead of using 1 liner ternary condition
use `&&` which means you are using them in different lines.

```javascript
{
  user.length % 2 === 0 && <Hello label="even" />;
}

{
  user.length % 2 === 1 && <Hello label="odd" />;
}
```

Final note on this it compares it line by line and let's say there is an array as a component it pushes/add the key to end of the array and trace the change of the last element (diffing) if this was different it changes just that to have better performance
This diffing happens in virtual.

### Best example is

Windows folder example naming unique instead of numbers that when added new changes position and order and file containment

### Starting the Trello project

Okay I will not be taking notes about the CSS design I will be having
[CSS] commit on GitHub you can check I am short on time for today...

### Using CSS

However, few notes
for colors use standard colors like
This color are taken from open-props

but you can use

- tailwind colors
- tailwind
- ant

How can we use clamp for responsiveness of the font size:
go to [clamp website](https://clamp.font-size.app)

To use fonts visit
font.google.com

type the name of the font you need

make sure it is 1 font family selected

then click on get embed code - put it on full axis because font is variable we can give it from 100 to 900 wight

then on web tab click on link and use it in index.html

we need to set font to use them inside our other elements as well.
if we wanted to use CSS just for that module we use name.module.css

### How to use module.css

If we wanna to import and use PascalCase.module.css we must.

```javascript
import type { ReactNode } from "react";
import styles from "./Counter.module.css";

const Counter = (): ReactNode => {
  return <pre className={styles.title}>Does css work here</pre>;
};

export default Counter;
```

styles returns an object. naming conventions for this us using style for the CSS styles.

### How does CSS modules work

It creates hash based on the CSS content. If we don't use the PascalCase.module.css it will be considered global.

### Personal rules

1. important rule that it has anything you want to have a style on must be a class, or it won't work

Optional and useful rules:

2. CSS structure must be **identical to HTML** (You can use nesting in CSS now) as well so do that 3. Only use 1 parent which is the contain and use

```javascript
return (
  <div className={styles.card}>
    <div className={styles.title}>
      Card title
      <div className={styles.logo}>Lgoo</div>
    </div>
    <div className={styles.content}>Content here...</div>
  </div>
);
```

for this HTML use this CSS

```css
.card {
  .title {
    .logo {
    }
  }

  .content {
  }

  &:hover {
    .title {
      .logo {
      }
    }
  }
}
```

3. we must only have a one general parent that contains everything

4. If there is need for repeating we should repeat with the same structure below

This sound like troubling. It helps with specificity and saves on maintenance and responsiveness in media queries and so on... but most importantly it rewrites the data we have at the end

for better usability we use something called `clsx`

Installing `clsx`

```bash
npm i clsx
```

You can use this and our end component should look something like this it is exactly this 😅:

```javascript
import type { ReactNode } from "react"
import styles from "./BoardCard.module.css"
import clsx from "clsx"

type BoardColor = "gray" | "blue" | "green" | "yellow" | "orange" | "red"

type Props = {
    title: string,
    desc: string
    color: BoardColor
}
const BoardCard = ({ title, desc ,color }: Props): ReactNode => {
    return (
        <div className={clsx(styles["board-card"], color)}>
            <div className={styles.cover}></div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.title}>{title}</div>
                    <a href="/board">View</a>
                </div>
                <div className={styles.description}>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default BoardCard
```

### Creating a button component in React + TypeScript

A button or a component can have many attributes but we can't possibly add all of the as a props. for example we can't give `onMouseEnter`, `onClick`, and ... as a prop one by one we need to have a inherit system that we can add custom props on top of the other already existing attributes. In order to that we utilize something called 'ComponentProps'.

In this case for a button and `&` and is for our custom props.

```javascript
type Props = ComponentProps<"button"> &  {
    variant?: "solid" | "outlined";
    color?: "default" | "primary";
}
```

**NOTE** if it was for a component as example we would use:

```javascript
type Props = ComponentProps<typeof BoardCard>
```

For using children you don't need to use children props because it already exist in button component by default.

How to actually use `onClick` like props effectively there is something like other spread syntax

```javascript
type Props = ComponentProps<"button"> & {
    variant?: "solid" | "outlined";
    color?: "default" | "primary";
}
export default function Button({
    variant = "solid",
    color = "default",
    children,
    ...otherProps
  }: Props): ReactNode {
    return (
        <button className={styles.button}>
          {children}
        </button>
    )
}
```

We use 3 values we get children to use it later and we stack everything else in otherProps.

How to actually use it? 2 ways:

```javascript
<button className={styles.button} onClick={otherProps.onClick}>
  {children}
</button>
```

but that takes a long time to write all of them so we use React majic.

```javascript
<button className={styles.button} {...otherProps}>
  {children}
</button>
```

How to style them using class ?

```javascript
<button
  className={clsx(styles.button, styles[variant], styles[color])}
  {...otherProps}
>
  {children}
</button>
```

What if user passed a custom class name down ? It will be not okay because className attribute is part of otherProps and we use otherProps after our own custom className so changes will overwrite itm if we swap the places it will overwrite the ours so to fix this.

### How to actually create usefull button component in react:

```javascript
type Props = ComponentProps<"button"> & {
    variant?: "solid" | "outlined";
    color?: "default" | "primary";
}
export default function Button({
    className,
    variant = "solid",
    color = "default",
    children,
    ...otherProps
}: Props): ReactNode {
    return (
        <button className={clsx(styles.button, styles[variant], styles[color], className)} {...otherProps}>
            {children}
        </button>
    )
}
```

And usage is like this :

```javascript
<Button color="primary">Create</Button>
```

### Why react and why single application

Because we are trying to build an application not a website. So in order for us to that we need be able to convert pages to load instantly. We don't have the ancient method of the HTML for routing between different pages we only have a single index.html file, and we need to use JavaScript in order to route between pages.

React + Framework

```
Framwork has it is restricted rules you can't do whatever you like to accomplish like you desire it has it's own complete system.
```

On the other hand react

```
Lets you so you can come up with your own solution but on the side has its own conventions as well.
```

### React Router Folder Structure

1. Create page folder
2. Inside it PascalCase create directory
3. Inside it you can have a regular component

### React Router:

Install

```bash
npm i react-router
```

2. Configuring router:
   Inside the router add BrowserRouter

```javascript
createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
```

create folder for pages and put you pages their for example we have HomePage where we render our footer header cards and so on in there
we are turning App.tsx file to router file. Routers acts kinda like if or switch cases.

convention is to use index which represent the "/" route instead of path

don't use anchor tags for routing because what they do is rerender the page they unmount the dom and loads new page takes longer time instead of that use something called Link from react-router

### Link tag from react-router

This inside of it uses a bit instead of rerendering it routes to the component path.
Much more optimized and way faster

```javascript
<Link to="/board">View</Link>
```

But what happens when want to click on something or when an event triggers we want route without using Link component from react-router

Then we use react-router's built in hook called `useNavigation`

how to use it

```javascript
const navigate = useNavigate();

const handleButtonClick = (): void => {
  navigate("/boards");
};

<Button onClick={handleButtonClick} variant="solid" color="primary">
  Create
</Button>;
```

Why this is wrong, and you shouldn't use it ?

1. You should use semantic HTML or a tags which means use Link that has anchor tag inside them.
2. This is not accessible via screen reader and causes accessibility issues.
3. Not good for seo.
4. You can style anchor tag to look like a button
5. Anchor tag has its feature like where it is going to gonna shows hint on bottom of the browser you can right-click on it, and it will show the browser option as copy link open new that copy address and so on...

### When we declare regular variables

A scenario when we have a variable that doesn't change or rerenders the DOM for
example year on the footer

Like the one in this example

```javascript
import type { ReactNode } from "react";
import styles from "./Footer.module.css";

const Footer = (): ReactNode => {
  const YEAR = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      All rights reserved. Copy rights &copy; {YEAR} trello-kanban.
    </div>
  );
};

export default Footer;
```

### Layout

In order to have a consistency throughout our pages like we want to have footer and header in all pages we need to use Layout.
Currently, we use our root layout
create Layouts folder and inside that folder Create RootLayout and styles make sure you give Homepage main styles to it.

In order to land this layout we need to use reach-router

Inside your App.tsx make Rap your pages to a new Route and pass it a RootLayout.tsx element like so

```javascript
return (
  <Routes>
    <Route element={<RootLayout />}>
      {/* instead of index you can use path but convention is index */}
      <Route index element={<HomePage />} />
      <Route path="board" element={<BoardPage />} />
    </Route>
  </Routes>
);
```

But how does react know where it should render the components:

It knows them like so using `react-router`'s `<Outlet/>`:

```javascript
import type { ReactNode } from "react";

import styles from "./Root.module.css";
import Footer from "../../Footer/Footer";
import { Outlet } from "react-router";

const RootLayout = (): ReactNode => {
  return (
    <div className={styles["root-layout"]}>
      <header>Trello-Kanban</header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
```

### Dynamic Routes

In order to move to a dynamic route based on the navigation/Link on the component we first
we need to make sure the component uses Link + and it navigates to a different link on each component like giving it an id prop which is different

Like so

```javascript
type Props = {
  id: number
  title: string;
  desc: string;
  color: BoardColor;
};
const BoardCard = ({ title, desc, color, id }: Props): ReactNode => {
  return (
    <div className={clsx(styles["board-card"], color)}>
      <div className={styles.cover}></div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <Link to={`/board/${id}`}>View</Link>
          ...
```

Change the first one to be the sconed one and note that you write `:id` correctly because that will be used shortly via useParam() of react-router.

```javascript
<Route path="board/" element={<BoardPage />} />
<Route path="/board/:id" element={<BoardPage />} />
```

### useParams() of react-router

```javascript
import type { ReactNode } from "react";
import { useParams } from "react-router";

const BoardPage = (): ReactNode => {
  const { id } = useParams();
  return (
    <div>
      You are now in the BoardPage
      <p>Your parameter from url is {id}</p>
    </div>
  );
};
export default BoardPage;
```

### 404 not found

Create a not found page component in the pages folder

```javascript
import type { ReactNode } from "react";

import styles from "./NotFoundPage.module.css";
import { Link } from "react-router";

const NotFoundPage = (): ReactNode => {
  return (
    <div className={styles["not-found-page"]}>
      <h1>Page you looking for is not found. Error code 404</h1>
      <Link to="/">Return to home page</Link>
    </div>
  );
};

export default NotFoundPage;
```

Add this route to the router make sure it is the last element in their

```javascript
<Routes>
  <Route element={<RootLayout />}>
    {/* instead of index you can use path but convention is index */}
    <Route index element={<HomePage />} />
    <Route path="*" element={<NotFoundPage />} />
    <Route path="/board/:id" element={<BoardPage />} />
    <Route path="/board/:id" element={<BoardPage />} />
  </Route>
</Routes>
```

### How to handle page errors

Catching rendering errors with an error boundary.

Only class component react still uses is error boundary

```bash
npm i react-error-boundary
```

Note that when ever we use a new library we need to update the prettier as well so it shows the errors correctly then.

This library also allows to log and get notified when errors happens they pass errors as props to fallback component:

```javascript
import ErrorPage from "./assets/components/pages/ErrorPage/ErrorPage.tsx";

createRoot(document.getElementById("root")!).render(
    <ErrorBoundary fallback={<ErrorPage />}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ErrorBoundary>
);
```

It has many useful features such as showing the error to user and resting the page so error might not happen again and some which you can read docs to know more in depth details.

### Adding and using icons

There is a website called `https://icones.js.org`
where it gathers all the different icons for you and you can choose to use the React version of them which you can pass props and change their size, colors and everything were is normally it is hard to accomplish to do with sings.

But since we have no internet access in middle of war we need to use emojis and there is no alternative, actually there is react-icons or npm package that we can use but no docs or copy and paste so it doesn't worthies

so what we do here perilously is we creat tsx file for our svg we copy and get them from the website about then inside that svg file we have something like this:

```javascript
export function MincuteEdit2Line(props: SVGProps<SVGVGElement>) {
  <svg
  xmls="",
  width="1em",
  viewBox="0 0 24 24",
  {...props}
  >
}
```

Now we need to create something called icon button,
The difference between this and regular button is

- Props and visually is different
  inside button it can have a variant or colors and such
- But inside the icon button this is actually limited
- Style is limited props we had doesn't really exist here it is just a regular button with svg inside of it and styles are different and it circular instead of rectangle

- We copied our Button switch to icon-button
- You can also limit the type of children to be svg only, but it is not needed kinda overkill, but I like overkills

```javascript
import type { ComponentProps, ReactNode } from "react";
import clsx from "clsx";
import styles from "./conButton.module.css";

// for receiving component props
// type Props = ComponentProps<typeof BoardCard> & {
// }

// this is how we do it:
// also not that children lives inside this as well
type Props = ComponentProps<"button">;

const IconButton = ({
  className,
  children,
  ...otherProps
}: Props): ReactNode => {
  return (
    <button className={clsx(styles["icon-button"], className)} {...otherProps}>
      {children}
    </button>
  );
};
export default IconButton;
```

Since I have no internet access I use emoji instead of component editable icon

```javascript
<IconButton>🖊</IconButton>
```

But you can pass Icon in there as well to help you improve your UI/UX far better.

### How set inline style

```javascript
<div
  style={{
    backgroundColor: "red",
    opacity: ".1",
  }}
>
  ...
</div>
```

### Note about border-radios and CSS

- Instead of using border-radius 50%
  use border-radius: 999rem or an enormous number that is bigger than width of the component.

- `> li` use this syntax for li because it applies styles to only that list and only that list and not its children I think.

### Clean code about PageComponents

- Don't write too much logic in the page components.
- Page.tsx must contain the page structure than component logic
- You can read a parameter or two or have fetch request, but it is recommended to use component and each component must have their logic within themselves.

### Naming convention for personal projects

use file types at the end of the files like

`name.component.tsx`

`name.page.tsx`

`name.module.css`

for types naming convention must be kebab case and ending must be ts like so

`list.ts`

`list-items.ts`

### map() for rendering multiple elements

If the elemnt inside the map had their own logic and iteraction make them into brand new components so it is easier to handle and develop.

The next thing is key value should be around the wrapper and not the element itself.

When you using `li` for example don't take them into a brand new component becayse they are semantic when directly being used inside the ul and not out side of them.

And note it may not need a `li` in some situation you just want to use it as a standalone component.

### useSate array inside an Object:

```javascript
  const handleIconDeleteAction = (): void => {
    setToDoList(prev => {
      return { ...prev, items: prev.items.filter(item => item.id !== "2") }
    })

    setToDoList((prev) => {
      const clone = { ...prev }
      clone.items = clone.items.filter((item) => item.id !== "2")
      return clone
    })

    setToDoList(old => {
      const clone = [...old.items];
      clone.splice(-1, 1);
      return { ...old, items: clone }
    })

    setToDoList((prev) => {
      return { ...prev, items: [...prev.items.filter(item => item.id !== "2")] }
    })
  }
```

### alt + shift + arrow down

When you insepcting in chrome select an elemnt use this combanation to add elements or duplicate elements in the browser

### React Dev tools

How to install

- You can install it globally and add a script tag to achieve this.

- You can see some component that you haven't item_created such as router, error boundary and ...
- You can select and view component using selector
- You can search for components and move around with arrow keys
- You can search with regex as well

### Settings section

- General
- theme: auto, light : dark
- display density: compact, conformable
- highlight updates when components render (IMPORTANT)
- Debug
- Append component stacks to console warnings and errors
- show inline warnings and errors
- break on warnings (for debugging and you can add debugger to pause application)
- Component settings:
- always parse hook names from source
- config that shows component tab in editor
- profiler (records why each component rendered while profiling )
- hide commits below 0 seconds

### Profiler dev-tools

Profiler timeline - shows component render and duration
we have initial render, and we also have rerender on state change

First we need record profiler and then trigger a rerender and stop, and we can view the timeline if timeline doesn't load up on first try, resizing the window might help showing it back.

Timeline: Based on the time you started recording and stopped gives you a linear timeline.
When it says update scheduled it means it is calling functions referring to components.
Update scheduled means virtual dom is diffed and there was a difference and now rerender is going to happen, commit means operation of changing the real dom.

Performance boost can make a real difference in apps make sure to use CSS for animation and ui update for the most parts or as much as possible.

### Ranked Charts

Will show the time it takes for component to load if there is a significant duration change you could debug it via this.

There is also a performance task as well

- also shows why each component is rendered if you have the checkbox enabled in the profiler section

### Flame graph

Greyed out means no rendered

colored means rendered you can see the relationships and render duration.

we also have magic wand and what caused the rendered

### Extra dev tools options

- Catching initial render Related performance issues, multiple render and more ... there is reload button which recorded initial render

- Save profile and load profile option

- there is a top left corner bars blue and yellow where you can see how many time renders happen

### Why rerenders happen

In react whenever we create a jsx component in the end it will turn into react.CreateElement()
which ends up creating your element. So when youc all multiple components inside each other the rerender will happen because it is creating a new element eversingle time.

They turn into mutliple function calling each other.

Calling react.CreateElement() triggers a render. unless we have condition saying if there is no change don't render or create these elements again.

How to prevent this behaviour, but be careful not to fall in the micro optimazion trap.

### Use memo

Uses JavaScript Object.is(firstProp, SecondProps) which is only different with `===` in comparing `NaN` and `+0 and -0`

if just a single prop is different it rerenders

- has nothing to do with memorization/remember/memory

It is more like caching in math algorithm when you want to access the result without calculating again.

I like to use it this way :

```javascript
import { memo, type ReactNode } from "react";
import styles from "./ListItem.module.css";
import type { ListItemType } from "@/types/list-items";

type Props = {
  item: ListItemType,
};

// ✅ Named arrow function that keeps its name in debugger
const ListItemComponent = ({ item }: Props): ReactNode => {
  return <div className={styles["list-item"]}>{item.title}</div>;
};

// ✅ Properly name the memoized export for better display in React DevTools
const ListItem = memo(ListItemComponent);
ListItem.displayName = "ListItem";

export default ListItem;
```

But in docs it is more common to use with regular functions there is no problem in using this either one, but I prefer being constant and `this` is more consistent in my code base.

and modern ones which they use React hook and therefore arrow functions.

**NOTE** that there is `ListIten.displayName = ListItem` It’s purely for developer convenience — no runtime or rendering effect.

### There is website called javascrip.info

If you don't know something it has good information on it.

### Comparing 2 strings sorting

```javascript
export type ListItemType = {
  id: string,
  title: string,
};

function Component() {
  const compareCB = (a: ListItemType, b: ListItemType): number => {
    return a.title.localeCompare(b.title);
  };

  const sortedList = {
    ...todoList,
    items: [...todoList.items.sort(compareCB)],
  };

  return <h1>Component</h1>;
}
```

### memo side effect

When we use memo or memoization it might rerender again this because object.is will compare the references and not inside the array you might redeclare a state it can have same value but the reference will change memo will not go to the detail unless you tell it to.

even if we set a button that changes the state but the memo tracing other is the same because everytime it rerenders and the values are the same but object is being redeclared so the reference will change so it will cause memo to malfunction because it is not tracing the values so it thinks there was a change.

When you declare new reference for array or objects Object.is([], []) will return false so it will rerender to prevent this :

### Solution

memo will take 2 arguments second argument is optional which receives a call back function with perv and next Argument and returns a boolean false rerenders true doesn't

```javascript
const BoardComponent = (): ReactNode => {
  const compareCB = (a: ListItemType, b: ListItemType): number => {
    return a.title.localeCompare(b.title);
  };

  const [todoList, setTodoList] =
    useState <
    ListType >
    {
      id: "1",
      title: "To do",
      items: [
        { id: "1", title: "Setup backend" },
        { id: "2", title: "Find a good name" },
        { id: "3", title: "Implement something " },
      ],
    };

  const [doingList] =
    useState <
    ListType >
    {
      id: "2",
      title: "Doing",
      items: [
        { id: "4", title: "Setup frontend and other bs..." },
        { id: "5", title: "Design Landing Page" },
      ],
    };

  const [doneList] =
    useState <
    ListType >
    {
      id: "2",
      title: "Done",
      items: [],
    };

  const handleEditButtonClick = (): void => {
    setTodoList((perv) => {
      const clone = [...perv.items];
      clone.splice(1, 1);
      return { ...perv, items: clone };
    });
  };

  const sortedTodoListList = {
    ...todoList,
    items: [...todoList.items.sort(compareCB)],
  };
  const sortedDoingListList = {
    ...doingList,
    items: [...doingList.items.sort(compareCB)],
  };
  const sortedDoneListList = {
    ...doneList,
    items: [...doneList.items.sort(compareCB)],
  };

  return (
    <div className={styles.board}>
      <div className={styles.toolbar}>
        <div className={styles.title}>Board Title</div>
        <div className={styles.actions}>
          <IconButton onClick={handleEditButtonClick}>📝</IconButton>
          <IconButton>➕</IconButton>
        </div>
      </div>
      <ul className={styles.lists}>
        <li>
          <List list={sortedTodoListList} />
        </li>
        <li>
          <List list={sortedDoingListList} />
        </li>
        <li>
          <List list={sortedDoneListList} />
        </li>
      </ul>
    </div>
  );
};

const Board = memo(BoardComponent, (prev, next): boolean => {
  // by default it will use Object.is on them
  if (prev.list.items.length !== next.list.items.length) {
    return false;
  }
  for (let i = 0; i < prev.list.items.length; i++) {
    if (prev.list.items.length[i].title !== next.list.items.length[i].title) {
      return false;
    }
  }
  return true;
});
```

### Above code is not simple at all useMemo()

React also provides a solution for this as well:

useMemo hook receives 2 arguments first being a function , second being `array`

staring from the 2nd one is lot easier it is called dependency array asks you for what I am I depending on ? when something changed I will change as well you put that here

first arguments is on initial render the function you pass as argument I will run that one first on initial render I will consider the return value as the variable and I will remember that as a last calculated value. On second time on rerender I will check my dependency array values I will objecect.is() if I see that nothing is changed in the dependency array I will directly return the functions value and use that cached value.

same as saying

```javascript
const perv = {};
const newS = prev;
Object.is(perv, newS);
```

how to useMemo I refactored the all code in order take a good look:

```javascript
import { memo, useMemo, useState, type ReactNode } from "react";

import styles from "./Board.module.css";
import IconButton from "../IconButton/IconButton";
import List from "../List/List";
import type { ListType } from "@/types/list";
import type { ListItemType } from "@/types/list-items";

const compareCB = (a: ListItemType, b: ListItemType): number => {
  return a.title.localeCompare(b.title);
};

const BoardComponent = (): ReactNode => {
  const [todoList, setTodoList] =
    useState <
    ListType >
    {
      id: "1",
      title: "To do",
      items: [
        { id: "1", title: "Setup backend" },
        { id: "2", title: "Find a good name" },
        { id: "3", title: "Implement something " },
      ],
    };

  const [doingList] =
    useState <
    ListType >
    {
      id: "2",
      title: "Doing",
      items: [
        { id: "4", title: "Setup frontend and other bs..." },
        { id: "5", title: "Design Landing Page" },
      ],
    };

  const [doneList] =
    useState <
    ListType >
    {
      id: "3",
      title: "Done",
      items: [],
    };

  const sortedTodoList = useMemo(() => {
    return { ...todoList, items: [...todoList.items].sort(compareCB) };
  }, [todoList]);

  const sortedDoingList = useMemo(() => {
    return { ...doingList, items: [...doingList.items].sort(compareCB) };
  }, [doingList]);

  const sortedDoneList = useMemo(() => {
    return { ...doneList, items: [...doneList.items].sort(compareCB) };
  }, [doneList]);

  const handleEditButtonClick = (): void => {
    setTodoList((perv) => {
      const clone = [...perv.items];
      clone.splice(1, 1);
      return { ...perv, items: clone };
    });
  };

  return (
    <div className={styles.board}>
      <div className={styles.toolbar}>
        <div className={styles.title}>Board Title</div>
        <div className={styles.actions}>
          <IconButton onClick={handleEditButtonClick}>📝</IconButton>
          <IconButton>➕</IconButton>
        </div>
      </div>
      <ul className={styles.lists}>
        <li>
          <List list={sortedTodoList} />
        </li>
        <li>
          <List list={sortedDoingList} />
        </li>
        <li>
          <List list={sortedDoneList} />
        </li>
      </ul>
    </div>
  );
};
const Board = memo(BoardComponent);

export default Board;
```

**NOTE** declare all the states you are using inside the useMemo dependency array, or it will not work. ESLINT warns you about this

You can also not use that array but TypeScript will scream at you while eslint says it is fine, but it will render component again.

How does it compare it will compare each item with Object.is(prev, next) | Object.is(prev, next)

### Heavy calculation use memoized

When you have a heavy calculations or something that uses a lot of resources we will useMemo as well.

### useMemo vs useCallback

| Feature         | useMemo                                  | useCallback                                    |
| :-------------- | :--------------------------------------- | :--------------------------------------------- |
| **Purpose**     | Memoizes the **result of a computation** | Memoizes the **function itself**               |
| **Returns**     | A **value** (the result of the function) | A **function** (the memoized callback)         |
| **Use Case**    | Expensive calculations, deriving data    | Passing stable callbacks to optimized children |
| **When to Use** | When you need to memoize a value         | When you need to memoize a function reference  |

---

### When to use memo

We are passing function down as a prop which will change the state function is an object and passing it down as prop will to change the state will cauase rerender even when we useMemo it will not run because it uses reference instead of actual value.

```javascript
import { useState, type ReactNode } from "react";

import styles from "./Board.module.css";
import type { ListType } from "@/types/list";
import IconButton from "../IconButton/IconButton";
import List from "../List/List";

const Board = (): ReactNode => {
  const [todoList, setTodoList] =
    useState <
    ListType >
    {
      id: "1",
      title: "To do",
      items: [
        { id: "1", title: "Setup backend" },
        { id: "2", title: "Find a good name" },
        { id: "3", title: "Implement something " },
      ],
    };

  const [doingList] =
    useState <
    ListType >
    {
      id: "2",
      title: "Doing",
      items: [
        { id: "4", title: "Setup frontend and other bs..." },
        { id: "5", title: "Design Landing Page" },
      ],
    };

  const [doneList] =
    useState <
    ListType >
    {
      id: "2",
      title: "Done",
      items: [],
    };

  const handleListItemClick = (id: string): void => {
    setTodoList((old) => {
      const clone = [...old.items];
      return { ...old, items: clone.filter((item) => item.id !== id) };
    });
  };

  return (
    <div className={styles.board}>
      <div className={styles.toolbar}>
        <div className={styles.title}>Board Title</div>
        <div className={styles.actions}>
          <IconButton>📝</IconButton>
          <IconButton>➕</IconButton>
        </div>
      </div>
      <ul className={styles.lists}>
        <li>
          <List list={todoList} onClick={handleListItemClick} />
        </li>
        <li>
          <List list={doingList} />
        </li>
        <li>
          <List list={doneList} />
        </li>
      </ul>
    </div>
  );
};

export default Board;
```

so above code will rerender even if we use useMemo()

This is our problem right here

```javascript
const handleListItemClick = (id: string): void => {
  setTodoList((old) => {
    const clone = [...old.items];
    return { ...old, items: clone.filter((item) => item.id !== id) };
  });
};
```

1 method that works but if you use callback which is better and more readable and kinda **smart** 😎🆒

```javascript
const handleListItemClick = useMemo(() => {
  return (id: string): void => {
    setTodoList((old) => {
      const clone = [...old.items];
      return { ...old, items: clone.filter((item) => item.id !== id) };
    });
  };
}, []);
```

but better and desired way of using this is

```javascript
const handleListItemClick = useCallback((id: string): void => {
  setTodoList((prev) => {
    const clone = [...prev.items];
    return { ...prev, items: clone.filter((item) => item.id !== id) };
  });
}, []);
```

The reason dependency array is empty is in this case we used useState's setter or setTodoList and we don't actually need todoList values to change anything so seter are not necessary dependent on their value. Inside the function you can't see that we used todo or TodoList.

### useMemo and useCallback

useMemo will call the function and memoize its value.

useCallback will remember the function itself. which we can skip this pattern/break it with useMemo as I showed above.

### Before using finally:

We can convert the inner value of the setList to a function invoker then reset the active

states to `null` value or you can use the below trick and be boss

### How to use finally like a boss

instead of setting(null) 6 times across 6 different place we can simply:

Why this is overpowered

- No matter what finally, will work if try happens or files(not catch needed) yo can have it if you want

- Finally, will run before the return / meaning if we have a return statement finally will run first then it will return the value.

```javascript
const handleRemoveButtonClick = (): void => {
  try {
    setLists((old) => {
      const activeListIndex = old.findIndex((list) => list.id === activeListID);
      if (activeListIndex === -1) {
        console.error("Can not find the desired list's index.");
        return old;
      }
      // anything needs a change and to be returned as
      // a new state must be cloned
      const clone = [...old];
      const activeList = { ...clone[activeListIndex] };

      const activeItemIndex = activeList.items.findIndex(
        (item) => item.id === activeItemId
      );
      if (activeItemIndex === -1) {
        console.error("Can not find the desired item's index.");
        return old;
      }

      activeList.items.splice(activeItemIndex, 1);

      clone[activeListIndex] = activeList;

      return clone;
    });
  } finally {
    setActiveListID(null);
    setActiveItemId(null);
  }
};
```

### Immer

Try not to use this to master list and object iterations and mutations.

it makes life much simpler and easier, but you should learn and try it so much till you learn it perfectly

### Passing children as component

When you are passing a component function that is memoized to a parent that is memorized even though nothing is changed that function is being called again so it uses new reference and will rerender each time. To prevent this we will use useCallback

### Don't fall into micro optimization trap

There are scenarios where useMemo or memo or memoization is useful in General. But micro optimization will ruin developer experience and probably your team mentality. Do it when have performance issues. React is developed with rerenders in mind, and it is fast else your code should run fine without using memoization just little bit slower. .8ms sometimes is not really important.

### React compiler

This date I am reading about this in the darkness of no internet it is in RC version meaning that, it is in Release Candidate state.

Not stable yet detect when you need memo or not for now best works with latest react which is 19.

### useEffect

whenever state changes tell me so I can do something.

If we have something changing across our code base and that is necessary for rendering for example reading from local storage we might have a function for it, but we forget to use it and then user have to make a ticket for it and we fix the bug or we useContext and that changes the state, but we forget to save it again these sort/types of actions can be tracked and prevented by useEffect()

or adding event listener or code that must run once

### How to memoize props changed children as props

This below component if all the components are memoized will not work because passing in
another `component as prop` like this will be treated as new function every single time and cause a rerender. No need for memoizing all of them juse useMemo like this.

```javascript
export default function SomeComponent ():ReactNode {
  retun(
    <IconsButton>
      <MingcuteEdit2Line />
    </IconsButton>);
}
```

In order to fix this we will do like this and this will fix our issue fully.
the icon components here are not memoized in their own component.

```javascript
export default function SomeComponent ():ReactNode {

  const editIcon = useCallback(()=> <MingcuteEdit2Line />, [])
  retun(<IconsButton>{editIcon}</IconsButton>);
}
```

### Why adding event listener without useEffect is horrible Idea

Because everytime a rerender happens or state changes that code will run again meaning it will add fresh new event listener to page.

### Strict mode

Strict mode helps you find early bugs during the development.

React suggest to wrap it around main app component especially in smaller projects earlier but if you have large apps you can wrap around other components to help with performance on development.

- Your components will re-render an extra time to find bugs caused by impure rendering.
- Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.
- Your components will re-run refs callbacks an extra time to find bugs caused by missing ref cleanup.
- Your components will be checked for usage of deprecated APIs.

### React component ruels

1.  React function or components must be pure meaning same input means same result, and shouldn't have side effect meaning it should not interfere with other components behaviours.

### Strict Mode and useEffect

Example:
If we have page, and we add event listener with useEffect and move to next page the event still exist on that page even though component unmounts. When we route and mount back that component the useEffect will run with more events added to the page. So it create a side effect and unwanted bug.

To prevent this from happening

- useEffect have a cleanup function which is just a call back as a return value
- this call back runs : when component you are using unmounts no matter the reason
- Another time useEffect gets run for example it is tracking a state and state is changed first thing it does is it calls the clean function then in proceeds to run the useEffect.

- so the condition is unmounted and state change for that useEffect for clean up function to run.

This is example how you can do it correctly:

```javascript
useEffect(() => {
  const deselectList = (e: KeyboardEvent): void => {
    console.log("keydown");

    if (e.code === "ESC") {
      return;
    }
    setActiveItemId(null);
    setActiveListID(null);
  };

  document.addEventListener("keydown", deselectList);

  return (): void => {
    document.removeEventListener("keydown", deselectList);
  };
}, []);
```

**NOTE** so we create a side effect/effect, and we have something to clean that side effect when we don't want to use it.

### useLayoutEffect hook

Especial use case and shouldn't be used a lot because can cause performance issues.

what is useLayoutEffect

- special version of useEffect that runs when browser want to run repaint operation on browser.

React:

1. first trigger - something that causes render

2. trigger are 2 types - initial runs initially | state change

3. state change causes a component that state changes and its children to rerender

4. 2nd render that render the components that knows where to render compares dom with v-dom
   and jsx will be build and positioned in v-dom

5. 3rd commit | change in V-DOM will be commited to the real DOM

6. 4th nothing to do with react, browser will paint/dispaly the changes.

Use effect works between commit and repaint so commit happen and DOM is changed but react prevents browser from repainting run useLayoutEffect first then repaint.

For example if we want to show a tool tip based on height of something, but we need to get the height after the DOM is changed. so very especial use case. Prevent (flicker) since we are the developer we might have better PC or high performance we could not know or see the flicker effect. So when we encounter this problem. Now you have the solution.

[Related Docs](https://react.dev/reference/react/useLayoutEffect)

### Button parent prevention we only need childs button: stopPropagation

In this function when clicking on IconsButton, onClick on the parent will aslo run afterwards.

```javascript
type Props = {
  listId: string;
  item: ListItemType;
  onClick?: (listId: string, itemId: string) => void;
  onRemove?: (listId: string, itemId: string) => void;
};

export default function ListItem({
  listId,
  item,
  onClick,
  onRemove,
}: Props): ReactNode {
  return (
    <div
      className={styles["list-item"]}
      onClick={() => onClick?.(listId, item.id)}
    >
      {item.title}
      <IconsButton onClick={() => onRemove?.(listId, item.id)}>
        <MingcuteDelete2Line />
      </IconsButton>
    </div>
  );
}
```

to prevent this we use something called `stopPropagation` for event we need to create handler for it first.

```javascript
type Props = {
  listId: string;
  item: ListItemType;
  onClick?: (listId: string, itemId: string) => void;
  onRemove?: (listId: string, itemId: string) => void;
};

export default function ListItem({
  listId,
  item,
  onClick,
  onRemove,
}: Props): ReactNode {


  const handleRemoveEvent = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation()

    onRemove?.(listId, item.id)
  }

  return (
    <div
      className={styles["list-item"]}
      onClick={() => onClick?.(listId, item.id)}
    >
      {item.title}
      <IconsButton onClick={handleRemoveEvent}>
        <MingcuteDelete2Line />
      </IconsButton>
    </div>
  );
}
```

### Prop drilling

Only thing we did was pass a prop from Parent to grandChild but we use Paren't child as a messanger to do so otherwise it has no other purpose imaging having more compilcate apps where you have to pass many props to many childrens or grandChildren this way. It will create a huge problem also know as `Prop drilling`

In order to solve this problem we utilize something called context:

### Reac context

Context defines a type which you can use put any value init. It creates a framework to stay on topic also known as context or what purpose it(your code) serves.

we can have components logics / states and anything anything that can also be not related to the component itself.

You can do anything innit just like a component at the end it will provide whatever you need.

Imagine like a chest where you put everything in there and children component get what you provide or allow to them to use/take from this chest.

- Context are format are regular .ts/.js files.

### Building a counter context as an exaple

Inside `counter-context.ts`

```javascript
import { createContext } from "react";

type ContextValue = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const CounterContext = createContext<ContextValue>({
  count: 0,
  increment: () => {},
  decrement: () => {},
  reset: () => {},
});
```

### Read this about context this matters

- First section is type safety for typescript
- We pass ContextValue to createContext so it knows it is types
- Values inside context is must and their values returned doesn't matter but we should have a template of them in there
- Edit the values based on types but have tempalte.

It is like buying a picture frame where there is default image in ther but it doesn't matter it is just in there we can change it later.

Different react programmers have unique approaches to this some peaple can give `null` value
like so :

```javascript
export const CounterContext = (createContext < ContextValue) | (null > null);
```

But this method requires to check to see if it is null or not then we need a hook to update the value if it null. Personally I don't like this approach.

```javascript
export const CounterContext =
  createContext <
  ContextValue >
  {
    count: 0,
    increment: () => {},
    decrement: () => {},
    reset: () => {},
  };
```

### How to understand react context simply

You have to see it as inheritance

- yourself can't use it
- your father or siblings can't use it
- only your children and thier children can use them

**Note:** The thing is it doesn't matter how high it gets the one thing that matter is it can be as deep/high as possible like old, old, ... gradpa

### How to use react context

Chose the father for a element you want to use it then treat it as a component.

Anything that is inside the context can use Contex values.

```javascript
<div>
  <CounterContext value={}>
    <BoardOrFatherComp/>
  </CounterContext>
</div>
```

or

```javascript
<div>
  <CounterContext.Provider value={}>
    <BoardOrFatherComp/>
  </CounterContext.Provider>
</div>
```

So context take a value as a prop this value type is what we defined which can be from null - to string array or complated layers of arrays or objects in our case we are using object

and remember in order to use javascipt code in react we use {} and inside it we use {{}} another object pass on the values.

```javascript
<div>
  <CounterContext.Provider value={{}}>
    <BoardOrFatherComp />
  </CounterContext.Provider>
</div>
```

### Using states in context

```javascript
export default function BoardPage(): ReactNode {
  // const { id } = useParams();

  const [count, setCount] = useState<number>(0)

  const increment = (): void => {
    setCount(prev => prev + 1)
  };
  const decrement = (): void => {
    setCount(prev => prev - 1)
  };
  const reset = (): void => {
    setCount(0)
  };

  return (
    <div className={styles["board-page"]}>
      <CounterContext value={
        {
          count,
          increment,
          decrement,
          reset,
        }
      }>
        <Board />
      </CounterContext>
    </div>
  );
}
```

Okay now we want to use our context inside Board Components

### useContext

We use this hook and pass the CounterContext that we create

SO we used it twice `CounteContext`:

1. First one as component and declared its variables
2. Second we pass it to useContext hook.

```javascript
const value = useContext(CounterContext);
```

Now we destructure it to use it.

```javascript
const { count, increment, decrement, reset } = useContext(CounterContext);
```

### How to propary use context

1. Create a folder called Provider
2. Create a component file
3. Note that CounterValue is in a context folder

```javascript
import { useState, type PropsWithChildren, type ReactNode } from "react";

import CounterContext from "@/context/counter-context";

type Props = PropsWithChildren

export default function CounterProvider({ children }: Props): ReactNode {
    const [count, setCount] = useState<number>(0)
    const increment = (): void => {
        setCount(prev => prev + 1)
    };

    const reset = (): void => {
        setCount(0)
    };
    return (
        <CounterContext value={{ count, increment, reset }}>
            {children}
        </CounterContext>
    )
}
```

4. Usage

```javascript
<CounterProvider>
  <Board />
</CounterProvider>
```

### Creating more complicated context

Creating Context types and iteself:

```javascript
import { createContext } from "react";

import type { ListType } from "@/Types/list";

import { listsData } from "@/data/list-data";

type ContextValue = {
  lists: ListType[];
  create: () => void;
  move: (fromListId: string, itemId: string, toListId: string) => void;
  remove: (listId: string, itemId: string) => void;
};

export const BoardContext = createContext<ContextValue>({
  lists: listsData,
  create: () => {},
  move: () => {},
  remove: () => {},
});
```

Creating context's provider component:

```js
import { type PropsWithChildren, type ReactNode, useEffect, useState } from "react";

import { BoardContext } from "@/context/Board-context";
import type { ListType } from "@/Types/list";
import { listsData } from "@/data/list-data";

type Props = PropsWithChildren;

function save(lists: ListType[]): void {
    localStorage.setItem("lists", JSON.stringify(lists));
}

function load(): ListType[] {
    const isEmpty = localStorage.getItem("lists");
    return isEmpty === null ? listsData : JSON.parse(isEmpty);
}

export default function BoardProvider({ children }: Props): ReactNode {
    const [lists, setLists] = useState<ListType[]>(load)


    useEffect(() => {
        save(lists);
    }, [lists]);


    const create = (): void => {
        setLists((prev) => {
            const randUUID = crypto.randomUUID();
            const clone = [...prev];
            clone[0] = {
                ...clone[0],
                items: [...clone[0].items, { id: randUUID, title: randUUID }],
            };

            return clone;
        });
    }
    const move = (fromListId: string, itemId: string, toListId: string): void => {
        setLists((prev) => {

            const fromListIndex = prev.findIndex(
                (list) => list.id === fromListId,
            );

            const toListIndex = prev.findIndex(
                (list) => list.id === toListId,
            );

            if (fromListIndex === -1 || toListIndex === -1) {
                console.error("Error findind desired list.");
                return prev;
            }

            const clone = [...prev];
            const list = {
                ...clone[fromListIndex],
                items: [...clone[fromListIndex].items],
            };
            const toList = {
                ...clone[toListIndex],
                items: [...clone[toListIndex].items],
            };

            const itemIndex = clone[fromListIndex].items.findIndex(
                (item) => item.id === itemId,
            );

            if (itemIndex === -1) {
                console.error("Error findind desired list-item.");
                return prev;
            }

            const [item] = list.items.splice(itemIndex, 1);
            toList.items.push(item);

            clone[fromListIndex] = list;
            clone[toListIndex] = toList;

            return clone;

        });
    }
    const remove = (listId: string, itemId: string): void => {
        setLists((prev) => {
            const listIndex = prev.findIndex((list) => list.id === listId);

            if (listIndex === -1) {
                console.error("Error findind desired list.");
                return prev;
            }

            const clone = [...prev];
            const list = {
                ...clone[listIndex],
                items: [...clone[listIndex].items],
            };

            const itemIndex = clone[listIndex].items.findIndex(
                (item) => item.id === itemId,
            );

            if (itemIndex === -1) {
                console.error("Error findind desired list-item.");
                return prev;
            }

            list.items = list.items.filter(
                (item) => item.id !== itemId,
            );
            //  You can also mutate the array however since it is happening twice via strictmode
            // it is recommended to have a clone and return a array to that clone.
            // list.items.splice(itemIndex, 1)

            clone[listIndex] = list;

            return clone;
        });
    }

    return (
        <BoardContext value={{
            lists,
            create,
            move,
            remove,
        }}>
            {children}
        </BoardContext>
    );
}
```

### Few thing react makes easier

1. First is we don't to use `Provider` syntax anymore `<OurContex.Provider></OurContex.Provider>`

2. Second thing is instead of using `useContext` hook we utlize `use` api instead

Okay `use` also have more complex usecases such as suspense and or using in `ErrorBoundries`
However **react docs** suggest usign `use` is better. You can't use condition/ifs around the useState | or you can't use it inside loops. It is more flexible.

### useReducer

It is a brand new hook and we will discuss why should we even consider using it.

It creates a framework around the states we are using. It can control the arguments. Makes it easier to work with states. There is no extra need to use setStates. Helps us generalize and

Also it is an introduction to state manager libraries like `Redux` or `Zustan` or `Redux-tool-kit` or other stuff we have.

## How to use reducer

1. Step one create a folder called reducer and put it inside prettier config as well
2. It is not a component so `.tsx` format is not required so `.ts` it is.
3. Use kebab-case to create file.
4. Create a fucntin called nameReducer that always gets 2 prameters:
   first one being `state` second being `action`
5. it is return type is our state.
6. What type is our action here is explnation for react convention:
   - an object that has a type
   - And also have other values that helps us to take an action (for instance remove)
   - based on type value we determine what type of action we need to take and also past tense in being used here
   - sth_happend_value

This way of using it is not the best becauase:

```js
type Action  = {
  type: "item_created" | "move" | "remove";
  fromListId: string;
  itemId: string;
  toListId: string;
  listId: string;
}
export function listReducer(state: listType[], action: Action): listType[]  {}
```

imagine doing this:

```js
listReducer([], { type: "item_created", listId: "" });
```

- So for `item_created/create` we don't have a prameter passed into the function.
- Also it should say that hey! `item_created` can't take `listId`.

So how to fix this type issue in Typescript like so we divide it into how many actions we have.

```js
type Action  = {} | {} | {}

```

Also fully being like this when compeleted:

```js
type Action  = {
  type: "item_created"
} |
{
  type: "moved";
  fromListId: string;
  itemId: string;
  toListId: string;
} |
{
  type: "removed";
  listId: string;
  itemId: string;
}
```

so based on the above item_created intelisensse will help us greatly and we could have

### How to use reducer's actions

```js
type Action  = {
  type: "item_created"
} |
{
  type: "moved";
  fromListId: string;
  itemId: string;
  toListId: string;
} |
{
  type: "removed";
  listId: string;
  itemId: string;
}

export function listReducer(state: listType[], action: Action): listType[]  {
  if (action.type === "item_created") {
  } if else (action.type === "moved") {
  } if else (action.type === "removed") {
  }
}
```

But it is better to use `switchCase` in when we have a lot of conditional if statements like above.

```js
switch (action.type) {
  case "item_created":
    break;
  case "item_created":
    break;
  case "item_created":
    break;
  default:
    break;
}
```

Since we need to return sth we don't need `break` here. and also we can use curly brackets`{}` to create ourselfs a scope so we can use repeated names for values like `a` or `b` in multiple scopes however it is **opttional**.

```js
switch (action.type) {
  case "item_created": {
    const a = "sthing",
    // and every a is unique
    return [];
  }
  case "item_created": {
    const a = "sthing",
    // and every a is unique
    return [];
  }
  case "item_created": {
    const a = "sthing",
    // and every a is unique
    return [];
  }
  default: {
    const a = "sthing",
    // and every a is unique
    return [];
  }
}
```

We copy the provider's fucntion we leave the setState be but we copy the inner contents.

### How to use reduce

This syntax are both the same:

```js
useReducer(listReducer, [], load);
useReducer(listReducer, load());
```

useReducer returns to us 2 things :

1. One the return value ListType[].
2. ActionDispatch

Similar to useSate however we can do this instead.

```javascript
const = [lists, dispatch] = useReducer<GenericTypeButNoNeed>(listReducer, load())
```

Instead of setting the states we can use this

```js
    const [lists, dispatch] = useReducer(listReducer, load())

    const create = (): void => {
        dispatch({ type: "item_created" })
    }
    const move = (fromListId: string, itemId: string, toListId: string): void => {
        dispatch({ type: "moved", fromListId, itemId, toListId })
    };
    const remove = (listId: string, itemId: string): void => {
        dispatch({ type: "removed", listId, itemId })
    };
```

### When to use Context vs Reducer

Inside our board component we used Our `Context`

```js
const { lists, create, move } = use(BoardContext);
```

This is to prevent from prop drilling so we can have access to our state from grandChildren and ... other children.

We need to use context in a component but in order to prevent from colliding or messy code we seperate it to a Provider component.

But whenever we are taking some specific action or a lot of actions to change a state to we use something called reducer to do so.

**When it is something simple use prop drillin** However when it is something more complicated to keep the code clean useContext and follow above pattern.

- React context + provider makes a component code cleaner and also creates a modular function that can be utlized inside other function faster

### toast-notifications

Here is the [website](https://fkhadra.github.io/react-toastify/introduction) you can get it from.

Setup code I have selected:

This code is a contrainer that has a fixed position higher z-index and and ... that must be a wrapper and inside that wrapper we can call a invoker function that shows the toast-notif

```javascript
<ToastContainer
  position="bottom-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick={false}
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
  transition={Slide}
/>
```

install command:

```bash
npm i --save react-toastify
```

Usage:

```js
toast.success("Item removed successfully");
```

### Modal in react

There are many ways of creating a modal

Best way is to create a seperate component that can handle children. So you pass in children as props and it shows it around a model.

- In the old days they used something called `react portal`

- But the modern better way utlizing `dialog` tage which is being supported in the most and updated browsers realesd in 2023.

- When you use `dialog` there is no need for `z-index` no backdrop handling...

- Can be used through out any projects angular vue and ...

- it adds a 10% shadowing `::backdrop` to elemetn

- disables other element's selection

- Adds focus to its own tab so when you press tab key it doesn't jump between elements.

- when you press escape modal closes automatically.

- This was all the reasons why we used react portal (It rendered elements out of juristiction)

- It will be used in `top layer` so no shifting and positionign problems if you are aware of this

- It can be used anywhere.

  **Base of modal component**

- the reason we are not using `title` and `heading` is being used instead is that title as an attribute which can also be used as tooltip is now seperated and have a better developer clean code. You can write it that way. But that is the reasoning behind it.

```javascript
type Props = ComponentProps<"dialog"> & {
  heading: string;
};

export default function Modal({
  className,
  heading,
  children,
  ...otherProps
}: Props): ReactNode {
  return (
    <dialog className={clsx(styles.modal, className)} {...otherProps}>
      <header>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.actions}>
          <IconsButton>
            <MingcuteCloseLine />
          </IconsButton>
        </div>
      </header>
      <main>{children}</main>
    </dialog>
  );
}
```

### Browser tip

In the browser if you select an element then in the console you type `$0` it will select the element you have been selected.

### top layer

Top layer is newer concept added to the browser the html is on the side top-layer is another layer or area which is seperated and sits on top of the html.

It can have multiple elements such as dialog and ...

when browser shows a element in the top layer it means it is not even there it removed and placed in the top layer. So in the syling mostly for positioning if you apply them to the parent in will be ineffective.

### how to use Modal

You are aware that we can't use `document.querySelector()` in react for many reasons

1. It can cause in injection or xss attacks
2. It will query the pervious renders not the current one
3. Query will used before return so can't select what comes after it.
4. setting timeouts is troublesome :
5. Can't tell when component is going to be rendered based on the system
6. Client computer mybe slow or too fast
7. Client internet mybe be slow
8. On error of rendering will not work and no recommended

So how do we select the element we want ?

### useRef

This is react hook that can help us select a react element. Initial value for useRef is `null` and it is mandatory

```javascript
const ref = useRef < HTMLDialogElement > null;
```

then on the element we set the ref attribute to the value of our variable.

```javasctipt
<dialog ref={ref}></dialog>
```

ref can't be used directly since it is a wrapper around html element to access the element we need to use `ref.current.`

```javascript
  const ref = useRef<HTMLDialogElement>(null);

  const handleOpenModalButtonClick = (): void => {
    ref.current?.showModal();
  };

  const handleCloseModalButtonClick = (): void => {
    ref.current?.close();
  };

  return (
    <>
      <Button color="primary" onClick={handleOpenModalButtonClick}>
        open modal
      </Button>
      <dialog
        ref={ref}
        className={clsx(styles.modal, className)}
        {...otherProps}
      >
        <header>
          <div className={styles.heading}>{heading}</div>
          <div className={styles.actions}>
            <IconsButton onClick={handleCloseModalButtonClick}>
              <MingcuteCloseLine />
            </IconsButton>
          </div>
        </header>
        <main>{children}</main>
      </dialog>
    </>
  );
}
```

The question mark around here

```javascript
ref.current?.showModal();
```

is because the initial ref value is null typescript is saying it might be null but we are 100% sure that it will not be empty because useRef fetches the refrence after render sequance is completed.

Show modal has 3 value:

1. The `show()` method of the HTMLDialogElement interface displays the dialog as a non-modal dialog.
2. The `showModal()` method of the HTMLDialogElement interface displays the dialog as a modal dialog, over the top of any other dialogs or elements that might be visible.
3. The `showPopover()` method of the HTMLElement interface shows a popover element (i.e., one that has a valid popover attribute) by adding it to the top layer.

However close() is one and only and work the same on all of them.

### more to useRef

use ref is kinda the opposite of useState we want to have a variable that changes but doesn't trigger rerenders.

it is also used in loadings

```javascript
const isLoading = useRef <boolean > true;

cosnt onClickFunc = () => {
  isLoading.current = false
}
```

**Important**
**Note** The key difference between this an a regular variable usage is that `useRef` keeps the previous value even on thee other renders.

**Next steps**

In our modals button is used inside the our modal comp but we may want to have other usecases or maybe there is no button at we are having a api or a form submit or ...

So we move button out and clear out the fragment we are having.

here is how our modals looks like:

```javascript
import {
  type ComponentProps,
  type ReactNode,
  type RefObject,
  useRef,
} from "react";

type Props = ComponentProps<"dialog"> & {
  heading: string;
  ref: RefObject<HTMLDialogElement | null>;
};

export default function Modal({
  className,
  heading,
  ref,
  children,
  ...otherProps
}: Props): ReactNode {
  const handleCloseModalButtonClick = (): void => {
    ref.current?.close();
  };

  return (
    <dialog ref={ref} className={clsx(styles.modal, className)} {...otherProps}>
      <header>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.actions}>
          <IconsButton onClick={handleCloseModalButtonClick}>
            <MingcuteCloseLine />
          </IconsButton>
        </div>
      </header>
      <main>{children}</main>
    </dialog>
  );
}
```

Here is how you use it in other places

```
export default function BoardPage(): ReactNode {
  // const { id } = useParams();
  const ref = useRef<HTMLDialogElement>(null);

  const handleOpenModalButtonClick = (): void => {
    ref.current?.showModal();
  };

  return (
    <div className={styles["board-page"]}>
      <BoardProvider>
        <ActiveItemProvider>
          {/* <Board /> */}

          <Button color="primary" onClick={handleOpenModalButtonClick}>
            open modal
          </Button>
          <Modal ref={ref} heading="This is heading">
            Hello testing
          </Modal>
        </ActiveItemProvider>
      </BoardProvider>
    </div>
  );
}
```

**Note** One is thing to note is we overwrite the typescripts ref type so we don't get typescript error when we using ref.

```javascript
type Props = ComponentProps<"dialog"> & {
  heading: string;
  ref: RefObject<HTMLDialogElement | null>;
};
```

This way you can access the ref from both outside and inside the modal component.

### style the modal

Few styling notes about styling dialog/modal you should never give display or written positioning styles directly to the dialog element.

Instead do it for its children

Here is how syles looks like:

```css
.modal {
  inline-size: min(30rem, 100%);

  margin: auto;
  border: none;
  border-radius: var(--border-radius-2);

  > header,
  > main {
    padding: 0.5rem 1rem;
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    border-block-end: 1px solid var(--color-border);

    .heading {
      font-size: var(--fz-500);
      font-weight: 500;
    }
  }
}
```

### close modal when clicking on the side

```js
import { type MouseEvent } from "react"

  const handleDialogClick = (e: MouseEvent<HTMLDialogElement>): void => {
    if (e.target === e.currentTarget) {
      ref.current?.close();
    }
    // console.log("target", e.target);
    // console.log("currentTarget", e.currentTarget);
  };

  return (
    <dialog onClick={handleDialogClick}></dialog>
  )
```

When clicking outside of the modal target and currentTarget both shows the modal is being targeted

However when you click on the modal elements or inside the modal

target is set to the specific item inside the modal but

the currentTarget still is on modal.

So in order to close the modal we need to have above code when both are same

**Note** If you have invisable padding around the `dialog` box this will no work when clicked on invisibale padding this is why we don't give styles to the dialog box itself but inner contents.

### how to handle other users onClick in our component ?

```javascript
export default function Modal({
  className,
  onClick,
  heading,
  ref,
  children,
  ...otherProps
}: Props): ReactNode {
  const handleCloseModalButtonClick = (): void => {
    ref.current?.close();
  };

  const handleDialogClick = (e: MouseEvent<HTMLDialogElement>): void => {
    if (e.target === e.currentTarget) {
      ref.current?.close();
    }

    // above is the default on click behaviour we want to have
    // anything else users add will be called with the event here
    // since this is optional we need to use typescript/javascript (?.) so it does nothing when nothing is being passed

    onClick?.(e);
  };
```

Why this is better it creates a consisstant code and same behavior for everyday usage user logic can sit on top of our code base.

Just like how we extract the `className` from `...otherProps` we did and can do the samething to `onClick` extracted from `...otherProps`

### How to style backdrops ?

```css
&::backdrop {
  background-color: var(--color-backdrop);
  backdrop-filter: blur(2px);
}
```

### Creating text input component

We must link label to input because it has lots of benefits

- For accessibility purposes
- focus click
- user experience
- screen readers

One way of doing this is using classic `htmlFor`/`for` + `id` attributes for label then input

For this we need to pass in ID every time we use this component or we need to create random id inside the component.

Aside from the extra process that label has to do to create random id every single time it is also always new id which for screen reader means new forms.

To fix this issue we can useRef(ref.current) or useMemo as well. or something react offers:

### useId

`useID` hook is exactly is for this situation:

```javascript
type Props = ComponentProps<"input"> & {
  label: string;
};

export default function TextInput({
  className,
  label,
  ...otherProps
}: Props): ReactNode {
  const id = useId();
  return (
    <div className={clsx(styles["text-input"], className)}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...otherProps} />
    </div>
  );
}
```

Other way of doing this is putting `input` element inside the `label` element

```javascript
<label>
  {label}
  <input className={clsx(styles["text-input"], className)} {...otherProps} />
</label>
```

### input carrot color and check box color

```css
caret-color: var(--color-primary);
accent-color: var(--color-primary);
```

### Limiting type to input type only

```js
import {
  type ComponentProps,
  type HTMLInputTypeAttribute,
  type ReactNode,
  useId,
} from "react";

import clsx from "clsx";

import styles from "./TextInput.module.css";

type Props = ComponentProps<"input"> & {
  label: string;
  type: HTMLInputTypeAttribute;
};

export default function TextInput({
  className,
  label,
  type,
  ...otherProps
}: Props): ReactNode {
  const id = useId();
  return (
    <div className={clsx(styles["text-input"], className)}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...otherProps} />
    </div>
  );
}
```

Or you can do this instead:

```js
type TypeAttribute =
  | "button"
  | "date"
  | "datetime-local"
  | "email"
  | "image"
  | "month"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

type Props = ComponentProps<"input"> & {
  label: string;
  type: TypeAttribute;
};
```

### CreateListItemModal

We don't want to pass in children to modal for forms and inputs evertime so we create a different component called `CreateListItemModal` for it. which looks like this :

To prevent passing children and also heading to `CreateListItemModal` we can do this :

To delete it we use typescript omit which takes in 2 value + `union`

```js
// this omit is typescript utiltiy that take 2 parameter first a type and second what you want to remove from that type so we want  children removed from type ComponentProps<typeof Modal>
type Props = Omit<ComponentProps<typeof Modal>, "heading" | "children">;

export default function CreateListItemModal({
  className,
  ref,
  ...otherProps
}: Props): ReactNode {
  return (
    <Modal
      ref={ref}
      className={clsx(styles["create-list-item-modal"], className)}
      heading="Create a New Item"
      {...otherProps}
    >
      <form>
        <TextInput label="Title" />
        <div className={styles.actions}>
          <Button type="button">Cancel</Button>
          <Button color="primary">Submit</Button>
        </div>
      </form>
    </Modal>
  );
}
```

### How to get 2 className for different purposes as a Prop

We create a className prop type for main content this way we have optional styles for the body so main will be edited as well as if they desired they can give styles to main and even if css structure changes we can keep it.

```js
type Props = ComponentProps<"dialog"> & {
  heading: string;
  contentClassName?: string;
  ref: RefObject<HTMLDialogElement | null>;
};

export default function Modal({
  className,
  contentClassName,
  onClick,
  heading,
  ref,
  children,
  ...otherProps
}: Props): ReactNode {
  const handleCloseModalButtonClick = (): void => {
    ref.current?.close();
  };

  const handleDialogClick = (e: MouseEvent<HTMLDialogElement>): void => {
    if (e.target === e.currentTarget) {
      ref.current?.close();
    }

    onClick?.(e);
  };

  return (
    <dialog
      ref={ref}
      className={clsx(styles.modal, className)}
      onClick={handleDialogClick}
      {...otherProps}
    >
      <header>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.actions}>
          <IconsButton onClick={handleCloseModalButtonClick}>
            <MingcuteCloseLine />
          </IconsButton>
        </div>
      </header>
      <main className={contentClassName}>{children}</main>
    </dialog>
  );
}
```

### Handling Forms in react

How to handle submit:

```javascript
import type { SubmitEvent } from "react";
  const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <Modal
      ref={ref}
      className={clsx(styles["create-list-item-modal"], className)}
      heading="Create a New Item"
      {...otherProps}
    >
      <form onSubmit={handleFormSubmit}>
```

### How to select value of input

1. first method using ref this is good for 1 input but as soon as it gets more it is not viable you see why:

```js
const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLInputElement>(null);
  const inputRef4 = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(inputRef.current?.value);
  };

  return (
    <Modal
      ref={ref}
      className={clsx(styles["create-list-item-modal"], className)}
      heading="Create a New Item"
      {...otherProps}
    >
      <form onSubmit={handleFormSubmit}>
        <TextInput ref={inputRef} label="Title" />
        <TextInput ref={inputRef2} label="Title" />
        <TextInput ref={inputRef3} label="Title" />
        <TextInput ref={inputRef4} label="Title" />
```

### selecting form instead of every input in them

This way you can use `FormData` and its methods to get to the elements.

`!` is saying to typescript am I am sure that it is not null or empty

```js
const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    //  ! is saying to typescript am I am sure that it is not null or empty
    const formData = new FormData(formRef.current!);
    // value of input that has a name attribute of title is being selected
    console.log(formData.get("title"));
  };

  return (
    <Modal
      ref={ref}
      className={clsx(styles["create-list-item-modal"], className)}
      heading="Create a New Item"
      {...otherProps}
    >
      <form ref={formRef} onSubmit={handleFormSubmit}>
```

But there is simpler and better way

### Using events target or currentTarget method

```js
const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // value of input that has a name attribute of title is being selected
    console.log(formData.get("title"));
  };

  return (
    <Modal
      ref={ref}
      className={clsx(styles["create-list-item-modal"], className)}
      heading="Create a New Item"
      {...otherProps}
    >
      <form onSubmit={handleFormSubmit}>
```

- In github check out [from logic](https://github.com/Poya-Faraji/trello-clone/commit/7615a92bd1b2e6e49203621dab5aa682d471d6a7) commit's details to further understand usecases.

### Form validation

1. Go the a component that you handle list submition's logic. in our case `CreateListItemModal`
2. Add function to handle validation logic:

```js
import {
  type ComponentProps,
  type ReactNode,
  type SubmitEvent,
  use,
  useEffect,
  useRef,
  useState,
} from "react";

import { toast } from "react-toastify";

import clsx from "clsx";

import BoardContext from "@/context/Board-context";

import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import TextInput from "../TextInput/TextInput";

import styles from "./CreateListItemModal.module.css";

type Props = Omit<ComponentProps<typeof Modal>, "heading" | "children"> & {
  listId: string;
};

export default function CreateListItemModal({
  className,
  ref,
  listId,
  ...otherProps
}: Props): ReactNode {
  const [titleError, setTitleError] = useState<string | null>(null);

  const { create } = use(BoardContext);
  const formRef = useRef<HTMLFormElement>(null);

  const handleModalClose = (): void => {
    formRef.current?.reset();
    setTitleError(null);
  };

  const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // value of input that has a name attribute of title is being selected
    const title = formData.get("title") as string;
    const id = crypto.randomUUID();

    if (validateTitle(title) === false) {
      return;
    }

    create(listId, { id, title: title.trim() });
    ref.current?.close();
    toast.success("Item added successfully");
  };

  const validateTitle = (title: unknown): boolean => {
    if (typeof title !== "string") {
      setTitleError("Title must be a string");
      return false;
    }
    if (title.trim().length === 0) {
      setTitleError("Title cannot be empty");
      return false;
    }
    handleModalClose();
    return true;
  };

  const handleCancelButtonClick = (): void => {
    ref.current?.close();
  };

  useEffect(() => {
    const resetFrom = (e: KeyboardEvent): void => {
      if (e.code !== "Escape") {
        return;
      }
      ref.current?.close();
    };
    document.addEventListener("keydown", resetFrom);
    return (): void => {
      document.removeEventListener("keydown", resetFrom);
    };
  }, [ref]);

  return (
    <Modal
      ref={ref}
      className={clsx(styles["create-list-item-modal"], className)}
      heading="Create a New Item"
      onClose={handleModalClose}
      {...otherProps}
    >
      <form ref={formRef} onSubmit={handleFormSubmit}>
        <TextInput label="Title" name="title" error={titleError} />
        <div className={styles.actions}>
          <Button onClick={handleCancelButtonClick} type="reset">
            Cancel
          </Button>
          <Button color="primary">Submit</Button>
        </div>
      </form>
    </Modal>
  );
}
```

3. Error handling notification in the `TextInput`

```js
type Props = ComponentProps<"input"> & {
  label: string;
  error?: string | null;
};

export default function TextInput({
  className,
  label,
  error,
  ...otherProps
}: Props): ReactNode {
  const id = useId();
  return (
    <div
      className={clsx(
        styles["text-input"],
        error ? styles.error : "",
        className,
      )}
    >
      <label htmlFor={id}>{label}</label>
      <input id={id} {...otherProps} />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
```

### none breaking space or &nbsp

or you can use unicode to allocate space to prevent layout shift.

```js
<span className={styles.error}>{error || "\u00A0"}</span>
```

### uncontrolled form

When we don't use reacts hooks state to change and update the render of value of the forms / inputs it is called `uncontrolled form`

In this way we use browser utilities which has their own shadow-dom and memory and hanldes render automatically.

### for example 3 commas for numebr input

Still uncontrolled

```js
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    console.log((+value).toLocaleString());
  };
  return (
    <div
      className={clsx(
        styles["text-input"],
        error ? styles.error : "",
        className,
      )}
    >
      <label htmlFor={id}>{label}</label>
      <input id={id} {...otherProps} onChange={handleInputChange} />
```

### Controlled Input

```js
  const [inputValue, setInputValue] = useState<string | number>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const int = parseInt(e.target.value.replaceAll(",", ""));
    if (isNaN(int)) {
      return;
    }

    setInputValue(int.toLocaleString());
  };
  return (
    <div
      className={clsx(
        styles["text-input"],
        error ? styles.error : "",
        className,
      )}
    >
      <label htmlFor={id}>{label}</label>
      <input
        value={inputValue}
        id={id}
        {...otherProps}
        onChange={handleInputChange}
      />
      <span className={styles.error}>{error || "\u00A0"}</span>
    </div>
  );
}
```

### Validate on change

```javascript
 const [title, setTitle] = useState<string>("");
  const [titleError, setTitleError] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const shouldValidateOnChange = useRef<boolean>(false);

  const { create } = use(BoardContext);

  const handleModalClose = (): void => {
    setTitleError(null);
    formRef.current?.reset();
  };

  const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // value of input that has a name attribute of title is being selected
    shouldValidateOnChange.current = true;

    if (!validateTitle(title)) {
      return;
    }

    const id = crypto.randomUUID();

    create(listId, { id, title: title });
    ref.current?.close();
    toast.success("Item added successfully");
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.trim();

    if (shouldValidateOnChange.current) {
      validateTitle(value);
    }
    setTitle(value);
  };

  const handleFormReset = (): void => {
    setTitle("");
    shouldValidateOnChange.current = false;
  };

  const validateTitle = (title: unknown): boolean => {
    if (typeof title !== "string") {
      setTitleError("Title must be a string");
      return false;
    }
    if (title.length < 3) {
      setTitleError("Title must be at least 3 characters.");
      return false;
    }
    handleModalClose();
    return true;
  };

  const handleCancelButtonClick = (): void => {
    ref.current?.close();
  };

  useEffect(() => {
    const resetFrom = (e: KeyboardEvent): void => {
      if (e.code !== "Escape") {
        return;
      }
      ref.current?.close();
    };
    document.addEventListener("keydown", resetFrom);
    return (): void => {
      document.removeEventListener("keydown", resetFrom);
    };
  }, [ref]);

  return (
    <Modal
      ref={ref}
      className={clsx(styles["create-list-item-modal"], className)}
      heading="Create a New Item"
      onClose={handleModalClose}
      {...otherProps}
    >
      <form ref={formRef} onSubmit={handleFormSubmit} onReset={handleFormReset}>
        <TextInput
          value={title}
          label="Title"
          name="title"
          error={titleError}
          onChange={handleTitleChange}
        />
        <div className={styles.actions}>
          <Button onClick={handleCancelButtonClick} type="reset">
            Cancel
          </Button>
          <Button color="primary">Submit</Button>
        </div>
      </form>
    </Modal>
  );
}
```

### onClick

For our modal this onClick prop as a function

```js
  const handleDialogClick = (e: MouseEvent<HTMLDialogElement>): void => {
    if (e.target === e.currentTarget) {
      ref.current?.close();
    }
    onClick?.(e);
  };
```

Whnever it is closed it will run the command however that can cause some problem whenever a click doesn't close the Modal it will run the click event function that user passed.

```js
  const handleDialogClick = (e: MouseEvent<HTMLDialogElement>): void => {
    if (e.target === e.currentTarget) {
      ref.current?.close();
    }else {
      onClick?.(e);
    }
  };
```

### Refactor

In our case using `dispatch` like this is not realy recommended. Beacause they are just middle function taking values and passing it to the dispatch anyways so we get rid of them.

```js
  const create = (listId: string, item: ListItemType): void => {
    dispatch({ type: "item_created", listId, item });
  };
  const move = (fromListId: string, itemId: string, toListId: string): void => {
    dispatch({ type: "moved", fromListId, itemId, toListId });
  };
  const remove = (listId: string, itemId: string): void => {
    dispatch({ type: "removed", listId, itemId });
  };
```

So we need to export `Actions` type from `list-reducer.ts`:

```js
type Action =
  | {
      type: "item_created";
      listId: string;
      item: ListItemType;
    }
  | {
      type: "moved";
      fromListId: string;
      itemId: string;
      toListId: string;
    }
  | {
      type: "removed";
      listId: string;
      itemId: string;
    };
```

So to convert this for better readibility

```js
export type ListAction
```

then we move on to `board-context.ts and chnage ContextValue type as well

```js
type ContextValue = {
  lists: ListType[];
  create: (listId: string, item: ListItemType) => void;
  move: (fromListId: string, itemId: string, toListId: string) => void;
  remove: (listId: string, itemId: string) => void;
};

const BoardContext = createContext<ContextValue>({
  lists: listsData,
  create: () => {},
  move: () => {},
  remove: () => {},
});

```

In Board provider you can see the dispatch type if you however over it.

```js
type ContextValue = {
  lists: ListType[];
  dispatchList: ActionDispatch<[action: ListAction]>;
};

const BoardContext = createContext<ContextValue>({
  lists: listsData,
  dispatchList: () => {},
});
```

In the `board-provider.tsx` we also nee to get rid of the function and directly use disPatch

```js
  const create = (listId: string, item: ListItemType): void => {
    dispatch({ type: "item_created", listId, item });
  };
  const move = (fromListId: string, itemId: string, toListId: string): void => {
    dispatch({ type: "moved", fromListId, itemId, toListId });
  };
  const remove = (listId: string, itemId: string): void => {
    dispatch({ type: "removed", listId, itemId });
  };
```

After that it should look like this instead:

```js
export default function BoardProvider({ children }: Props): ReactNode {
  const [lists, dispatchList] = useReducer(listReducer, load());

  useEffect(() => {
    save(lists);
  }, [lists]);

  return (
    <BoardContext
      value={{
        lists,
        dispatchList,
      }}
    >
      {children}
    </BoardContext>
  );
}
```

Now we search using `ctrl + shift + F` on the `(BoardContext` to find `use(BoardContext)` or `useContext(BoarContext)` and we will change the fucntion to dispatch like so :

```js
export default function Board(): ReactNode {
  const { lists, dispatchList } = use(BoardContext);
  const { activeItemId, activeListId, deactivate } = use(ActiveItemContext);

  const handleMoveButtonClick = (toListId: string): void => {
    if (activeListId && activeItemId) {
      dispatchList({
        type: "moved",
        fromListId: activeListId,
        itemId: activeItemId,
        toListId,
      });
    }
    deactivate();
  };
```

### Replacing select and change logic to Drag and Drop logic

First we need to delete selection logic. after that:

### immer library usage

Can be used in js and react. As we all know react use something called Object.Is() to compare the states for changes and with object and array this can be tricky alos

For immutability and mutability don't forget to add it to prettier config

```bash
npm i immer use-immer
```

Next step now we need to go to inside `BoardProvider.tsx` and change `useReduce` to `useImmerReducer`

```js
const [lists, dispatchList] = useImmerReducer(listReducer, load());
```

Now lets go change the `list-reducer.ts` as well since first thing `immer` gives us is `draft` and not the `state`

And we also need to import Draft from immer.

```ts
export function listReducer(
  draft: Draft<ListType[]>,
```

The cool thing is it is exactly like `state` but we don't need to go through in depth cloning it will do all of that for us.

I also change `create` and `removed` and added `item_` to the begining of them, so for future we add new list or different things we can tell the difference.

**Note** when we `useReducer` normally in react it need a return value but `immer` understands the change so return value is not needed.

The end code will look like this.

```ts
import type { Draft } from "immer";

import type { ListType } from "@/Types/list";
import type { ListItemType } from "@/Types/list-item";

export type ListAction =
  | {
      type: "item_created";
      listIndex: number;
      item: ListItemType;
    }
  | {
      type: "item_removed";
      listId: string;
      itemId: string;
    };

export function listReducer(
  draft: Draft<ListType[]>,
  action: ListAction,
): void {
  switch (action.type) {
    case "item_created": {
      const list = draft[action.listIndex];
      list.items.push(action.item);
      // or
      // draft[action.listIndex].items.push(action.item);
      return;
    }

    case "item_removed": {
      const listIndex = state.findIndex((list) => list.id === action.listId);

      if (listIndex === -1) {
        console.error("Error findind desired list.");
        return state;
      }

      const clone = [...state];
      const list = {
        ...clone[listIndex],
        items: [...clone[listIndex].items],
      };

      const itemIndex = clone[listIndex].items.findIndex(
        (item) => item.id === action.itemId,
      );

      if (itemIndex === -1) {
        console.error("Error findind desired list-item.");
        return state;
      }

      list.items = list.items.filter((item) => item.id !== action.itemId);
      //  You can also mutate the array however since it is happening twice via strictmode
      // it is recommended to have a clone and return a array to that clone.
      // list.items.splice(itemIndex, 1)

      clone[listIndex] = list;

      return clone;
    }

    default:
      throw new Error("Unknown Action in listReducer!");
  }
}
```

### Drag and Drops library

[dndkit.com](https://dndkit.com/)

It has a lot features:

- attributes
- sorting
- collision detection
- different detection algorithms
- accessibility controls
- amazing documentation

We are going to use legacy version then later on I am going to migrate to new version.

```bash
npm install @dnd-kit/core @dnd-kit/sortable
```

### How to deplyo dnd-kit

1. We need to useContext so we create a new directory in the provider directory named DndProvider/DndProvider.tsx becayse later we gonna add utils as well.

```js
import type { PropsWithChildren, ReactNode } from "react";

import { DndContext } from "@dnd-kit/core";

type Props = PropsWithChildren;

export default function DndProvider({ children }: Props): ReactNode {
  return <DndContext>{children}</DndContext>;
}
```

We need to use pointer sensors as well so we convert this like this and we use it inside the

`BoardPage.tsx` it is very important for us that we can have access to this inside

`BoardProvider.tsx` because we need to use and have access to dispatch.

```tsx
export default function BoardPage(): ReactNode {
  return (
    <div className={styles["board-page"]}>
      <BoardProvider>
        <DndProvider>
          <Board />
        </DndProvider>
      </BoardProvider>
    </div>
  );
}
```

We also need a sortableContext around the place we map for example in the `List.tsx` file

We need id for the items we need to drag + we are going to sort the list themselfs so we need to provide id for it as well.

```tsx
<SortableContext id={list.id} items={list.items.map((item) => item.id)}>
  <ul className={styles.items}>
    {list.items.map((item, itemIndex) => (
      <li key={item.id}>
        <ListItem
          listIndex={listIndex}
          itemIndex={itemIndex}
          listId={list.id}
          item={item}
        />
      </li>
    ))}
  </ul>
</SortableContext>
```

Our draggable needs droppables as well it means if we have no items present around we need a replacement or Lists themself to act as droppables to be able to drop the draged item on them. we need over targets.

We need to get setNodeRef and pass it to the List's `ul` tag we need to have id to for useDroppable `data` on the other hand is for our algorithm makes it easier to deploy the code and also it is something that we can pass any data we want using it

```tsx
const { setNodeRef } = useDroppable({
  id: list.id,
  data: { isList: true, listIndex, list },
});
```

Our list items also must be sortable

```tsx
import { type MouseEvent, type ReactNode, use } from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { toast } from "react-toastify";

import clsx from "clsx";

import type { ListItemType } from "@/Types/list-item";

import BoardContext from "@/context/Board-context";

import MingcuteDelete2Line from "@/icons/MingcuteDelete2Line";

import IconsButton from "../IconButton/IconsButton";

import styles from "./ListItem.module.css";

type Props = {
  listIndex: number;
  itemIndex: number;
  listId: string;
  item: ListItemType;
  onRemove?: (listId: string, itemId: string) => void;
};

export default function ListItem({
  listIndex,
  itemIndex,
  item,
}: Props): ReactNode {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: item.id,
      data: { isList: false, listIndex, itemIndex, item },
    });

  const { dispatchList } = use(BoardContext);

  const handleRemoveEvent = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    dispatchList({ type: "item_removed", listIndex, itemIndex });
    toast.success("Item removed successfully");
  };

  return (
    <div
      ref={setNodeRef}
      className={clsx(styles["list-item"])}
      style={{
        transform: CSS.Translate.toString(transform),
        transition,
      }}
      {...listeners}
      {...attributes}
    >
      {item.title}
      <IconsButton onClick={handleRemoveEvent}>
        <MingcuteDelete2Line />
      </IconsButton>
    </div>
  );
}
```

**Note** in the above code Item deletion onClick is not working because onClick event fires when you press and realase the mouse but our sortable doesn't let us do that because the mouse sensor it has works when you press and hold the mouse button.

So to prevent this we need to change `onClick` to `onPointerDown` and also e.stopPropagation prevents from parent event to fire.

### End of basic setup

### Cleaning the List.tsx

As you can see we have a lot of logic and different components usage going on in the `List.tsx` component we can break their logic in order to this first we need to create local directory we have a main global component + types + provider and ... directories however we want to isloate that to just component. So we create the same folder structure in the List component's folder.

**Note**: Every component must have only one responsibiltiy and if there is more you should break it into smaller pieces.

### DnD drag overlay

Our list items can't escape its parents and when it translates around it caueses overflow due to our styling methods.`Dnd-kit` have a solution for this matter. It removes the item from the ul visually and creates a exact copy and makes that movable.

1. useSortable has no type or generic we need to define a type to use that easily in our typescript setup.

2. Create file named `draggable-data.ts`

```ts
import type { ListType } from "./list";
import type { ListItemType } from "./list-item";

type ListDraggableData = {
  isList: true;
  listIndex: number;
  list: ListType;
};

type ListItemDraggableData = {
  isList: false;
  listIndex: number;
  itemIndex: number;
  item: ListItemType;
};

export type DraggableData = ListDraggableData | ListItemDraggableData;
```

The reason behind this typescipt method system the different thing is `isList` value is either `false` or `true` that is how we are going to determine which one we want this way typescript will detect which ever type we want to use makes life easier in conditionals.

3. Now lets go to `DndProvider.tsx`

```tsx
return (
  <DndContext sensors={sensors}>
    {children}
    <DragOverlay>You are dragging me 😨</DragOverlay>
  </DndContext>
);
```

There is something called DragOverlay which creates shows this element whenever you drag something but we want to have our elements not a custom template for all of them. to do this :

```tsx
const handleDragStart = (e: DragStartEvent): void => {
  console.log(e);
};

return (
  <DndContext sensors={sensors} onDragStart={handleDragStart}>
    {children}
    <DragOverlay>{dragItem}</DragOverlay>
  </DndContext>
);
```

Here the e event has 2 things inside it one is `active` and the other is `activatorEvent`

For now we are not going to work with `activatorEvent` but `active` is very useful

First of all it has `useRef` of the `data` we are sending. It aslo has rect of the element which is used for collision detection.

so how to do this :

```tsx
import { type PropsWithChildren, type ReactNode, useState } from "react";

import {
  DndContext,
  DragOverlay,
  type DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import type { DraggableData } from "@/Types/draggable-data";

import ListItem from "@/components/ListItem/ListItem";

type Props = PropsWithChildren;

export default function DndProvider({ children }: Props): ReactNode {
  const sensors = useSensors(useSensor(PointerSensor));

  const [activeData, setActiveData] = useState<DraggableData | null>(null);

  const handleDragStart = (e: DragStartEvent): void => {
    setActiveData(e.active.data.current as DraggableData);
  };

  const handleDragEnd = (): void => {
    setActiveData(null);
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {children}
      <DragOverlay>
        {activeData &&
          (activeData.isList ? null : (
            <ListItem
              listIndex={activeData.listIndex}
              itemIndex={activeData.itemIndex}
              item={activeData.item}
            />
          ))}
      </DragOverlay>
    </DndContext>
  );
}
```

**Note** read documentation for this to realy understand it in depth. Also note that documentation recommends that when you using a `DragOverlay` component use it as a presentational.

For example when we are draggin we don't want to see the delete icon on the overlay

2 ways of doing this

1. Get `isDragging` from `useSortable` and then pass in the styles ` opacity: isDragging ? "0.
4" : undefined,`

2. To do this go to `ListItem.tsx` then change

```tsx
type Props = {
  listIndex: number;
  itemIndex: number;
  item: ListItemType;
  presentational?: boolean;
};

export default function ListItem({
  listIndex,
  itemIndex,
  item,
  presentational,
}: Props): ReactNode {...}

return (
    <div
      ref={setNodeRef}
      className={clsx(
        styles["list-item"],
        presentational && styles.presentational,
      )}
      style={{
        opacity: isDragging ? "0.4" : undefined,
        transform: CSS.Translate.toString(transform),
        transition,
      }}
      {...listeners}
      {...attributes}
    >
...)
```

5. Then after that change the styles to

```css
cursor: default;
user-select: none;

&:not(.presentational) {
  &:hover {
    button {
      opacity: 1;
      &:hover {
        color: var(--color-rose-600);
      }
    }
  }
}
```

### Change item position

We made items draggable but now we need to change their position after we completed it.

List change logic happens in the reducer. So lets head to `list-reducer.ts`

```ts
export type ListAction =
  | {
      type: "item_created";
      listIndex: number;
      item: ListItemType;
    }
  | {
      type: "item_removed";
      listIndex: number;
      itemIndex: number;
    }
  | {
      type: "item_dragged_end";
      activeListIndex: number;
      activeItemIndex: number;
      overItemIndex: number;
    };

    case "item_dragged_end": {
      const { activeItemIndex, overItemIndex, activeListIndex } = action;

      if (activeItemIndex === overItemIndex) {
        return;
      }

      const activeList = draft[activeListIndex];

      activeList.items = arrayMove(
        activeList.items,
        activeItemIndex,
        overItemIndex,
      );

      return;
    }
```

Then we need to go to `DndProvider` but before that make sure your heiarchy order is correct.

```tsx
<div className={styles["board-page"]}>
  <BoardProvider>
    <DndProvider>
      <Board />
    </DndProvider>
  </BoardProvider>
</div>
```

Now inside Dnd Provider:

```tsx
export default function DndProvider({ children }: Props): ReactNode {
  const { dispatchList } = use(BoardContext);
  const sensors = useSensors(useSensor(PointerSensor));

  const [activeData, setActiveData] = useState<DraggableData | null>(null);

  const handleDragStart = (e: DragStartEvent): void => {
    setActiveData(e.active.data.current as DraggableData);
  };

  const handleDragEnd = (e: DragEndEvent): void => {
    setActiveData(null);

    if (!e.over) {
      return;
    }

    dispatchList({
      type: "item_dragged_end",
      activeListIndex: e.active.data.current!.listIndex,
      activeItemIndex: e.active.data.current!.itemIndex,
      overItemIndex: e.over.data.current!.itemIndex,
    });
  };
```

Make sure to pass the data correctly. Unfortunatly Typescrip types is not availbae for data we are passing that is sad and exactly here I encountered a issue which I fixed later.

```tsx
const handleDragEnd = (e: DragEndEvent): void => {
  setActiveData(null);

  if (!e.over) {
    return;
  }

  dispatchList({
    type: "item_dragged_end",
    activeListIndex: e.active.data.current!.listIndex,
    activeItemIndex: e.active.data.current!.itemIndex,
    overItemIndex: e.over.data.current!.itemIndex,
  });
};
```

### Drag and Drop between lists

First we need to edit `list-reducer.tsx` file:

```tsx
{
  type: "item_dragged_over";
  activeListIndex: number;
  activeItemIndex: number;
  overItemIndex: number;
  overListIndex: number;
}
```

`overListIndex` is also required because we need to know which list we gonna drop on.

This is our custom algorithm

```tsx
    case "item_dragged_over": {
      const { activeListIndex, activeItemIndex, overItemIndex, overListIndex } =
        action;

      if (activeListIndex === overListIndex) {
        return;
      }

      const activeList = draft[activeListIndex];
      const activeItem = activeList.items[activeItemIndex];
      const overList = draft[overListIndex];

      // can't use arrayMove method anymore since it creats a new array

      const newIndex = overItemIndex ?? overList.items.length;

      overList.items.splice(newIndex, 0, activeItem);
      activeList.items.splice(activeItemIndex, 1);

      return;
    }
```

### Custom collision system

The algorithm `dnd-it` uses when you are on specific pixel that the distance between rect of collision detection system are equal it triggers recalculations which caues huge amount of rerenders making application crash. Lets fix this.

Inside Provider/DndProvider create folder called utils because the code is complicated and hard to explain we are going to seperate it from the DndProvider.

The reason why we defined the code like above is is to get the exact correct
argument types instead of below that we have define it ourselfs.

We got the type from: `Props.collisionDetection?: CollisionDetection | undefined` it is the type of attribute of DndProvider's `collisionDetection` if you add and hover over the type of it

```tsx
import type { CollisionDetection } from "@dnd-kit/core";

export const detectCollision : CollisionDetection = (args) => {
}

function xyz (args: ...) {
}
```

First we create a loger and move the item in the same place to see what it returns to us.

```ts
import { type CollisionDetection, closestCenter } from "@dnd-kit/core";

export const detectCollision: CollisionDetection = (args) => {
  return detectItemCollision(args);
};

const detectItemCollision: CollisionDetection = (args) => {
  console.log(args);

  const collisions = closestCenter(args);

  return collisions;
};
```

Then we give this attribute to `BoardContext` inside the proivder.

```tsx
collisionDetection = { detectCollision };
```

### Sortable algorithm

When user holds draggable between two lists,
it sticks in an infinite loop and moves the item back and forth between two lists.

This happens because item has the same distance to both lists.
So at first the item moves to list B,
in next render it moves to list A,
and so on and so forth.

To prevent this from happening, we will sort the lists by two factors:

1. First by distance (which will be done by `closestCorners` algorithm`)
2. Then by id (which always returns the same result if two lists have the same distance)

Note that based on our app structure, we only care about the first two collisions,
so we don't need to sort the entire array on second step.

Our algorithm and `js-docs` when you howevr over the `detectItemCollision` it will the description/docs related to it

```ts
/**
 * When user holds draggable between two lists,
 * it sticks in an infinite loop and moves the item back and forth between two lists.
 *
 * This happens because item has the same distance to both lists.
 * So at first the item moves to list B,
 * in next render it moves to list A,
 * and so on and so forth.
 *
 * To prevent this from happening, we will sort the lists by two factors:
 * 1. First by distance (which will be done by `closestCorners` algorithm`)
 * 2. Then by id (which always returns the same result if two lists have the same distance)
 *
 * Note that based on our app structure, we only care about the first two collisions,
 * so we don't need to sort the entire array on second step.
 */
const detectItemCollision: CollisionDetection = (args) => {
  console.log(args);

  const collisions = closestCenter(args);

  if (collisions.length < 2) {
    return collisions;
  }

  if (collisions[0].data?.value !== collisions[1].data?.value) {
    return collisions;
  }

  if (collisions[0].id < collisions[1].id) {
    return collisions;
  }
  return arraySwap(collisions, 0, 1);
};
```

### Adding react compiler to the project

1. First we need to see if we truely need react compiler or not.

First lets see how much fps we are getting: `ctrl + shift + p` in chrome. Then, type in fps and you will see fps detector which for websites are 60fps. If it is lower then you have problem if there is no UI action It will not show it correclty.

Second thing is seeing how long a component takes to load if it higher that 4ms it is problematic since 12ms for browser not (accurate number) is dedicated 16ms for js and and if you do the math there is just enough room for 4ms.

60 Frame Per Second = 16ms is required per Frame so 16-12 = 4ms

To check above use react profiler.

Okay now we know we need it

### Installing react compiler:

@depricated

Actuall this method is for older version of `vite` before v6.0.0

If you go this [link](https://react.dev/reference/react-compiler/compiling-libraries#setting-up-compilation) in docs you see this command for npm

```bash
npm install -D babel-plugin-react-compiler@latest
```

Then you need to configure it to the compiler you have:

```ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### for lates usage of react compiler refer to react's documentaion

For me it was

```bash
npm install -D @rolldown/plugin-babel
```

```ts
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import babel from "@rolldown/plugin-babel";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

Here is the updated [docs](https://react.dev/learn/react-compiler/installation) just go there and read and don't forget to do the configs correclty based on your bundler.

### How to know it works

Go to react-developer-tools component tab and you will see useMemo automatically appear there.

### Making list themselfs sortable

Good news is we don't need to repeat our create logic from earlier we only need 1 context.

1. First we need to add context arount the items we are using in this case lists or `List` component. So lets go to the component it is being used in this case `Board.tsx`

```tsx
<SortableContext items={lists.map((list) => list.id)}>
  <ul className={styles.lists}>
    {lists.map((list, listIndex) => {
      return (
        <li key={list.id}>
          <List listIndex={listIndex} list={list} />
        </li>
      );
    })}
  </ul>
</SortableContext>
```

Now lets move to the `List.tsx` component since we have a similar logic we change them to

```tsx
const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
  useSortable({
    id: item.id,
    data: { isList: false, listIndex, itemIndex, item },
  });
```

We almost do all the things we have done to the `listItem` component like so:

```tsx
import { type ReactNode } from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import clsx from "clsx";

import type { ListType } from "@/Types/list";

import ListHeader from "./components/ListHeader/ListHeader";
import ListItems from "./components/ListItems/ListItems";

import styles from "./List.module.css";

type Props = {
  presentational?: boolean;
  listIndex: number;
  list: ListType;
};

export default function List({
  presentational,
  list,
  listIndex,
}: Props): ReactNode {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: list.id, data: { isList: true, listIndex, list } });

  return (
    <div
      ref={setNodeRef}
      className={clsx(styles.list, presentational && styles.presentational)}
      style={{
        opacity: isDragging ? "0.4" : undefined,
        transform: CSS.Translate.toString(transform),
        transition,
      }}
      {...attributes}
    >
      <ListHeader
        listeners={listeners}
        title={list.title}
        listIndex={listIndex}
      />
      <ListItems
        presentational={presentational}
        list={list}
        listIndex={listIndex}
      />
    </div>
  );
}
```

Note that we are passing `presentational` all the way to the `ListItem` again. Create `props` if they are not available.

Also **Note** that we are not using listeners here because we are not gonna add the listener to the body or entirty of the List box just a small section we can grab and then move it.

Now we have it draggble we need to work on the logic lets go to move `list-recuder.ts`

We add this type then move on to the logic we also need to adjust the `DndProvider.tsx`

```ts
  | {
      type: "list_dragged_end";
      activeListIndex: number;
      overListIndex: number;
    };


   case "list_dragged_end": {
      const { activeListIndex, overListIndex } = action;

      if (activeListIndex === overListIndex) {
        return;
      }

      const activeList = draft[activeListIndex];

      draft.splice(activeListIndex, 1);
      draft.splice(overListIndex, 0, activeList);

      return;
    }
```

Now lets go to the list proider.

```tsx
export default function DndProvider({ children }: Props): ReactNode {
  const { dispatchList } = use(BoardContext);

  const sensors = useSensors(useSensor(PointerSensor));

  const [activeData, setActiveData] = useState<DraggableData | null>(null);

  const handleDragStart = (e: DragStartEvent): void => {
    setActiveData(e.active.data.current as DraggableData);
  };

  const handleDragOver = (e: DragOverEvent): void => {
    if (!e.over || e.active.data.current!.isList) {
      return;
    }

    dispatchList({
      type: "item_dragged_over",
      activeListIndex: e.active.data.current!.listIndex,
      activeItemIndex: e.active.data.current!.itemIndex,
      overItemIndex: e.over.data.current!.itemIndex,
      overListIndex: e.over.data.current!.listIndex,
    });
  };
  const handleDragEnd = (e: DragEndEvent): void => {
    setActiveData(null);

    if (!e.over) {
      return;
    }

    if (e.active.data.current!.isList) {
      dispatchList({
        type: "list_dragged_end",
        activeListIndex: e.active.data.current!.listIndex,
        overListIndex: e.over.data.current!.listIndex,
      });
    } else {
      dispatchList({
        type: "item_dragged_end",
        activeListIndex: e.active.data.current!.listIndex,
        activeItemIndex: e.active.data.current!.itemIndex,
        overItemIndex: e.over.data.current!.itemIndex,
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      collisionDetection={detectCollision}
    >
      {children}
      <DragOverlay>
        {activeData &&
          (activeData.isList ? (
            <List
              presentational
              listIndex={activeData.listIndex}
              list={activeData.list}
            />
          ) : (
            <ListItem
              presentational
              listIndex={activeData.listIndex}
              itemIndex={activeData.itemIndex}
              item={activeData.item}
            />
          ))}
      </DragOverlay>
    </DndContext>
  );
}
```

In trello when you move the list from under it changes but for us it doesn't so lets change it. Lets go to our custom algorithm directory in `collision-detection.ts`

```ts
export const detectCollision: CollisionDetection = (args) => {
  return args.active.data.current!.isList
    ? detectListCollision(args)
    : detectItemCollision(args);
};

const detectListCollision: CollisionDetection = (args) => {
  const pointerX = args.pointerCoordinates!.x;

  // Only keep lists, because active draggable is a list and ite can only drop on other lists.
  const containers = args.droppableContainers.filter(
    (container) => container.data.current!.isList,
  );

  let minDistance = Number.POSITIVE_INFINITY;
  let closestContainer = containers[0];

  // Loop over containers and find the closes one to pointer.
  // Since lists are placed horizontally, we only care about x-axis.
  containers.forEach((container) => {
    const distance = Math.abs(pointerX - container.rect.current!.left);

    if (distance < minDistance) {
      minDistance = distance;
      closestContainer = container;
    }
  });

  return [{ id: closestContainer.id }];
};
```

### Fixing scroll bug

When we we change item from a list to another one a scrollbar appears this because of the duration of transition and the rerender time of the list. To fix this issue we can handle this using little combinaition of css and js.

```tsx
export default function ListItem({
  listIndex,
  itemIndex,
  item,
  presentational,
}: Props): ReactNode {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
    over,
  } = useSortable({
    id: item.id,
    data: { isList: false, listIndex, itemIndex, item },
  });

  const overListIndex = over?.data.current?.listIndex;

  return (
    <div
      ref={setNodeRef}
      className={clsx(
        styles["list-item"],
        presentational && styles.presentational,
      )}
      style={{
        opacity: isDragging ? "0.4" : undefined,
        transform: CSS.Translate.toString(transform),
        transition: listIndex === overListIndex ? transition : undefined,
      }}
```

### Completing website feature

We want to create a modals with forms and since we have a lot of modal with forms we gonna create a new direcory called `Modals`

Then we move `CreateListItemModal.` and `Modal` components to this and then rename `CreateListItemModal` to `ListModal` since we gonna change the logic and usage for this.

Next we gonan create a component called `FormModal` and then define props for it

These are the thy type of props we are going to need later on.

```tsx
type ModalProps = {
  modalRef: ComponentProps<typeof Modal>["ref"];
  heading: ComponentProps<typeof Modal>["heading"];
};

type FormProps = Omit<ComponentProps<"form">, "ref"> & {
  formRef?: RefObject<HTMLFormElement | null>;
  extraActions?: ReactNode;
};

type Props = ModalProps & FormProps;
```

Now to make the usage of the component easier we must also pass children to it as well.

```tsx
export default function FormModal({
  modalRef,
  formRef,
  heading ,
  extraActions,
  children,
  ...otherProps
}: Props): ReactNode {
```

### Ref object vs Ref Callback

Ref object is just a regular ref we used to use like this :

```tsx
const internalFormRef = useRef<HTMLFormElement>(null);
```

But ref callback is a function that we need to use it like here:

Note that it gives us a input called `node` => node is the form we have here.

Then inside that we can set what our form or object is even when user doesn't pass it along.

```tsx
  <form
        ref={(node) => {
          internalFormRef.current = node;
        }}
```

This is just same as the saying

```tsx
<Form ref={internalFormRref}></Form>
```

But we want to set the outsider `formRef` we are getting as prop.

We need to have a conditional saying if form ref exists then use node, instead

```tsx
    <form
        ref={(node) => {
          internalFormRef.current = node;
          if (formRef) {
            formRef.current = node;
          }
        }}
```

After we completed coding and styling of `FormModal` component now we need to use it inside ListItemModal which will look like this at the end note since we don't want children to change its parent's style we gonna `Pick` the props and add ours as needed.

```tsx
import {
  type ComponentProps,
  type ReactNode,
  type SubmitEvent,
  use,
  useState,
} from "react";

import { toast } from "react-toastify";

import clsx from "clsx";

import type { ListItemType } from "@/Types/list-item";

import BoardContext from "@/context/Board-context";

import TextInput from "../../components/TextInput/TextInput";
import FormModal from "../FromModal/FormModal";

import styles from "./ListItemModal.module.css";

type Values = Omit<ListItemType, "id">;

type Props = Pick<ComponentProps<typeof FormModal>, "modalRef"> & {
  listIndex: number;
};

export default function ListItemModal({
  modalRef,
  listIndex,
}: Props): ReactNode {
  const [titleError, setTitleError] = useState<string | null>(null);

  const { dispatchList } = use(BoardContext);

  const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values: Values = {
      title: formData.get("title") as string,
    };

    if (!validateTitle(values.title)) {
      return;
    }

    const id = crypto.randomUUID();

    dispatchList({ type: "item_created", listIndex, item: { id, ...values } });
    toast.success("Item added successfully");
    modalRef.current?.close();
  };

  const handleFormReset = (): void => {
    setTitleError(null);
  };

  const validateTitle = (title: unknown): boolean => {
    if (typeof title !== "string") {
      setTitleError("Title must be a string");
      return false;
    }
    if (title.length < 3) {
      setTitleError("Title must be at least 3 characters.");
      return false;
    }
    return true;
  };

  return (
    <FormModal
      modalRef={modalRef}
      className={clsx(styles["list-item-modal"])}
      heading="Create a New Item"
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
    >
      <TextInput label="Title" name="title" error={titleError} />
    </FormModal>
  );
}
```

Now we need to find out where we used `ListItemModal` comp to pass in the correct props or use it correctly.

### Seperating toolbar from Board

Inside our Board.tsx component we see that we need to seperate extra code into smaller component to contain their own logic in their own folders.

So we create a component folder in there. And we seperate toolbar and list item into new group.

### Using Modal

now we have add button in our `BoardToolbar.tsx` component but we need a logic to add it.

In order to do so we first need to open our `list-reducer.ts` in our code editor.

- In order to keep the code clean you can move `list` related code, above the `items` related code since it is children.
- or not this is presonal preference but I rather do it this way.

Type is :

```ts
{
  type: "list_created";
  list: ListType;
}
```

and logic is very simple just need to push it.

```ts
    case "list_created": {
      draft.push(action.list);
      return;
    }
```

Now lets create `ListModal` component similar to `ListItemModal`.

```tsx
import {
  type ComponentProps,
  type ReactNode,
  type SubmitEvent,
  use,
  useState,
} from "react";

import { toast } from "react-toastify";

import clsx from "clsx";

import type { ListType } from "@/Types/list";

import BoardContext from "@/context/Board-context";

import TextInput from "../../components/TextInput/TextInput";
import FormModal from "../FromModal/FormModal";

import styles from "./ListModal.module.css";

type Values = Omit<ListType, "id" | "items">;

type Props = Pick<ComponentProps<typeof FormModal>, "modalRef"> & {};

export default function ListModal({ modalRef }: Props): ReactNode {
  const [titleError, setTitleError] = useState<string | null>(null);

  const { dispatchList } = use(BoardContext);

  const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values: Values = {
      title: formData.get("title") as string,
    };

    if (!validateTitle(values.title)) {
      return;
    }

    const id = crypto.randomUUID();

    dispatchList({ type: "list_created", list: { id, items: [], ...values } });
    toast.success("List created successfully");
    modalRef.current?.close();
  };

  const handleFormReset = (): void => {
    setTitleError(null);
  };

  const validateTitle = (title: unknown): boolean => {
    if (typeof title !== "string") {
      setTitleError("Title must be a string");
      return false;
    }
    if (title.length < 3) {
      setTitleError("Title must be at least 3 characters.");
      return false;
    }
    return true;
  };

  return (
    <FormModal
      modalRef={modalRef}
      className={clsx(styles["list-modal"])}
      heading="Create a New List"
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
    >
      <TextInput label="Title" name="title" error={titleError} />
    </FormModal>
  );
}
```

Afer this we need to use it and usage is very simple inside our `BoardToolbar.tsx`

```tsx
import { type ReactNode, useRef } from "react";

import ListModal from "@/Modals/ListModal/ListModal";

import IconsButton from "@/components/IconButton/IconsButton";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import styles from "./BoardToolbar.module.css";

export default function BoardToolbar(): ReactNode {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleCreateListButtonClick = (): void => {
    modalRef.current?.showModal();
  };
  return (
    <div className={styles["board-toolbar"]}>
      <div className={styles.title}>Board Title</div>
      <div className={styles.actions}>
        <IconsButton>
          <MingcuteEdit2Line />
        </IconsButton>
        <IconsButton onClick={handleCreateListButtonClick}>
          <MingcuteAddLine />
        </IconsButton>
      </div>

      <ListModal modalRef={modalRef} />
    </div>
  );
}
```

Just create and pass a ref and handle open.

### Editin button component

We added `text` and `danger` but style existed because we added it when we created the button but we never utlized it.

```tsx
type Props = ComponentProps<"button"> & {
  variant?: "solid" | "outlined" | "text";
  color?: "default" | "primary" | "danger";
};
```

To create a remove button and delete a list just like a modal first we need to write its logic in `list-reducer.ts` in the react.

Types

```ts
{
  type: "list_removed";
  listIndex: number;
}
```

Logic

```ts
    case "list_removed": {
      draft.splice(action.listIndex, 1);

      return;
    }
```

Now we need to add a condition in `listModal`

```tsx
import {
  type ComponentProps,
  type ReactNode,
  type SubmitEvent,
  use,
  useState,
} from "react";

import { toast } from "react-toastify";

import clsx from "clsx";

import type { ListType } from "@/Types/list";

import Button from "@/components/Button/Button";

import BoardContext from "@/context/Board-context";

import TextInput from "../../components/TextInput/TextInput";
import FormModal from "../FromModal/FormModal";

import styles from "./ListModal.module.css";

type Values = Omit<ListType, "id" | "items">;

type Props = Pick<ComponentProps<typeof FormModal>, "modalRef"> & {
  listIndex?: number;
};

export default function ListModal({ modalRef, listIndex }: Props): ReactNode {
  const [titleError, setTitleError] = useState<string | null>(null);

  const { dispatchList } = use(BoardContext);

  const handleRemoveButtonClick = (): void => {
    if (listIndex === undefined) {
      return;
    }

    dispatchList({ type: "list_removed", listIndex });
    toast.success("List removed successfully");

    modalRef.current?.close();
  };

  const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values: Values = {
      title: formData.get("title") as string,
    };

    if (!validateTitle(values.title)) {
      return;
    }

    const id = crypto.randomUUID();

    dispatchList({ type: "list_created", list: { id, items: [], ...values } });
    toast.success("List created successfully");
    modalRef.current?.close();
  };

  const handleFormReset = (): void => {
    setTitleError(null);
  };

  const validateTitle = (title: unknown): boolean => {
    if (typeof title !== "string") {
      setTitleError("Title must be a string");
      return false;
    }
    if (title.length < 3) {
      setTitleError("Title must be at least 3 characters.");
      return false;
    }
    return true;
  };

  return (
    <FormModal
      modalRef={modalRef}
      className={clsx(styles["list-modal"])}
      heading="Create a New List"
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
      extraActions={
        listIndex !== undefined && (
          <Button
            onClick={handleRemoveButtonClick}
            type="button"
            variant="text"
            color="danger"
          >
            Remove
          </Button>
        )
      }
    >
      <TextInput label="Title" name="title" error={titleError} />
    </FormModal>
  );
}
```

We need to use it inside the `ListHeader.tsx` component but I have changed few thing in there as well so the end code looks like this:

```tsx
import { type ReactNode, useRef } from "react";

import type { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

import ListItemModal from "@/Modals/ListItemModal/ListItemModal";
import ListModal from "@/Modals/ListModal/ListModal";

import IconsButton from "@/components/IconButton/IconsButton";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteDotsLine from "@/icons/MingcuteDotsLine";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import styles from "./ListHeader.module.css";

type Props = {
  listeners?: SyntheticListenerMap;
  title: string;
  listIndex: number;
};

export default function ListHeader({
  title,
  listIndex,
  listeners,
}: Props): ReactNode {
  const ListModalRef = useRef<HTMLDialogElement>(null);
  const ListIteModalRef = useRef<HTMLDialogElement>(null);

  const handleCreateListButtonClick = (): void => {
    ListModalRef.current?.showModal();
  };

  const handleCreateListItemButtonClick = (): void => {
    ListIteModalRef.current?.showModal();
  };
  return (
    <div className={styles["list-header"]}>
      <div className={styles["drag-handle"]} {...listeners}>
        <MingcuteDotsLine />
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.actions}>
        <IconsButton onClick={handleCreateListButtonClick}>
          <MingcuteEdit2Line />
        </IconsButton>
        <IconsButton onClick={handleCreateListItemButtonClick}>
          <MingcuteAddLine />
        </IconsButton>
      </div>
      <ListItemModal modalRef={ListIteModalRef} listIndex={listIndex} />
      <ListModal modalRef={ListModalRef} listIndex={listIndex} />
    </div>
  );
}
```

### Show tital in remove ListModal

To edit the title which requires a logic we again head to `list-reducer.ts`
Type is here not that when we Add `Partial`to a type it means all the values of that type is `optional` jsut like the times we are using `?` near the defined types. This way we can change whatever is passed to us and keep the others the same.

```ts
type
| {
      type: "list_edited";
      listIndex: number;
      list: Partial<ListType>;
    }
```

Logic:

```ts
    case "list_edited": {
      draft[action.listIndex] = { ...draft[action.listIndex], ...action.list };
      return;
    }
```

Inside List modal component we need to make few changes as well:

```tsx
type Props = Pick<ComponentProps<typeof FormModal>, "modalRef"> & {
  listIndex?: number;
  defaultValues?: Partial<Values>;
};

export default function ListModal({
  modalRef,
  listIndex,
  defaultValues,
}: Props): ReactNode {
  const [titleError, setTitleError] = useState<string | null>(null);

  const { dispatchList } = use(BoardContext);

  const handleRemoveButtonClick = (): void => {
    if (listIndex === undefined) {
      return;
    }

    dispatchList({ type: "list_removed", listIndex });
    toast.success("List removed successfully");

    modalRef.current?.close();
  };

  const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values: Values = {
      title: formData.get("title") as string,
    };

    if (!validateTitle(values.title)) {
      return;
    }

    if (listIndex !== undefined) {
      dispatchList({ type: "list_edited", listIndex, list: values });
      toast.success("List edited successfully");
    } else {
      const id = crypto.randomUUID();
      dispatchList({
        type: "list_created",
        list: { id, items: [], ...values },
      });
      toast.success("List created successfully");
    }

    modalRef.current?.close();
  };

  const handleFormReset = (): void => {
    setTitleError(null);
  };

  const validateTitle = (title: unknown): boolean => {
    if (typeof title !== "string") {
      setTitleError("Title must be a string");
      return false;
    }
    if (title.length < 3) {
      setTitleError("Title must be at least 3 characters.");
      return false;
    }
    return true;
  };

  return (
    <FormModal
      modalRef={modalRef}
      className={clsx(styles["list-modal"])}
      heading={
        listIndex !== undefined ? "Edit existing list" : "Create a new list "
      }
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
      extraActions={
        listIndex !== undefined && (
          <Button
            onClick={handleRemoveButtonClick}
            type="button"
            variant="text"
            color="danger"
          >
            Remove
          </Button>
        )
      }
    >
      <TextInput
        label="Title"
        name="title"
        defaultValue={defaultValues?.title}
        error={titleError}
      />
    </FormModal>
```

And inside list header as well:

```tsx
import { type ReactNode, useRef } from "react";

import type { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

import ListItemModal from "@/Modals/ListItemModal/ListItemModal";
import ListModal from "@/Modals/ListModal/ListModal";
import type { ListType } from "@/Types/list";

import IconsButton from "@/components/IconButton/IconsButton";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteDotsLine from "@/icons/MingcuteDotsLine";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import styles from "./ListHeader.module.css";

type Props = {
  listeners?: SyntheticListenerMap;
  list: ListType;
  listIndex: number;
};

export default function ListHeader({
  list,
  listIndex,
  listeners,
}: Props): ReactNode {
  const ListModalRef = useRef<HTMLDialogElement>(null);
  const ListIteModalRef = useRef<HTMLDialogElement>(null);

  const handleCreateListButtonClick = (): void => {
    ListModalRef.current?.showModal();
  };

  const handleCreateListItemButtonClick = (): void => {
    ListIteModalRef.current?.showModal();
  };
  return (
    <div className={styles["list-header"]}>
      <div className={styles["drag-handle"]} {...listeners}>
        <MingcuteDotsLine />
        <div className={styles.title}>{list.title}</div>
      </div>
      <div className={styles.actions}>
        <IconsButton onClick={handleCreateListButtonClick}>
          <MingcuteEdit2Line />
        </IconsButton>
        <IconsButton onClick={handleCreateListItemButtonClick}>
          <MingcuteAddLine />
        </IconsButton>
      </div>
      <ListItemModal modalRef={ListIteModalRef} listIndex={listIndex} />
      <ListModal
        modalRef={ListModalRef}
        listIndex={listIndex}
        defaultValues={list}
      />
    </div>
  );
}
```

last things last we need to go inside List and pass list as list prop instead of title to fix the issue and everything should work perfectly.

### Creating Description

Copy `TextInput.tsx` component so we can edit it to create `TextArea.tsx` component. few tweaks and we are there but most important stuff was about css

Herr is how we set min and max and default line height for text input.

Note that if you use emojies this calcualation could be different based on support of that font on emojis.

```css
.text-area {
  --padding: 0.5rem;
  --border-width: 1px;
  --padding-and-border: calc(2 * var(--padding) + 2 * var(--border-width));

  display: grid;

  textarea {
    background-color: var(--color-surface-3);
    color: var(--color-text);

    min-block-size: calc(1lh + var(--padding-and-border));
    block-size: calc(3lh + var(--padding-and-border));
    max-block-size: calc(5lh + var(--padding-and-border));
    resize: vertical;

    padding: var(--padding);

    border: var(--border-width) solid var(--color-border);
    border-radius: var(--border-radius-2);

    &:focus {
      outline: 2px solid var(--color-primary);
      outline-offset: -2px;
    }
  }

  .error {
    color: var(--color-danger);
  }

  &.error {
    textarea {
      border-color: var(--color-danger);
    }
  }
}
```

Next we are going to change ListItemType to add few extra fields.

```ts
export type ListItemType = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
};
```

The reason dueDate is not `Date`and it is `string` is because input and localStorage and other ... stuff it is using their input and output is `string` and makes conversion and validation check `harder`.

**Next** we go to `listItemModal` component and add our new `TextArea` component for description and `TextIput` for `dueDate`

```tsx
 <TextArea label="Description" name="description" />
 <TextInput label="Due Date" type="date" name="date" />
```

### Item Edited Modal

Just like list item we want to be able to edit the list item modal. In order to do this first we need to have a logic for it, so again we go to `list-reducer.ts` and add below code

Type

```ts
 | {
      type: "item_edited";
      listIndex: number;
      itemIndex: number;
      item: Partial<ListItemType>;
    };
```

Logic:

```ts
   case "item_edited": {
      const list = draft[action.listIndex];
      list.items[action.itemIndex] = {
        ...list.items[action.itemIndex],
        ...action.item,
      };
      return;
```

Now we move to ListItemModal:

```tsx
import {
  type ComponentProps,
  type ReactNode,
  type SubmitEvent,
  use,
  useState,
} from "react";

import { toast } from "react-toastify";

import clsx from "clsx";

import type { ListItemType } from "@/Types/list-item";

import TextArea from "@/components/TextArea/TextArea";

import BoardContext from "@/context/Board-context";

import TextInput from "../../components/TextInput/TextInput";
import FormModal from "../FromModal/FormModal";

import styles from "./ListItemModal.module.css";

type Values = Omit<ListItemType, "id">;

type Props = Pick<ComponentProps<typeof FormModal>, "modalRef"> & {
  listIndex: number;
  itemIndex?: number;
  defaultValues: Partial<Values>;
};

export default function ListItemModal({
  modalRef,
  listIndex,
  itemIndex,
  defaultValues,
}: Props): ReactNode {
  const [titleError, setTitleError] = useState<string | null>(null);

  const { dispatchList } = use(BoardContext);

  const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values: Values = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      dueDate: formData.get("date") as string,
    };

    if (!validateTitle(values.title)) {
      return;
    }
    if (itemIndex !== undefined) {
      dispatchList({ type: "item_edited", listIndex, itemIndex, item: values });
      toast.success("Item edited successfully");
      modalRef.current?.close();
    } else {
      const id = crypto.randomUUID();

      dispatchList({
        type: "item_created",
        listIndex,
        item: { id, ...values },
      });
      toast.success("Item added successfully");
      modalRef.current?.close();
    }
  };

  const handleFormReset = (): void => {
    setTitleError(null);
  };

  const validateTitle = (title: unknown): boolean => {
    if (typeof title !== "string") {
      setTitleError("Title must be a string");
      return false;
    }
    if (title.length < 3) {
      setTitleError("Title must be at least 3 characters.");
      return false;
    }
    return true;
  };

  return (
    <FormModal
      modalRef={modalRef}
      className={clsx(styles["list-item-modal"])}
      heading={
        itemIndex !== undefined ? "Edit existing item" : "Create new Item"
      }
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
    >
      <TextInput
        label="Title"
        name="title"
        defaultValue={defaultValues?.title}
        error={titleError}
      />
      <TextArea
        label="Description"
        name="description"
        defaultValue={defaultValues?.description}
      />
      <TextInput
        label="Due Date"
        type="date"
        name="date"
        defaultValue={defaultValues?.dueDate}
      />
    </FormModal>
  );
}
```

Sortable causes issue and weird dragging bug because it modal is the child of them so we need to seperate them using `react`'s `fragment`

```tsx
import { type MouseEvent, type ReactNode, useRef } from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import clsx from "clsx";

import ListItemModal from "@/Modals/ListItemModal/ListItemModal";
import type { ListItemType } from "@/Types/list-item";

import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import IconsButton from "../IconButton/IconsButton";

import styles from "./ListItem.module.css";

type Props = {
  listIndex: number;
  itemIndex: number;
  item: ListItemType;
  presentational?: boolean;
};

export default function ListItem({
  listIndex,
  itemIndex,
  item,
  presentational,
}: Props): ReactNode {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
    over,
  } = useSortable({
    id: item.id,
    data: { isList: false, listIndex, itemIndex, item },
  });

  const modalRef = useRef<HTMLDialogElement>(null);

  const overListIndex = over?.data.current?.listIndex;

  const handleEditButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();

    modalRef.current?.showModal();
  };

  return (
    <>
      <div
        ref={setNodeRef}
        className={clsx(
          styles["list-item"],
          presentational && styles.presentational,
        )}
        style={{
          opacity: isDragging ? "0.4" : undefined,
          transform: CSS.Translate.toString(transform),
          transition: listIndex === overListIndex ? transition : undefined,
        }}
        {...listeners}
        {...attributes}
      >
        {item.title}
        <IconsButton onPointerDown={handleEditButtonClick}>
          <MingcuteEdit2Line />
        </IconsButton>
      </div>
      <ListItemModal
        modalRef={modalRef}
        listIndex={listIndex}
        itemIndex={itemIndex}
        defaultValues={item}
      />
    </>
  );
}
```

And then also we need to change the direct button child styles to show when we are not howering on them:

from

```css
    button
```

to

```css
    > button
```

### Fix onMouseDow bug

When we click on item to edit and we click and hold the mouse and move it outside it closes the modal to fix this first we need to get to `Modal` component

```tsx
type Props = ComponentProps<"dialog"> & {
  heading: string;
  contentClassName?: string;
  ref: RefObject<HTMLDialogElement | null>;
};

export default function Modal({
  className,
  contentClassName,
  heading,
  ref,
  children,
  onPointerDown,
  ...otherProps
}: Props): ReactNode {
  const handleCloseModalButtonClick = (): void => {
    ref.current?.close();
  };

  const handleDialogPointerDown = (
    e: PointerEvent<HTMLDialogElement>,
  ): void => {
    if (e.target === e.currentTarget) {
      ref.current?.close();
    }
    onPointerDown?.(e);
  };

  return (
    <dialog
      ref={ref}
      className={clsx(styles.modal, className)}
      onPointerDown={handleDialogPointerDown}
      {...otherProps}
    >
      <header>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.actions}>
          <IconsButton onClick={handleCloseModalButtonClick}>
            <MingcuteCloseLine />
          </IconsButton>
        </div>
      </header>
      <main className={contentClassName}>{children}</main>
    </dialog>
  );
}
```

### Adding remove button to ItemList Modal

We already have a delete logic in reducer for list item so there is no need for it.

Second thing is we need to do the same thing we did the to list remove extra actions
except this time `listIndex` becomes `itemIndex`

```tsx
  const handleRemoveButtonClick = (): void => {
    if (itemIndex === undefined) {
      return;
    }

    dispatchList({ type: "item_removed", itemIndex, listIndex });
    toast.success("Item removed successfully");

    modalRef.current?.close();
  };


      extraActions={
        itemIndex !== undefined && (
          <Button
            onClick={handleRemoveButtonClick}
            type="button"
            variant="text"
            color="danger"
          >
            Remove
          </Button>
        )
      }
```

Just like this we are done.

### Adding new Type for Board

We need board colors to be constant not to be changed we need array of them also we need to freeze them so we don't accidently change them later using `Object.freeze` method then we need then type cast it to `const` using typescript.

In order to pull this off:

```typescript
import type { ListType } from "@/types/list.ts";

export type BoardType = {
  id: string;
  title: string;
  description: string;
  color: BoardColor;
  lists: ListType[];
};

export const BOARD_COLORS = Object.freeze([
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
  "purple",
  "gray",
] as const);

export type BoardColor = (typeof BOARD_COLORS)[number];
```

And we change our `BoardCard.tsx` component to be like

```tsx
import type { BoardType } from "@/Types/board";

type Props = {
  board: BoardType;
};

export default function BoardCard({ board }: Props): ReactNode {
  return (
    <div className={clsx(styles["board-card"], board.color)}>
      <div className={styles.cover}></div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.title}>{board.title}</div>
          <Link to={`board/${board.id}`}>View</Link>
        </div>
        <p className={styles.description}>{board.description}</p>
      </div>
    </div>
  );
}
```

- Change list-data.ts to boards-data.ts because that is the data we are having now.

boardContext and BoardProiver are providing us with the list and not the Boards so name must be change to listProvider so later we can have the dedicated one for Boards.

### Importent when using Reduce

When we `useReduce` like thisl

```tsx
const [boards, dispatchBoard] = useImmerReducer(boardReducer, load());
```

When we use `load()` what ever it returns is our initial data on initial render, and on other renders it will not call it and use the value it has in the RAM. But when you have this kinda code in javascript, doesn't know what react going to do with this data. Javacript sees that thre is function and second parameter is load() when this fucntion is being called load() will also get called. useReducer will tell react not to call load(). Here in our code nothing weird will happen since we are loading from local storage but in other scenarips for example when we are fethcing some data every single time there will be a fetch request. So the correct way to use this is :

```tsx
const [boards, dispatchBoard] = useImmerReducer(boardReducer, undefined, load);
```

`undefined` is the input for the `load` function. In this way `load` will not be called.

### Creating a board-page-context

Instead of getting all the boards we need a board based on the page this logic is also repeated in few other places such as when we have modal we want to edit Board Title or so.

### Cool Typecasting

```tsx
import { createContext } from "react";

import type { BoardType } from "@/types/board";

type ContextValue = {
  board: BoardType;
};

const BoardPageContext = createContext<ContextValue>({
  // type casting istead of filling it since this is so useless.
  board: {} as BoardType,
});

// or
const BoardPageContext = createContext<ContextValue>({} as ContextValue);

export default BoardPageContext;
```

We are always defining our provider in way that we don't need their initial values, that is the reason we can do this otherwise we need to provide values **pay attention**.

But for use we can edit all of our contexts.

### How to get access `use(BoardContext);` within component

```tsx
export default function BoardPage(): ReactNode {
  return (
    <BoardProvider>
      <BoardPageContent />
    </BoardProvider>
  );
}

function BoardPageContent(): ReactNode {
  const { id } = useParams();

  const { boards } = use(BoardContext);

  const board = boards.find((board) => board.id === id);
  // could be undefined

  if (!board) {
    // return <Navigate to={}/>
    return <NotFoundPage />;
  }

  return (
    <ListsProvider>
      <DndProvider>
        <div className={styles["board-page"]}>
          <Board />
        </div>
      </DndProvider>
    </ListsProvider>
  );
}
```

### Feedback navigation/navigate

- This way you can return a component instead of failing first while partially reloading the rest and giving error
- You can return you function
- You can use a component Called Navigate and navigate to where you like
- URL won't reset so user can tell what went wrong.

```tsx
if (!board) {
  return <Navigate to={} />;
  or;
  return <NotFoundPage />;
}
```

Short briefing:

- So we have a BoardsProvider this gets the list of the all boards.
- Since we want to get a `use` we need to have a secondary component.
- Then we get id from URL
- We get all the Boardlist from the `use` `BoardContext`
- we get the boad with a id equal to url id
- if not found we show the not found page
- If it exist we provide it.

```tsx
import { type ReactNode, use } from "react";

import { useParams } from "react-router";

import BoardPageProvider from "@/Provider/BoardPageProvider";
import BoardProvider from "@/Provider/BoardProvider";
import DndProvider from "@/Provider/DndProvider/DndProvider";
import ListsProvider from "@/Provider/ListsProvider";

import Board from "@/components/Board/Board";

import BoardContext from "@/context/board-context";

import NotFoundPage from "../notFoundPage/NotFoundPage";

import styles from "./BoardPage.module.css";

export default function BoardPage(): ReactNode {
  return (
    <BoardProvider>
      <BoardPageContent />
    </BoardProvider>
  );
}

function BoardPageContent(): ReactNode {
  const { id } = useParams();

  const { boards } = use(BoardContext);

  const board = boards.find((board) => board.id === id);

  if (!board) {
    return <NotFoundPage />;
  }

  return (
    <BoardPageProvider board={board}>
      <ListsProvider>
        <DndProvider>
          <div className={styles["board-page"]}>
            <Board />
          </div>
        </DndProvider>
      </ListsProvider>
    </BoardPageProvider>
  );
}
```

Make sure you List and Board context imports are correct. This cauased me a huge bug which I barely were able to find the source from.

We need to do the similar thing in `HomePage.tsx` as well

```tsx
import { type ReactNode, use } from "react";

import BoardsProvider from "@/Provider/BoardProvider";

import BoardCard from "@/components/BoardCard/BoardCard";
import Button from "@/components/Button/Button";

import BoardContext from "@/context/board-context";

import styles from "./HomePage.module.css";

export default function HomePage(): ReactNode {
  return (
    <BoardsProvider>
      <HomePageContent />
    </BoardsProvider>
  );
}

function HomePageContent(): ReactNode {
  const { boards } = use(BoardContext);

  return (
    <div className={styles["home-page"]}>
      <div className={styles.header}>
        <h1 className={styles.title}>Boards</h1>
        <Button color="primary">Create</Button>
      </div>
      <ul className={styles.boards}>
        {boards.map((board) => {
          return (
            <li key={board.id}>
              <BoardCard board={board} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
```

### Fixing List Provider

- List provider allows (enables) us to change/update the current board's lists.
- when we change it it called `dispatchBoard` which only changes the current boards because we gave it an `ID` of the `board` we have
- above happen because of `useEffect` inside our `BoardsPoriver` whenever a state changes it wil call `save()` function which saves it.

Note that whenever we need number of list we need to use `ListContext` because of its dispatch and whenver we need Boards we need to use `BoardPageContext`

```tsx
import { type PropsWithChildren, type ReactNode, use, useEffect } from "react";

import { useImmerReducer } from "use-immer";

import { listReducer } from "@/reducer/list-reducer";

import BoardContext from "@/context/board-context";
import BoardPageContext from "@/context/board-page-context";
import ListsContext from "@/context/lists-context";

type Props = PropsWithChildren;

export default function ListsProvider({ children }: Props): ReactNode {
  const { dispatchBoards } = use(BoardContext);
  const { board } = use(BoardPageContext);

  const [lists, dispatchList] = useImmerReducer(listReducer, board.lists);

  useEffect(() => {
    dispatchBoards({
      type: "board_edited",
      boardId: board.id,
      board: { lists },
    });
  }, [board.id, dispatchBoards, lists]);

  return (
    <ListsContext
      value={{
        lists,
        dispatchList,
      }}
    >
      {children}
    </ListsContext>
  );
}
```

Complete Walkthrough:

1. We have a `BoardsPage` comp that reads and writes to local storage on change. To update anything related to `Boards` we need to use this.

2. `BoardPageProvider` this is the current Board, it is url based and gets the board id from url and only thing it does it to provide it.

3. ListProvider is the thing we used to update our lists change thier order and and remove stuff from it and items as well and it has a dispatch and returns the data as well.

### Adding Coloring input

This input is very important and teaches us alot of things for example we want to design and code this comp in a way that it works like a normal input meaning we can read its value using `reacts ref` or even utlize `controlled` and `uncontrolled` input we want to get the value and name from `formData` and use it. But the way it and looks is custom.

It is simlar to TextInput.tsx comp so we copy that first.

So the only way to have access values is using input element but we don't want to display input. To do this we need

```tsx
<input id={id} type="hidden" {...otherProps} />
```

```tsx
import { type ComponentProps, type ReactNode, useId, useState } from "react";

import clsx from "clsx";

import { BOARD_COLORS, type BoardColor } from "@/types/board";

import styles from "./ColorInput.module.css";

type Props = Omit<
  ComponentProps<"input">,
  "type" | "value" | "defaultValue" | "onChange"
> & {
  label: string;
  value?: BoardColor;
  defaultValue?: BoardColor;
  onChange?: (value: BoardColor) => void;
  error?: string | null;
};

export default function ColorInput({
  className,
  label,
  error,
  value,
  defaultValue,
  onChange,
  ...otherProps
}: Props): ReactNode {
  const id = useId();

  const [value, setValue] = useState<BoardColor>(defaultValue ?? "blue");

  const handleButtonClick = (color: BoardColor): void => {
    setValue(color);

    onChange?.(color);
  };

  return (
    <div
      className={clsx(
        styles["color-input"],
        error ? styles.error : "",
        className,
      )}
    >
      <div className={styles.colors}>
        {BOARD_COLORS.map((color) => {
          return (
            <button
              key={color}
              className={clsx(color)}
              type="button"
              onClick={() => handleButtonClick(color)}
            >
              {color}
            </button>
          );
        })}
      </div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="hidden" value={value} {...otherProps} />
      <span className={styles.error}>{error || "\u00A0"}</span>
    </div>
  );
}
```

Our `ColorInput.tsx` have a slight bug here. What if user passes a value and it becomes controlled input. to fix this issue we need to have a name change operation:

It has 2 state: either user pass the value or not

```tsx
export default function ColorInput({
  className,
  label,
  error,
  value: controlledValue,
  defaultValue,
  onChange,
  ...otherProps
}: Props): ReactNode {
  const id = useId();

  const [uncontrolledValue, setUncontrolledValue] = useState<BoardColor>(
    defaultValue ?? "blue",
  );

  const value = controlledValue ?? uncontrolledValue;

  const handleButtonClick = (color: BoardColor): void => {
    setUncontrolledValue(color);

    onChange?.(color);
  };

  return (
    <div
      className={clsx(
        styles["color-input"],
        error ? styles.error : "",
        className,
      )}
    >
      <div className={styles.colors}>
        {BOARD_COLORS.map((color) => {
          return (
            <button
              key={color}
              className={clsx(color)}
              type="button"
              onClick={() => handleButtonClick(color)}
            >
              {color}
            </button>
          );
        })}
      </div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="hidden" value={value} {...otherProps} />
      <span className={styles.error}>{error || "\u00A0"}</span>
    </div>
  );
}
```

Also we want to have some visuals about either it is active or not:

```tsx
return (
            <button
              key={color}
              className={clsx(color, color === value && styles.active)}
              type="button"
              onClick={() => handleButtonClick(color)}
            >
              {color === value && styles.active && <MingcuteCheckFill />}
            </button>
```

### Creating BoardModal

Copy paste the `List.tsx` and continue as we see fit.

```tsx
import {
  type ComponentProps,
  type ReactNode,
  type SubmitEvent,
  use,
  useState,
} from "react";

import { useNavigate } from "react-router";

import { toast } from "react-toastify";

import clsx from "clsx";

import Button from "@/components/Button/Button";
import ColorInput from "@/components/ColorInput/ColorInput";
import TextArea from "@/components/TextArea/TextArea";

import BoardContext from "@/context/board-context";

import type { BoardColor, BoardType } from "@/types/board";

import TextInput from "../../components/TextInput/TextInput";
import FormModal from "../FromModal/FormModal";

import styles from "./BoardModal.module.css";

type Values = Omit<BoardType, "id" | "lists">;

type Props = Pick<ComponentProps<typeof FormModal>, "modalRef"> & {
  boardId?: string;
  defaultValues?: Partial<Values>;
};

export default function BoardModal({
  modalRef,
  boardId,
  defaultValues,
}: Props): ReactNode {
  const [titleError, setTitleError] = useState<string | null>(null);

  const navigate = useNavigate();

  const { dispatchBoards } = use(BoardContext);

  const handleRemoveButtonClick = (): void => {
    if (boardId === undefined) {
      return;
    }

    dispatchBoards({ type: "board_removed", boardId });
    toast.success("Board removed successfully");

    modalRef.current?.close();

    navigate("/");
  };

  const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values: Values = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      color: formData.get("color") as BoardColor,
    };

    if (!validateTitle(values.title)) {
      return;
    }

    if (boardId !== undefined) {
      dispatchBoards({ type: "board_edited", boardId, board: values });
      toast.success("Board edited successfully");
    } else {
      const id = crypto.randomUUID();
      dispatchBoards({
        type: "board_created",
        board: { id, lists: [], ...values },
      });
      toast.success("Board created successfully");
    }

    modalRef.current?.close();
  };

  const handleFormReset = (): void => {
    setTitleError(null);
  };

  const validateTitle = (title: unknown): boolean => {
    if (typeof title !== "string") {
      setTitleError("Title must be a string");
      return false;
    }
    if (title.length < 3) {
      setTitleError("Title must be at least 3 characters.");
      return false;
    }
    return true;
  };

  return (
    <FormModal
      modalRef={modalRef}
      className={clsx(styles["board-modal"])}
      heading={
        boardId !== undefined ? "Edit existing board" : "Create a new board "
      }
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
      extraActions={
        boardId !== undefined && (
          <Button
            onClick={handleRemoveButtonClick}
            type="button"
            variant="text"
            color="danger"
          >
            Remove
          </Button>
        )
      }
    >
      <TextInput
        label="Title"
        name="title"
        defaultValue={defaultValues?.title}
        error={titleError}
      />
      <TextArea
        label="Description"
        name="description"
        defaultValue={defaultValues?.description}
      />

      <ColorInput
        label="Color"
        name="color"
        defaultValue={defaultValues?.color}
      />
    </FormModal>
  );
}
```

Note the key point is when we delete the Board from BoardPage we need to navigate to the Home page since we don't have a board to display.

Now lets use it in Home page:

```tsx
import { type ReactNode, use, useRef } from "react";

import BoardModal from "@/Modals/BoardModal/BoardModal";
import BoardsProvider from "@/Provider/BoardProvider";

import BoardCard from "@/components/BoardCard/BoardCard";
import Button from "@/components/Button/Button";

import BoardContext from "@/context/board-context";

import styles from "./HomePage.module.css";

export default function HomePage(): ReactNode {
  return (
    <BoardsProvider>
      <HomePageContent />
    </BoardsProvider>
  );
}

function HomePageContent(): ReactNode {
  const { boards } = use(BoardContext);
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleCreateButtonClick = (): void => {
    modalRef.current?.showModal();
  };

  return (
    <div className={styles["home-page"]}>
      <div className={styles.header}>
        <h1 className={styles.title}>Boards</h1>
        <Button color="primary" onClick={handleCreateButtonClick}>
          Create
        </Button>
      </div>
      <ul className={styles.boards}>
        {boards.map((board) => {
          return (
            <li key={board.id}>
              <BoardCard board={board} />
            </li>
          );
        })}
      </ul>
      <BoardModal modalRef={modalRef} />
    </div>
  );
}
```

### Form validation with Zod library

[Zod docs](https://zod.dev/)

Why use zod :

- Zero external dependencies
- Works in Node.js and all modern browsers
- Tiny: 2kb core bundle (gzipped)
- Immutable API: methods return a new instance
- Concise interface
- Works with TypeScript and plain JS
- Built-in JSON Schema conversion
- Extensive ecosystem
- It is very optimized since it has no dependencies.

Simply: Zod is a TypeScript-first validation library. Using Zod, you can define schemas you
can use to validate data, from a simple string to a complex nested object.

We can define schemas for our users input and other...

Then we can `parse` or validate that to compare the data are used correctly. If there is error we can use `try` `catch` to log it or take action or we can use `safe parse` to skip that.

After installing zod make sure you update `.prettier` config files

then create a new folder in `src` called `schemas` then add it to `.prettier` as well

Inside the folder create a file called `title-schema.ts`.

```ts
import { z } from "zod";

export const TitleSchema = z.string().trim().nonempty().min(3);
```

Then lets create a list type, as you can see we have an object with a title with a type of `TitleSchema` we created. Whenever we change `TitleSchema` List title will also change.

Note that you don't need to use `min()` and `noneempty()` at the same time we want it to give us different error that is the reason why I am using it here.

```ts
import { z } from "zod";

import { TitleSchema } from "./title-schema";

export const ListSchema = z.object({
  title: TitleSchema,
});
```

Lets try to use it in our `ListModal.tsx`

```tsx
const formData = new FormData(e.currentTarget);
const values: Values = {
  title: formData.get("title") as string,
};

const result = ListSchema.safeParse(values);
if (!result.success) {
  console.log(result);
  return;
}
```

If we go to `browsers` `console` we can store result as a global variable and use its methods so we can have a demo like playground and code later.

First we need to declare a type

```tsx
type Errors = { [key in keyof Values]?: string[] };
```

We don't need validateTitle function anymore:

```tsx
import {
  type ComponentProps,
  type ReactNode,
  type SubmitEvent,
  use,
  useState,
} from "react";

import { toast } from "react-toastify";

import { z } from "zod";

import clsx from "clsx";

import Button from "@/components/Button/Button";

import BoardContext from "@/context/lists-context";

import { ListSchema } from "@/schemas/list-schema";

import type { ListType } from "@/types/list";

import TextInput from "../../components/TextInput/TextInput";
import FormModal from "../FromModal/FormModal";

import styles from "./ListModal.module.css";

type Errors = { [key in keyof Values]?: string[] };

type Values = Omit<ListType, "id" | "items">;

type Props = Pick<ComponentProps<typeof FormModal>, "modalRef"> & {
  listIndex?: number;
  defaultValues?: Partial<Values>;
};

export default function ListModal({
  modalRef,
  listIndex,
  defaultValues,
}: Props): ReactNode {
  const [errors, setErrors] = useState<Errors>({});

  const { dispatchList } = use(BoardContext);

  const handleRemoveButtonClick = (): void => {
    if (listIndex === undefined) {
      return;
    }

    dispatchList({ type: "list_removed", listIndex });
    toast.success("List removed successfully");

    modalRef.current?.close();
  };

  const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values: Values = {
      title: formData.get("title") as string,
    };

    const { data, error } = ListSchema.safeParse(values);
    if (error) {
      setErrors(z.flattenError(error).fieldErrors);
      return;
    }

    if (listIndex !== undefined) {
      dispatchList({ type: "list_edited", listIndex, list: data });
      toast.success("List edited successfully");
    } else {
      const id = crypto.randomUUID();
      dispatchList({
        type: "list_created",
        list: { id, items: [], ...data },
      });
      toast.success("List created successfully");
    }

    modalRef.current?.close();
  };

  const handleFormReset = (): void => {
    setErrors({});
  };

  return (
    <FormModal
      modalRef={modalRef}
      className={clsx(styles["list-modal"])}
      heading={
        listIndex !== undefined ? "Edit existing list" : "Create a new list"
      }
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
      extraActions={
        listIndex !== undefined && (
          <Button
            onClick={handleRemoveButtonClick}
            type="button"
            variant="text"
            color="danger"
          >
            Remove
          </Button>
        )
      }
    >
      <TextInput
        label="Title"
        name="title"
        defaultValue={defaultValues?.title}
        error={errors.title?.[0]}
      />
    </FormModal>
  );
}
```

This syntax here

```tsx
  error={errors.title?.[0]}
```

Means if `title` exists on `error` then show the first `index` if not put `undefined` and if its `undefined` it doesn't show any errors.

I also changed the error messages of zod to be like this for title:

```ts
import { z } from "zod";

const { stringError, noneEmptyError, minError } = {
  stringError: "Title must be a string.",
  noneEmptyError: "Title Cannot be empty.",
  minError: "Title must be at least 3 characters.",
};

export const TitleSchema = z
  .string(stringError)
  .trim()
  .nonempty(noneEmptyError)
  .min(3, minError);
```

### Creating decription Schema

```ts
import { z } from "zod";

const CHAR_LIMIT = 1000;

const { stringError, maxError } = {
  stringError: "Description must be a string.",
  maxError: `Description must be less than ${CHAR_LIMIT} characters.`,
};

export const DescriptionSchema = z
  .string(stringError)
  .trim()
  .max(CHAR_LIMIT, maxError);
```

Our ListItemModal after editing should look like this:

```tsx
import {
  type ComponentProps,
  type ReactNode,
  type SubmitEvent,
  use,
  useState,
} from "react";

import { toast } from "react-toastify";

import { z } from "zod";

import clsx from "clsx";

import Button from "@/components/Button/Button";
import TextArea from "@/components/TextArea/TextArea";

import BoardContext from "@/context/lists-context";

import { ListItemSchema } from "@/schemas/list-item-schema";

import type { ListItemType } from "@/types/list-item";

import TextInput from "../../components/TextInput/TextInput";
import FormModal from "../FromModal/FormModal";

import styles from "./ListItemModal.module.css";

type Errors = { [key in keyof Values]?: string[] };

type Values = Omit<ListItemType, "id">;

type Props = Pick<ComponentProps<typeof FormModal>, "modalRef"> & {
  listIndex: number;
  itemIndex?: number;
  defaultValues: Partial<Values>;
};

export default function ListItemModal({
  modalRef,
  listIndex,
  itemIndex,
  defaultValues,
}: Props): ReactNode {
  const [errors, setErrors] = useState<Errors>({});

  const { dispatchList } = use(BoardContext);

  const handleRemoveButtonClick = (): void => {
    if (itemIndex === undefined) {
      return;
    }

    dispatchList({ type: "item_removed", itemIndex, listIndex });
    toast.success("Item removed successfully");

    modalRef.current?.close();
  };

  const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values: Values = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      dueDate: formData.get("date") as string,
    };

    const { data, error } = ListItemSchema.safeParse(values);
    if (error) {
      setErrors(z.flattenError(error).fieldErrors);
      return;
    }

    if (itemIndex !== undefined) {
      dispatchList({ type: "item_edited", listIndex, itemIndex, item: data });
      toast.success("Item edited successfully");
      modalRef.current?.close();
    } else {
      const id = crypto.randomUUID();

      dispatchList({
        type: "item_created",
        listIndex,
        item: { id, ...data },
      });
      toast.success("Item added successfully");
      modalRef.current?.close();
    }
  };

  const handleFormReset = (): void => {
    setErrors({});
  };

  return (
    <FormModal
      modalRef={modalRef}
      className={clsx(styles["list-item-modal"])}
      heading={
        itemIndex !== undefined ? "Edit existing item" : "Create new Item"
      }
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
      extraActions={
        itemIndex !== undefined && (
          <Button
            onClick={handleRemoveButtonClick}
            type="button"
            variant="text"
            color="danger"
          >
            Remove
          </Button>
        )
      }
    >
      <TextInput
        label="Title"
        name="title"
        defaultValue={defaultValues?.title}
        error={errors.title?.[0]}
      />
      <TextArea
        label="Description"
        name="description"
        defaultValue={defaultValues?.description}
        error={errors.description?.[0]}
      />
      <TextInput
        label="Due Date"
        type="date"
        name="date"
        defaultValue={defaultValues?.dueDate}
        error={errors.dueDate?.[0]}
      />
    </FormModal>
  );
}
```

### Learning react-hook-form

When we deifinitly don't need it we shouldn't use new library, however this library is very popular many of the Firms will use it and our forms gonna only increase over time.

There any many differen ways of submiting data for example disabling button to not get server calls validating on change or once after first submit has been press and so much more.

`react-hook-form` by using its basic syntax will preforma:

- prevent default behaviour
- validating forms
- we also get form data
- at the end we get validated data
- if it is not valid it won't submit
- If there is errors it will give us errors.
- can work with any element put inside the forms.

How to install it, better refer to docs

```bash
npm install react-hook-form
```

in order to use `zod` with `react-hook-from` we also need to install

```bash
npm install @hookform/resolvers
```

### How to implement react-hook-form

Lets start easy. `ListModal.tsx`:

```tsx
import {
  type ComponentProps,
  type ReactNode,
  type SubmitEvent,
  use,
  useState,
} from "react";

import { toast } from "react-toastify";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import clsx from "clsx";

import Button from "@/components/Button/Button";

import BoardContext from "@/context/lists-context";

import { ListSchema } from "@/schemas/list-schema";

import type { ListType } from "@/types/list";

import TextInput from "../../components/TextInput/TextInput";
import FormModal from "../FromModal/FormModal";

import styles from "./ListModal.module.css";

type Values = z.infer<typeof ListSchema>;

type Props = Pick<ComponentProps<typeof FormModal>, "modalRef"> & {
  listIndex?: number;
  defaultValues?: Values;
};

export default function ListModal({
  modalRef,
  listIndex,
  defaultValues,
}: Props): ReactNode {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, resolver: zodResolver(ListSchema) });
  const { dispatchList } = use(BoardContext);

  const handleRemoveButtonClick = (): void => {
    if (listIndex === undefined) {
      return;
    }

    dispatchList({ type: "list_removed", listIndex });
    toast.success("List removed successfully");

    modalRef.current?.close();
  };

  const handleFormSubmit = (values: Values): void => {
    if (listIndex !== undefined) {
      dispatchList({ type: "list_edited", listIndex, list: values });
      toast.success("List edited successfully");
    } else {
      const id = crypto.randomUUID();
      dispatchList({
        type: "list_created",
        list: { id, items: [], ...values },
      });
      toast.success("List created successfully");
    }

    modalRef.current?.close();
  };

  return (
    <FormModal
      modalRef={modalRef}
      className={clsx(styles["list-modal"])}
      heading={
        listIndex !== undefined ? "Edit existing list" : "Create a new list"
      }
      onSubmit={handleSubmit(handleFormSubmit)}
      onRemove={listIndex !== undefined && handleRemoveButtonClick}
    >
      <TextInput
        {...register("title")}
        label="Title"
        error={errors.title?.message}
      />
    </FormModal>
  );
}
```

We do the same to other Modals as well.

### FormRef react-hook-form

It is very dangerous to change FormRef without using react-hook-form. We need to use just one to have a conssitant values.

This is how we did it in `FormModal.tsx `component:

```tsx
const handleModalClose = (): void => {
  internalFormRef.current?.reset();
};
```

So don't need internalFormRef we can get rid of it and its ref and we pass formRef as ...otherProps but since we do that we need to change forRef type to ref or its default so we remvoe that one as well.

We want `form` reset action to be done by `react-hook-form`'s `reset` feature. And done by the modals individually.

so our FormModal.tsx looks like this:

```tsx
import { type ComponentProps, type ReactNode, type RefObject } from "react";

import Button from "../../components/Button/Button";
import Modal from "../Modal/Modal";

import styles from "./FormModal.module.css";

type ModalProps = {
  modalRef: ComponentProps<typeof Modal>["ref"];
  heading: ComponentProps<typeof Modal>["heading"];
  onClose: ComponentProps<typeof Modal>["onClose"];
};

type FormProps = ComponentProps<"form"> & {
  onRemove?: false | (() => void);
};

type Props = ModalProps & FormProps;

export default function FormModal({
  modalRef,
  heading,
  onClose,
  onRemove,
  children,
  ...otherProps
}: Props): ReactNode {
  const handleCancelButtonClick = (): void => {
    modalRef.current?.close();
  };

  return (
    <Modal
      ref={modalRef}
      className={styles["form-modal"]}
      heading={heading}
      onClose={onClose}
    >
      <form {...otherProps}>
        {children}
        <div className={styles.actions}>
          {onRemove && (
            <Button
              onClick={onRemove}
              type="button"
              variant="text"
              color="danger"
            >
              Remove
            </Button>
          )}
          <Button
            className={styles.cancel}
            onClick={handleCancelButtonClick}
            type="reset"
          >
            Cancel
          </Button>
          <Button color="primary">Submit</Button>
        </div>
      </form>
    </Modal>
  );
}
```

And now we need to edit and change the whole code for other `modals` as well

```tsx
import {
  type ComponentProps,
  type ReactNode,
  type SubmitEvent,
  use,
  useState,
} from "react";

import { toast } from "react-toastify";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import clsx from "clsx";

import Button from "@/components/Button/Button";

import BoardContext from "@/context/lists-context";

import { ListSchema } from "@/schemas/list-schema";

import type { ListType } from "@/types/list";

import TextInput from "../../components/TextInput/TextInput";
import FormModal from "../FromModal/FormModal";

import styles from "./ListModal.module.css";

type Values = z.infer<typeof ListSchema>;

type Props = Pick<ComponentProps<typeof FormModal>, "modalRef"> & {
  listIndex?: number;
  defaultValues?: Values;
};

export default function ListModal({
  modalRef,
  listIndex,
  defaultValues,
}: Props): ReactNode {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues, resolver: zodResolver(ListSchema) });
  const { dispatchList } = use(BoardContext);

  const handleRemoveButtonClick = (): void => {
    if (listIndex === undefined) {
      return;
    }

    dispatchList({ type: "list_removed", listIndex });
    toast.success("List removed successfully");

    modalRef.current?.close();
  };

  const handleFormSubmit = (values: Values): void => {
    if (listIndex !== undefined) {
      dispatchList({ type: "list_edited", listIndex, list: values });
      toast.success("List edited successfully");
    } else {
      const id = crypto.randomUUID();
      dispatchList({
        type: "list_created",
        list: { id, items: [], ...values },
      });
      toast.success("List created successfully");
    }

    modalRef.current?.close();
  };

  return (
    <FormModal
      modalRef={modalRef}
      className={clsx(styles["list-modal"])}
      heading={
        listIndex !== undefined ? "Edit existing list" : "Create a new list"
      }
      onReset={() => reset()}
      onSubmit={handleSubmit(handleFormSubmit)}
      onRemove={listIndex !== undefined && handleRemoveButtonClick}
    >
      <TextInput
        {...register("title")}
        label="Title"
        error={errors.title?.message}
      />
    </FormModal>
  );
}
```

To the above and reapet it in BoardModl and ListItemModal components as well.

### Getting our project live on Internet.

We need to use [vercel](vercel.com) for this matter.

First signup or login to your vercel account. Then you need to click on add projects authorize your github make you project public add remote and push it to github then import it from you vercel's project list and then after that hit deploy vala, you have a website on internet.

react is spa app when we use router and we use url to route to that page vercel shows that page but on reload or refreshing the page it shows 404 because it is looking for file or folder for about.html. But we only have index.html file.

We need to create file in root of our porject called verecl.json

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/:path*",
      "to": "/index.html"
    }
  ]
}
```

### How to purchase a domain

If you want Iranian domains `IR` there is official website for it called: [nic.ir](nic.ir)

You can purchase there you need to proivde ID they will validate you.

### Creating a side bar

To have easier access to our pages instead of constant navigation I am going to create a sidebar.

Since we want sidebar on all the pages we are going to add it to Layout page.

```tsx
import type { ReactNode } from "react";

import { Outlet } from "react-router";

import BoardsProvider from "@/Provider/BoardProvider";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

import styles from "./RootLayout.module.css";

export default function RootLayout(): ReactNode {
  return (
    <BoardsProvider>
      <div className={styles["root-layout"]}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </BoardsProvider>
  );
}
```

There is bug in our code when we navigate between the boards from the main page using links when ID changes rerender won't happen in the pages since only thing changes id `board_id` however in the provider we said using `useEffect` as a depency to chage `board` list based on id but list is for previous board and id is new so it assigns board 1 values to Board 2.

The reason this bug happesn also comes from `ListsProvider.tsx`

```tsx
const [lists, dispatchList] = useImmerReducer(listReducer, board.lists);
```

In ther reducer we set the default value to `board.lists` but this doesn't update when URL changes since react can't see the changes we need to tell him it changed by rerendring the ListProvider.

To fix this we just need to add `key` to our component.

```tsx
export default function BoardPage(): ReactNode {
  const { id } = useParams();

  const { boards } = use(BoardContext);

  const board = boards.find((board) => board.id === id);

  if (!board) {
    return <NotFoundPage />;
  }

  return (
    <BoardPageProvider board={board}>
      <ListsProvider key={id}>
        <DndProvider>
          <div className={styles["board-page"]}>
            <Board />
          </div>
        </DndProvider>
      </ListsProvider>
    </BoardPageProvider>
  );
}
```

Since we gonna use items as groups in side bar we gonna define them in smaller componetns

SidebarItem.tsx

```tsx
import type { ReactNode } from "react";

import { NavLink } from "react-router";

import clsx from "clsx";

import type { BoardColor } from "@/types/board";

import styles from "./SidebarItem.module.css";

type Props = {
  href?: string;
  title: string;
  color: BoardColor;
  icon: ReactNode;
  onClick?: () => void;
};

export default function SidebarItem({
  href,
  title,
  color,
  icon,
  onClick,
}: Props): ReactNode {
  const className = clsx(styles["sidebar-item"], color);
  const children = (
    <>
      <span className={styles.icon}>{icon} </span>
      <span className={styles.title}>{title}</span>
    </>
  );

  if (!href) {
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <NavLink
      to={href}
      className={({ isActive }) => clsx(className, isActive && styles.active)}
    >
      {children}
    </NavLink>
  );
}
```

This piece of code is very important we used `NavLink` istead of `Link` from `react-router` because it gives us extra information we can utlize for styling.

We can get `isActive` based on the page or if the current link is active and we can pass it a `active` class.

SidebarGroups.tsx

```tsx
import { type ComponentProps, type ReactNode, use } from "react";

import BoardContext from "@/context/board-context";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteHome7Line from "@/icons/MingcuteHome7Line";
import MingcuteSettings5Line from "@/icons/MingcuteSettings5Line";

import SidebarItem from "../SidebarItem/SidebarItem";

import styles from "./SidebarGroups.module.css";

type SidebarGroup = {
  title?: string;
  items: ComponentProps<typeof SidebarItem>[];
};

export default function SidebarGroups(): ReactNode {
  const { boards } = use(BoardContext);

  const groups: SidebarGroup[] = [
    {
      items: [
        {
          href: "/",
          title: "Home",
          color: "blue",
          icon: <MingcuteHome7Line />,
        },
      ],
    },
    {
      title: "Boards",
      items: boards.map((board) => ({
        href: `/board/${board.id}`,
        title: board.title,
        color: board.color,
        icon: <MingcuteAddLine />,
      })),
    },

    {
      title: "System",
      items: [
        {
          href: "/settings",
          title: "Settings",
          color: "orange",
          icon: <MingcuteSettings5Line />,
        },
      ],
    },
  ];

  return groups.map((group, index) => (
    <div key={index} className={styles.group}>
      {group.title && <div className={styles.title}>{group.title}</div>}
      <ul>
        {group.items.map((item) => (
          <li key={item.href}>
            <SidebarItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  ));
}
```

**Note** we are returning groups of elements iterable ReactNodes AKA arrays of react nodes and this array will be inside nav.

Now instead of Static item we want to be able to use.

We create a component called `Initials`

```tsx
import type { ReactNode } from "react";

import clsx from "clsx";

import type { BoardColor } from "@/types/board";

import styles from "./Initials.module.css";

type Props = {
  className?: string;
  title: string;
  color: BoardColor;
};

export default function Initials({
  className,
  title,
  color,
}: Props): ReactNode {
  const parts = title.trim().split(/\s+/);

  const initials = `${parts[0][0]}${parts.at(-1)?.[0] ?? ""}`;

  return (
    <div className={clsx(styles.initials, color, className)}>
      <div className={styles.text}>{initials}</div>
    </div>
  );
}
```

### Sidebar open and close

Since when we close side bar or open it everything is going to change for example dispay of initials item getting smalller we are going to utlized react context concept to deploy this feature.

we can create a context folder inside the Sidebar folder since we can repeat our stucture and also we gonna only use it in the Sidebar.

You my ask, you used the provider directly why you have you context in a different file? Because if you have a context in a file and if you have 2 exports react will throw an error.

`Sidebar.tsx`:

```tsx
const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const handleArrowClick = (): void => {
    setIsCollapsed((isCollapsed) => !isCollapsed);
  };

  return (
    <SidebarContext
      value={{
        isCollapsed,
      }}
    >
      <aside className={clsx(styles.sidebar, isCollapsed && styles.collapsed)}>
        <div className={styles.header}>
          <Link to="/" className={styles.logo}>
            <img
              src={isCollapsed ? "/favicon.svg" : "/logo.svg"}
              alt="Canban Logo"
            />
          </Link>
          <IconsButton className={styles.arrow} onClick={handleArrowClick}>
            <MingcuteArrowsRightLine />
          </IconsButton>
        </div>
        <nav>
          <SidebarGroups />
        </nav>
        <div className={styles.footer}>
          <SidebarItem
            title="Sign Out"
            color="gray"
            icon={<MingcuteExitLine />}
          />
        </div>
      </aside>
    </SidebarContext>
  );
}
```

`SidebarGroups.tsx`:

```tsx
import { type ComponentProps, type ReactNode, use } from "react";

import clsx from "clsx";

import Initials from "@/components/Initials/Initials";

import BoardContext from "@/context/board-context";

import MingcuteHome7Line from "@/icons/MingcuteHome7Line";
import MingcuteSettings5Line from "@/icons/MingcuteSettings5Line";

import { SidebarContext } from "../../context/sidebar-context";
import SidebarItem from "../SidebarItem/SidebarItem";

import styles from "./SidebarGroups.module.css";

type SidebarGroup = {
  title?: string;
  items: ComponentProps<typeof SidebarItem>[];
};

export default function SidebarGroups(): ReactNode {
  const { boards } = use(BoardContext);

  const { isCollapsed } = use(SidebarContext);

  const groups: SidebarGroup[] = [
    {
      items: [
        {
          href: "/",
          title: "Home",
          color: "blue",
          icon: <MingcuteHome7Line />,
        },
      ],
    },
    {
      title: "Boards",
      items: boards.map((board) => ({
        href: `/board/${board.id}`,
        title: board.title,
        color: board.color,
        icon: <Initials title={board.title} color={board.color} />,
      })),
    },

    {
      title: "System",
      items: [
        {
          href: "/settings",
          title: "Settings",
          color: "orange",
          icon: <MingcuteSettings5Line />,
        },
      ],
    },
  ];

  return groups.map((group, index) => (
    <div
      key={index}
      className={clsx(styles.group, isCollapsed && styles.collapsed)}
    >
      {group.title && (
        <div className={styles.title}>
          {isCollapsed ? group.title[0] : group.title}
        </div>
      )}
      <ul>
        {group.items.map((item) => (
          <li key={item.href}>
            <SidebarItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  ));
}
```

`SidebarItems.tsx`

```tsx
import { type ReactNode, use } from "react";

import { NavLink } from "react-router";

import clsx from "clsx";

import type { BoardColor } from "@/types/board";

import { SidebarContext } from "../../context/sidebar-context";

import styles from "./SidebarItem.module.css";

type Props = {
  href?: string;
  title: string;
  color: BoardColor;
  icon: ReactNode;
  onClick?: () => void;
};

export default function SidebarItem({
  href,
  title,
  color,
  icon,
  onClick,
}: Props): ReactNode {
  const { isCollapsed } = use(SidebarContext);

  const className = clsx(
    styles["sidebar-item"],
    color,
    isCollapsed && styles.collapsed,
  );

  const children = (
    <>
      <span className={styles.icon}>{icon} </span>
      <span className={styles.title}>{title}</span>
    </>
  );

  if (!href) {
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <NavLink
      to={href}
      className={({ isActive }) => clsx(className, isActive && styles.active)}
    >
      {children}
    </NavLink>
  );
}
```

### Zustand

It helps us to have globall states and helps us manage them. This is the most important library that we are going to learn in this project.

Newer Firms are most likley heading towards Zustand or already using it.

You can go to the [documentation](https://zustand-demo.pmnd.rs/).

In zustand we have something called `store` it is a place we can store our states and also the opertaions that we have are stored in there as well, this is the key difference between `Redux` and `Zustand`.

So this raises some questions why we even need `Zustand`. Actaully `useContext` is very useful and can handle our tasks daily especially when we have few components to manage.

But whenever our project starts to clutter or grow even the level we are on right now. And different components needs to use global contexts start causing trouble.

There is few issues:

1. Because setup could be difficult because you need to create context then give it a initial values then give it a provider.

2. You can use it out of react, when we have a simple js function and we can't change state in this function. Zustand solves this problem because state is defined globally.

3. Image we have 2 states in context state `a` and `b` they values are set and we are providing both of them to component. Now comp `a` is using state `a` and `b` is using state `b`. This caues a huge problem whenever we change `a` state every place that uses `a` will rerender. Whenever we change state of `a` since we use the context `b` will also rerender.

4. Other than that maybe we want to save or load the globall state into local storage.

5. Or maybe in development state we want to have access to this value and see the changes or edit it

6. Or in third party libraries like immer we could use it.

### install Zustand

```bash
npm install zustand
npm install --registry="https://mirror-npm.runflare.com" zustand
```

### Sidebar using Zustan

```ts
import { create } from "zustand";

type SidebarStore = {
  isCollapsed: boolean;
  fold: () => void;
};

export const useSidebarStore = create<SidebarStore>()((set) => ({
  isCollapsed: false,
  fold: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
}));
```

I also edited eslint to prevent type issues in expression like `fold`'s return value.

No we need to use this inside our components. But before that we need to delte `sidebar context` which is in its local directory. Then change Sidebar | SidebarGroups | SideabrItem as well simply for Sidebar :

```tsx
  const isCollapsed = useSidebarStore((state) => state.isCollapsed);
  const fold = useSidebarStore((state) => state.fold);

// and for onclick just pass no need for handle function
  <IconsButton className={styles.arrow} onClick={fold}>
```

For others only `isCollapsed` is enough and we don't even need to wrap context around components anymore.

### How to use persist for zustand

So how we store isCollapsed value in the localstorage using persist:

It is quite simply actually. First we need to get our callback function
then call `persist` and pass it as a first argument and second argument is the name.

```tsx
export const useSidebarStore = create<SidebarStore>()(
  persist(
    (set) => ({
      isCollapsed: false,
      fold: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
    }),
    { name: "sidebar" },
  ),
);
```

You can have whatever name you desire, most people use `sidebar-store`, `siderbar-state`, but side bar is just fine here.

This value is stored in localstorage.

### Creating a theme switcher:

First lets create a globall state that gets stored called `theme-store.ts`

```tsx
import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { ThemeType } from "@/Types/theme";

type ThemeStore = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "dark",
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
    }),
    { name: "theme" },
  ),
);
```

Now we need to pass this to our `SidebarGroups` But instead of string title I want ReactNode Item so I can pass it a `ThemeSwitch.tsx` component with a swicher button

### Few touch ups before we continue

We don't need header component any more so we deleted it.

I created another component for logo to handle the logic:

We don't need to load an entire or a different font just for 1 word, you can make it svg if you want but this is just fine.

```tsx
export default function Logo(): ReactNode {
  const isCollapsed = useSidebarStore((state) => state.isCollapsed);

  return <div className={styles.logo}>{isCollapsed ? "C" : "Canban"}</div>;
}
```

We also need to add `id` for SidebarGroups items. Since buttons don't have `href` as a key

### How to handle theme switch on html

One of the easiest way and the most effective way to change from different themes is assigning theme to `html` main tag.

But before that we need a method or a way to track our globall `state` change in `zustand`

So in order to do this we need to head to `theme-store.ts`

```ts
useThemeStore.subscribe((state) => {
  document.documentElement.dataset.theme = state.theme;
});
```

This is one of the rare ocasions that directly use `document`, but we have to do it thsi way because it is the main `html` tag and out of `react`'s reach.

Above code won't work on load. It only works when we change it, however luckily `zustand` has a solution for this

```ts
export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "dark",
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
    }),
    {
      name: "theme",
      onRehydrateStorage: () => {
        console.log("Runs before reading the localstorage");

        return () => {
          console.log("Runs after reading the localstorage");
          document.documentElement.dataset.theme = state.theme;
        };
      },
    },
  ),
);
```

How to access the `state` we can access it from return's argument:

```ts
  {
      name: "theme",
      onRehydrateStorage: () => {
        return (state) => {
          document.documentElement.dataset.theme = state?.theme ?? "light";
        };
      },
    },
```

we need to change the css global styles but we already have that setup in our project from the start but here is some extra information you might love:

We also need to update our `toaster` to use the default theme instead of just light.

```tsx
export default function Toaster(): ReactNode {
  const theme = useThemeStore((state) => state.theme);
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
      transition={Slide}
    />
  );
}
```

### Moving all opertions to zustand

We want to move all the reducer and context we had to single store file in zustand.

So we create a `kanban-store.ts` inside stores and since this gonna have slice we gonna make a slices folder ans tard with `boards-slice.ts`

First starting with boards-slice.ts we need to setup types:

```tsx
import type { BoardType } from "@/types/board";

export type BoardsSlice = {
  boards: BoardType[];
  createBoard: (board: Omit<BoardType, "id" | "lists">) => void;
  editBoard: (BoardId: string | undefined, board: Partial<BoardType>) => void;
  removeBoard: (BoardId: string | undefined) => void;
};
```

We use Omit because new Boards always have empty `lists`, and new `id` each time so we handle them ourselves ne need for user to pass them in but other that that we need name and ... .

For editBoard BoardId is string and undefiend because we gonna read it from url and could be undefiend, and for board we only need parts that can be edited could be all could be some or none.

remove Board we just need id to delete the board.

now to continue we need extra types that we are going to define them in kanban-store.ts

`[]`s are for middlware we are going to use like `immer` | `persist` and on...

```ts
import type { StateCreator } from "zustand";
import type { BoardsSlice } from "./slices/boards-slice";


export type KanbanStore = BoardsSlice

export type  KanbanStateCreator<T> = StateCreator<
KanbanStore,
[],
[],
T;
>
```

This will be kinda the setup however this is for Passing BoardsSlice instead of `T` or you can use it like this instead, above code is conventional

```ts
export type  KanbanStateCreator<BoardsSlice> = StateCreator<
KanbanStore,
[],
[],
BoardsSlice;
>
```

Next we complete and it and import our middlewares and pass it arguments just like its documentation demonstrated:

```ts
import { type StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { type BoardsSlice, createBoardSlice } from "./slices/boards-slice";

export type KanbanStore = BoardsSlice;

export type KanbanStateCreator<T> = StateCreator<
  KanbanStore,
  [["zustand/immer", never]],
  [],
  T
>;

export const useKanbanStore = create<KanbanStore>()(
  persist(
    immer((...args) => ({
      ...createBoardSlice(...args),
    })),
    { name: "boards" },
  ),
);
```

Then we go back to `boards-slice.ts` and start coding it.

The most of the complicated looking code is because of typescript if we remove it, it becomes much more simpler. And the syntax we are using is because of the `immer` library.

```ts
export const createBoardSlice: KanbanStateCreator<BoardsSlice> = (set) => ({
  boards: boardsData,
  createBoard: (board) =>
    set((state) => {
      const id = globalThis.crypto.randomUUID();
      state.boards.push({ id, lists: [], ...board });
    }),
  editBoard(boardId: string | undefined, board: Partial<BoardType>): void {},
  removeBoard(boardId: string | undefined): void {},
});
```

Note that here for `editBoard` and `removeBoard` boards we need to get `boardId` and figure out the index since we don't know which one to remove, and getting it as a prop like we did it earlier complicates the matter, also later on when we gonna have APIs having boardId this way will benefit us.

So to handle them we need to create helper functions.

Create `utils` folder in the stores and a file called `kanban-utils.ts`:

We need to get the parameter we want + a callback

If we find board index also known as the board with the provided parameters we gonna call the callback else we don't.

For starters:

```ts
import type { WritableDraft } from "immer";

// Note that state is WritableDraft because we are using immer
export function withBoardIndex(state: WritableDraft): void {}
```

Then :

```ts
import type { WritableDraft } from "immer";

import type { KanbanStore } from "../kanban-store";

export function withBoardIndex(
  state: WritableDraft<KanbanStore>,
  boardId: string | undefined,
  callback: (boardIndex: number) => void,
): void {
  const boardIndex = state.boards.findIndex((board) => board.id === boardId);

  if (boardIndex === -1) {
    return;
  }

  callback(boardIndex);
}
```

Why used callback and not return the index syntax. In that case we need to check for boardIndex everysingle time and we might sometimes forget it like below instead we use above code and boardIndex will only be availble when it actually finds it.

```ts
const boardIndex = withBoardIndex(state, boardId);

if (boardIndex === -1) {
  return;
}
```

Now lets get back to `boards-slice.ts`;

First of all we don't need types because we declared them above.

Then instead of diving into the logic we need to call the helper function first then, code and write our logic.

```ts
  editBoard: (boardId, board) =>
    set((state)=>
      withBoardIndex(state, boardId,(boardIndex)=> {
        // ...code and logic goes here
      })
    ),
  removeBoard: (boardId): void => {},
```

There is 2 ways of doing this first way:

First way we just use call back function whenever we get boardIndex we will use it

```ts
editBoard: (boardId, board) =>
    set((state)=>
      withBoardIndex(state, boardId,(boardIndex)=> {
        state.boards[boardIndex] = {...state.boards[boardIndex], ...board}
      })
    ),
  removeBoard: (boardId): void => {},
```

or you can just copy paste these 2 lines from helper function if you think this is hard to undestand. To be honest I need to look this syntax up and write it.

```ts
const boardIndex = state.boards.findIndex((board) => board.id === boardId);

if (boardIndex === -1) {
  return;
}
```

Remove is similar:

```ts
  removeBoard: (boardId): void =>
    set((state) =>
      withBoardIndex(state, boardId, (boardIndex) => {
        state.boards.splice(boardIndex, 1);
      }),
    ),
```

Now we need to handle this for lists and items.

First of all we need to create a file called `lists-slice.ts`

We don't need array of `Lists[]` to pass in everytime we just need boardId to access the lists.

```ts
export type ListsSlice = {
  createList: (
    boardId: string | undefined,
    list: Omit<ListType, "id" | "items">,
  ) => void;
  editList: (
    boardId: string | undefined,
    listIndex: number,
    list: Partial<ListType>,
  ) => void;
  removeList: (boardId: string | undefined, listIndex: number) => void;
  moveList: (
    boardId: string | undefined,
    activeListIndex: number,
    overListIndex: number,
  ) => void;
};
```

Now for function copy paste the template from the types we Declared from `type` `ListSLice`and trim it down until it looks something like this:

```ts
export const createListSlice: KanbanStateCreator<ListsSlice> = (set) => ({
  createList: (boardId, list) => {},
  editList: (boardId, listIndex) => {},
  removeList: (boardId, listIndex) => {},
  moveList: (boardId, activeListIndex, overListIndex) => {},
});
```

For `createList` we need a util function in the `kanban-utils`:

```tsx
export function withBoard(
  state: WritableDraft<KanbanStore>,
  boardId: string | undefined,
  callback: (board: BoardType) => void,
): void {
  withBoardIndex(state, boardId, (bordIndex) => {
    callback(state.boards[bordIndex]);
  });
}
```

Then lets use it like this:

```ts
export const createListSlice: KanbanStateCreator<ListsSlice> = (set) => ({
  createList: (boardId, list) =>
    set((state) =>
      withBoard(state, boardId, (board) => {
        const id = globalThis.crypto.randomUUID();
        board.lists.push({ id, items: [], ...list });
      }),
    ),
  editList: (boardId, listIndex) => {},
  removeList: (boardId, listIndex) => {},
  moveList: (boardId, activeListIndex, overListIndex) => {},
});
```

And the reset is :

```ts
  editList: (boardId, listIndex, list) =>
    set((state) =>
      withBoard(state, boardId, (board) => {
        board.lists[listIndex] = { ...board.lists[listIndex], ...list };
      }),
    ),
  removeList: (boardId, listIndex) =>
    set((state) =>
      withBoard(state, boardId, (board) => {
        board.lists.splice(listIndex, 1);
      }),
    ),
  moveList: (boardId, activeListIndex, overListIndex) =>
    set((state) =>
      withBoard(state, boardId, (board) => {
        if (activeListIndex === overListIndex) {
          return;
        }

        const activeList = board.lists[activeListIndex];

        board.lists.splice(activeListIndex, 1);
        board.lists.splice(overListIndex, 0, activeList);
      }),
    ),
});
```

Now we need to add the type to `kanban-store.ts` and then call it.

```ts
export type KanbanStore = BoardsSlice & ListsSlice;

export const useKanbanStore = create<KanbanStore>()(
  persist(
    immer((...args) => ({
      ...createBoardSlice(...args),
      ...createListSlice(...args),
    })),
    { name: "boards" },
  ),
);
```

Do the same with item create file called `item-slice.ts` and repeat the tasks as usual

```ts
export type KanbanStore = BoardsSlice & ListsSlice & ItemsSlice;

export const useKanbanStore = create<KanbanStore>()(
  persist(
    immer((...args) => ({
      ...createBoardSlice(...args),
      ...createListSlice(...args),
      ...createItemsSlice(...args),
    })),
    { name: "boards" },
  ),
);
```

### How to use useKanbanStore

Before using this lets do few touch ups for example instead if using `id` in list we gonna useParams from react-router to have increase readibility. In `App.ts`

Next we can fully delete the `context` | `reducers` | and provider except `dnd` folder and then we need to use where it is needed

Starting with home page:

```tsx
const boards = useKanbanStore((state) => state.boards);
```

`SidebarGroups.tsx` we do the same

then `BoardPage.tsx` we need to pass board to Board component and little bit of prop drilling action.

```tsx
export default function BoardPage(): ReactNode {
  const { boardId } = useParams();

  const boards = useKanbanStore((state) => state.boards);

  const board = boards.find((board) => board.id === boardId);

  if (!board) {
    return <NotFoundPage />;
  }

  return (
    <DndProvider>
      <div className={styles["board-page"]}>
        <Board board={board} />
      </div>
    </DndProvider>
  );
}
```

After that edit `BoardToolbar.tsx`

```tsx
type Props = {
  board: BoardType;
};

export default function BoardToolbar({ board }: Props): ReactNode {
  // also remove this line:
  // const { board } = use(BoardPageContext);
  // rest is the same ...
}
```

also do the same thing for the `BoardLists.tsx`

```tsx
type Props = {
  lists: ListType[];
};

export default function BoardLists({ lists }: Props): ReactNode {
```

### Now it is time to refactor modals

To utilize our new `kanban-store` we don't have anything called dispatch anymore.
instead of dispatchs we need:

```tsx
const createBoard = useKanbanStore((state) => state.createBoard);
const editBoard = useKanbanStore((state) => state.editBoard);
const removeBoard = useKanbanStore((state) => state.removeBoard);
```

ListModal ListItemModal BoadModal all must be edited.

After we complete them we need to continue into `DndProvider.tsx`.
