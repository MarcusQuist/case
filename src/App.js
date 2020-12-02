import React, { useEffect } from "react";
import "./app.css";
import "./global/global.css";
import UniquePersons from "./components/UniquePersons";
import CountSystem from "./components/buttons/CountSystem";

/**
 * 
 * The following exercises should be completed using functional react components.
 * You can create as many components, stylesheets and services as you want.
 * 
 * 1.
 * Create a function that translates all the hobbies into the same naming convention.
 * You can choose between the following conventions: camelCase, snake_case or PascalCase.
 * This translation should happen inside of a lifecycle hook on component mount.
 * 
 * 
 * 2. 
 * Create a function/component that renders only the persons with unique hobbies.
 * Display the persons with some added styling.
 * 
 * 3. 
 * Use the useReducer hook to create the following functionality
 * - Increase the count to the nearest unequal number
 * - Decrease the count to the nearest prime number
 * - Increase the count using the fibonacci number sequence
 * 
 * 
 * 4.
 * Add styling to the project.
 * You can use external libraries like material-ui if you wish.
 * 
 */

const data = [
  {
    name: "Jens",
    age: 24,
    hobbies: ["fishing", "sport", "television"]
  },
  {
    name: "Hans",
    age: 24,
    hobbies: ["MMA", "basketball", "Shopping"]
  },
  {
    name: "Erik",
    age: 24,
    hobbies: ["Muay Thai", "c#", "Netflix"]
  },
  {
    name: "Kim",
    age: 24,
    hobbies: ["fishing"]
  },
  {
    name: "Kasper",
    age: 24,
    work: "Engineer"
  },
  {
    name: "Nikolaj",
    age: 24,
    hobbies: ["programming", "react", "angular"]
  },
  {
    name: "Stine",
    age: 24,
    hobbies: ["running", "shopping"]
  },
  {
    name: "Hanne",
    age: 24,
    hobbies: ["boxing", "shopping"]
  }
];

/**
 * Iterates through the strings in the array given as argument.
 * For each string it converts it to snake_case.
 * @param {array} hobbies
 */
const snakeCase = hobbies => {
  Array.isArray(hobbies) ? hobbies : [hobbies];
  return hobbies.map(hobby => {
    return hobby.toLowerCase().replace(" ", "_");
  });
}

/**
 * Iterates through the person-objects in the array given as arugment.
 * Returns a new array of person-objects with each hobby filtered to
 * the format of the given function argument (fltr).
 * @param {array} arr
 * @param {function} fltr 
 */
const translateHobbies = (arr, fltr) => {
  return arr.map(person => {
    if(person.hobbies){
      return {
        ...person,
        hobbies: fltr(person.hobbies)
      };
    }
    else return person;
  });
}

export default function App() {
  useEffect(() => {
    console.log('To SnakeCase: ', translateHobbies(data, snakeCase));
  })

  return (
    <div id="app">
      <div id="count-container">
        <CountSystem />
      </div>
      <div id="person-container">
        <UniquePersons data={data}/>
      </div>
    </div>
  );
}