//Array of numbers
const NumbersInlineList = () => {
   return (
      <div className='container'>
         <div>
            <h1>Numbers List</h1>
            {[1, 2, 3, 4, 5]}
         </div>
      </div>
   )
}
export { NumbersInlineList };

//Mapping array of numbers
const Numbers = ({ numbers }) => {
   // modifying array to array of li JSX
   const list = numbers.map((number) => <li key={number}>{number}</li>)
   return list
};
// App component
const NumbersVerticalList = () => {
   const numbers = [1, 2, 3, 4, 5]
   return (
      <div className='container'>
         <div>
            <h1>Numbers List</h1>
            <ul>
               <Numbers numbers={numbers} />
            </ul>
         </div>
      </div>
   )
};
export { NumbersVerticalList }

//Mapping array of arrays
const skills = [
   ['HTML', 10],
   ['CSS', 7],
   ['JavaScript', 9],
   ['React', 8],
];
// Skill Component
const Skill = ({ skill: [tech, level] }) => (
   <li>
      {tech} {level}
   </li>
);
// Skills Component
const Skills = ({ skills }) => {
   const skillsList = skills.map((skill) => <Skill key={skill[0]} skill={skill} />)
   console.log(skillsList)
   return <ul>{skillsList}</ul>
};
const SkillsLevel = () => {
   return (
      <div className='container'>
         <div>
            <h1>Skills Level</h1>
            <Skills skills={skills} />
         </div>
      </div>
   )
};
export { SkillsLevel };

//Mapping array of objects
//Rendering array of objects
const countries = [
   { name: 'Finland', city: 'Helsinki' },
   { name: 'Sweden', city: 'Stockholm' },
   { name: 'Denmark', city: 'Copenhagen' },
   { name: 'Norway', city: 'Oslo' },
   { name: 'Iceland', city: 'Reykjavík' },
];
// Country component
const Country = ({ country: { name, city } }) => {
   return (
      <div>
         <h1>{name}</h1>
         <small>{city}</small>
      </div>
   )
};
// countries component
const Countries = ({ countries }) => {
   const countryList = countries.map((country) => <Country key={country.name} country={country} />)
   return <div>{countryList}</div>
};
// App component
const CountriesList = () => (
   <div className='container'>
      <div>
         <h1>Countries List</h1>
         <Countries countries={countries} />
      </div>
   </div>
);
export { CountriesList };