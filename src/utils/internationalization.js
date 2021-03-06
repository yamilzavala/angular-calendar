const { utcToZonedTime , format: formatTz  } = require("date-fns-tz");
const date = new Date();

export function parseDate (date, timeZone) {
    const newDate = utcToZonedTime(date, timeZone);
    return formatTz(newDate,'HH:mm:ss', {timeZone});
}

const message = `
π¨π·π­π³ ${parseDate(date, 'America/Costa_Rica')}
π¨π΄π΅πͺπͺπ¨π²π½ ${parseDate(date, 'America/Bogota')}
π»πͺπ§π΄π΅πΎπ¨π± ${parseDate(date, 'America/La_Paz')}
πΊπΎπ¦π·π§π· ${parseDate(date, 'America/Montevideo')}
πͺπΈ ${parseDate(date, 'Europe/Madrid')}
AR ${parseDate(date, 'America/Argentina/Buenos_Aires')}
`;

console.log(message);

// export default parseDate;