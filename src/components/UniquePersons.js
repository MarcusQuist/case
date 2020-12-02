import React from "react";
import Person from "./Person";

/**
 * Takes the array of persons as argument, filters out the 
 * persons without a unique hobby.
 * Returns the filtered array.
 * @param {array} data 
 */
const filterPersons = (data) => {
    const hobbyMap = data.reduce((acc, currValue) => {
        if(!currValue.hobbies) return acc;

        currValue.hobbies.forEach(hobby => {
            if(acc[hobby]) acc[hobby] += 1;
            else acc[hobby] = 1;
        })
        return acc;
    }, {});

    const peopleWithUniqueHobbies = data.filter(person => person.hobbies && person.hobbies.some(hobby =>hobbyMap[hobby] == 1));
    return peopleWithUniqueHobbies;
}  

export default function UniquePersons({data}) {
  return (
      <>
        {filterPersons(data).map((person) => 
          <Person {...person} key={person.name + person.age} />
        )} 
      </>
  );
}