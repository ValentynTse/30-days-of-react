
// Component for a single table row
const TableRow = ({ country, population }) => {
   const rowStyle = {
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid #ccc',
      padding: '10px',
      textAlign: 'left',
      justifyContent: 'space-between',
   };

   const colorBarStyle = {
      height: '20px', // Adjust the height of the color bar
      width: `${(population / 7693165599) * 100}%`, // Calculate the width based on population
      backgroundColor: 'lightblue', // Choose the color of the bar
      marginRight: '10px',
   };

   return (
      <div style={rowStyle}>
         <div style={{ flex: '1', marginRight: '10px', minWidth: '200px', textTransform:'uppercase' }}>{country}</div>
         <div style={colorBarStyle}></div>
         <div style={{  textAlign: 'right' }}>{population}</div>
      </div>
   );
};

// Component for the table
const PopulationTable = ({ data }) => {
   const tableStyle = {
      border: '1px solid #ccc',
      width: '100%',
   };

   return (
      <div style={tableStyle}>
         {data.map(({ country, population }) => (
            <TableRow key={country} country={country} population={population} />
         ))}
      </div>
   );
};
// Data for the ten highest populations
export const fiveHighestPopulation = [
   { country: 'World', population: 7693165599 },
   { country: 'China', population: 1377422166 },
   { country: 'India', population: 1295210000 },
   { country: 'United States of America', population: 323947000 },
   { country: 'Indonesia', population: 258705000 },
   { country: 'Brazil', population: 206135893 },
];
const PopulationsTable = () => {
   return (
      <div className="population">
         <h1>World Population</h1>
         <PopulationTable data={fiveHighestPopulation} />
      </div>
   );
};

export { PopulationsTable }