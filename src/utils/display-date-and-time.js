export const showDate = (time) => {
   const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
   ]

   const month = months[time.getMonth()].slice(0, 3)
   const year = time.getFullYear()
   const date = time.getDate()
   const hours = time.getHours();
   const minutes = time.getMinutes();
 
   // Format single-digit minutes with leading zero
   const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
 
   return `${month} ${date}, ${year} ${hours}:${formattedMinutes}`;
 };