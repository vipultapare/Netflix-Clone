<h1>Netflix-Clone</h1>

<h2>Steps</h2>
<ui>
<li>Create React App</li>
<li>Install tailwind</li>
<li>Build Header </li>
<li>Routing Of App </li>
<li>Login Form </li>
<li>Sign Up Form </li>
<li>Validation</li>
<li>useRef Hook</li>
<li>FireBase setup </li>
<li>Create SignUp User Account</li>
<li>Redux Store  for storing user data</li>
<li> useNavigate Hook </li>
<li>Implemented Sign Out </li>
<li>Update Profile API Call </li>
<li>Fixed the issue with the sign in and SignOut Page<li>
<li>Unsubscribing from Component </li>
<li>Fetch From TMDB </li>
<li>Store Movies data into redux store for that make moviesSLice to  store the data inside it </li>
<li>Created Custom Hook for  fetching movie Data  and to reduce the code length in the browse component</li>
<li>Build Main Component</li>
<li>Build secondary Component</li>


</ui>



<h2>Features</h2> 
</hr>
- Login / SignUp </br>
  - Sign In / Sign Up Form </br>
  - Redirect to Browse Page </br>
-Browse (After Authentication) </br>
  - Header </br>
  - Main Movie </br>
     - Trailer in BG </br>
     - Title And Discription </br>
     - Movie Suggestions </br>
        - Movie Lists </br>
- Netflix GPT </br>
     - Search Bar </br>
     - Movie Suggestions </br>


<h2>Toggle Between Sign In and Sign Up </h2>
<p>Used the react hook useState() to change the state of variable and have make the changes on the same form to convert the form from sign in to sign up and vice  versa. </p>

<h2>useRef()</h2>
<p>Used useRef() hook for getting the values from input field to validate the email and password for the suitable format </p>


<h2>Fire Base Deploy Commands </h2>
- npm install -g firebase-tools
- firebase login
- after login in  --- firebase init
- select "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
- build project - npm run build
- firebase deploy

<h2>Redux SetUp</h2>
- First Install Redux libraries
    - npm i -D @reduxjs/toolkit
    - npm i react-redux
    -Create a store
    - create a slice
    -add slicereducer to store.
    - then provide the store to body.
    

<h2>FireBase</h2>
<h4>getAuth</h4>
<p>Wherver we are sign in to our site or signing out or signing up it handle the changes in the site  , this is kind of like a event listener , this will be called automatically after doing one of these steps </p>
<h4>onAuthStateChanged()</h4>
<p>This API Is used for getting the user info after changing the authentication state like sign in, sign out, sign up.  It will automatically call after the every authentication state change . This is provided by firebase.



<h1> Why API Calls 2 times after using empty dependency array </h1>
<p>Because of strict mode it render the component 2 times ,  if we remove it it will render it  only once.
reason for  double rendering: For checking inconsistency  between the state and props.</p>



//1:00


