#Github setup
https://github.com/asityonjan13/cms-52.git
CLI
-git config --global user.name "Ahsit Tamang"
-git config --global user.email "asityonjan13@gmail.com"
-git init
-git remote add origin https://github.com/asityonjan13/cms-52.git
-git add .
-git commit -m "React First Push, component, props, states, router, template, layouts done."
//To check if anything is left to commit, or to know your branch if master , main or other type
-git status
Finally push your code.
-git push origin master


## React Installation
-node check ==>20.19 >22.12>
-pnpm install -'npmi pnpm -g'
-React application
    -pnpm create vite
Project run
    - get inside prject directory and run 'pnpm dev'   

## React Components
    -Class Based(Ignored, rigid, stateful component)
    -Functional Component(stateless, 16.8> hooks(web hook) introduction)     

### Page & Component
    -Components are reusable elements same thing which may repeat on multipage
    -Page => A collection of components
          => Like a single page 
    -Fragments '<></>' or '<React.Fragment></React.Fragment>'   
### WebHook    
    -Rules of hook
        -1. Only use hooks at  the top level. Hooks are not allowed in conditions, loops or nested functions.
            Always call hooks in the same order on every render.
        -2. Only call hooks from react function components or custom hooks-  not from plain javascript functions
        -3. Use the eslint-plugin-react-hooks: rules(exhaustive-deps) to help with dependency arrays
    -Every hook starts with 'use' keyword
    -If you chnage/update or manipulate the hook then, then the react components will reload.
### Built in hook
    - useState()
        -local states(managed by the component itself)
            -we use useState hook to manage local states
        -global states(assigned or maintained by 3rd party library or builtin some hook)
            -we can use 'useContext' for managing light weight or custom global states
            -we can use 'redux', 'zustand', 'Jotai', etc.
    -useEffect()
        -Run side effect after render(datafetch, subscription, DOM Effects).
        -eg
        useEffect( () => {
            console.log("I am always called")
        })
        useEffect( () => {
            console.log("I am only called when component is mounted")
        },[])
        useEffect( () => {
            console.log("I am only called when credentials is manipulated")
        },[credentials])        

## Props is used to pass data from parent to child
##For passing data from child to parent, use context or call back function.  