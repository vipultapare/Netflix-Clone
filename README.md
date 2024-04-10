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
    - npm i react-redux  (2:53)

