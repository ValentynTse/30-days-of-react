const isPrime = (num) => {
   if (num < 2) return false;
   for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
   }
   return true;
};

const getColor = (num) => {
   if (num % 2 === 0) {
      return 'green'; // Even numbers
   } else if (isPrime(num)) {
      return 'red'; // Prime numbers
   } else {
      return 'yellow'; // Odd numbers
   }
};

const Table = () => {
   const rows = [];
   const rowCount = 4;
   const colCount = 8;
   for (let i = 0; i < rowCount; i++) {
      const cells = [];
      for (let j = 0; j < colCount; j++) {
         const num = i * colCount + j;
         const cellColor = getColor(num);
         cells.push(
            <td key={j} style={{ backgroundColor: cellColor }}>
               {num}
            </td>
         );
      }
      rows.push(<tr key={i}>{cells}</tr>);
   }
   return (
      <table className="days">
         <tbody>{rows}</tbody>
      </table>
   );
};
export { Table };

// Function to generate a random hexadecimal color
const hexColor = () => {
   let str = '0123456789abcdef';
   let color = '';
   for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
   }
   return '#' + color;
};

// Component for a single table cell
const TableCell = () => {
   const bgdColor = hexColor();

   const cellStyle = {
      backgroundColor: bgdColor,
      padding: '10px',
      border: '1px solid #000',
   };

   return <td style={cellStyle}>{hexColor()}</td>;
};

// Component for the table
const ColorTable = () => {
   const rows = 4;
   const columns = 8;

   // Create a 2D array to represent the table
   const tableData = Array.from({ length: rows }, () => Array.from({ length: columns }));

   return (
      <table className="colors">
         <tbody>
            {tableData.map((row, rowIndex) => (
               <tr key={rowIndex}>
                  {row.map((_, colIndex) => (
                     <TableCell key={colIndex} />
                  ))}
               </tr>
            ))}
         </tbody>
      </table>
   );
};
export { ColorTable }