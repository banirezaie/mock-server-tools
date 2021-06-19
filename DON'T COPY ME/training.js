/*
In the pokedex React app that you just created, open the src/App.js file.
Delete everything in the file except the line containing export default App. You should see an error in your terminal and in your web browser - don't panic! We're going to remake the App component ourselves.
Import the React variable from the React package.
Create a function named App, which will be our component.
Within the App function, return a <h1> element with the text "Welcome to the Pokedex". What do you see in your web browser?
Create a <div> element that wraps around the <h1> you just created.
Below the <h1> element (but within the <div>), create an <img> element. Then make its src attribute equal to https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png. What do you expect to see in your web browser?
Now create a <header> element to wrap both the <h1> element and the <img> element.

In your pokedex React app, open the src/App.js file.
Create a new function named Logo.
Copy the <header> element and its contents and paste it into the Logo component.
Replace the <header> element in the App component with the new Logo component.
Create a new component function named BestPokemon and return a <p> element with some text saying which is your favorite Pokemon (e.g. "My favorite Pokemon is Squirtle").
Render your new BestPokemon component below the Logo component within the App component.

Using the pokedex React app that you created earlier, open the src/App.js file.
Inside the Logo component create a new variable called appName and assign it to "[YOUR_NAME]'s Pokedex".
Now replace the hard-coded app name with {appName}. What do you see in your web browser? What would you do if you wanted to change the app name?
Create a new component named CaughtPokemon. Within this component return a <p> tag with the text "Caught 0 Pokemon on" (we're going to fill in today's date in the next step).
Create a variable named date within the CaughtPokemon component, and assign it today's date (hint: new Date().toLocaleDateString()). Finally, render the date variable after the text "Caught 0 Pokemon on".
Render the CaughtPokemon component within the App component (below BestPokemon).
Within the BestPokemon component, create a variable named abilities and assign it to an array with some Pokemon abilities (e.g. ['Anticipation', 'Adaptability', 'Run-Away']).
Change the BestPokemon component to return a <div> element with the existing <p> element inside it. Then add a <ul> element underneath the <p> element.
Now use the .map() method on the abilities variable to loop over each name and return a <li> element for each (hint: look at the mentors list example above) within the <ul> element.

Open the pokedex React app that you created earlier.
Create a new file within the src directory named Logo.js.
Copy and paste the Logo component from App.js into Logo.js.
Remember to add import React from 'react' at the top of Logo.js.
Export the Logo component from Logo.js (hint: look at the Greeting example above).
Delete the old Logo component from App.js.
Import the Logo component into App.js (hint: look at the HelloMentor example above).
Repeat this process with the BestPokemon and CaughtPokemon components. What do you think the files should be called?

Using the pokedex React app that you created earlier, open the App.js file.
Pass a prop appName="Pokedex" to the Logo component.
Now open the Logo.js file.
Delete the appName variable. What do you see in your web browser? Why?
Change the Logo function to access the first argument and call it props. Use console.log to inspect the props variable.
Change the usage of appName in the <h1> to be props.appName instead. Does this fix the problem? Why?
Now open the BestPokemon.js file.
Copy the abilities variable and then delete it from BestPokemon.js.
Paste the abilities variable into App.js.
Pass the abilities variable as a prop to BestPokemon from App.js.
In the BestPokemon.js file replace the existing usage of abilities with the abilities prop. You should still see the Pokemon ability names in your web browser.
(STRETCH GOAL) Repeat the process with the date variable in the CaughtPokemon.js file.
