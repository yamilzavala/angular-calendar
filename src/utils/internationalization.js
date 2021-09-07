const { utcToZonedTime , format: formatTz  } = require("date-fns-tz");
const date = new Date();

export function parseDate (date, timeZone) {
    const newDate = utcToZonedTime(date, timeZone);
    return formatTz(newDate,'HH:mm:ss', {timeZone});
}

const message = `
🇨🇷🇭🇳 ${parseDate(date, 'America/Costa_Rica')}
🇨🇴🇵🇪🇪🇨🇲🇽 ${parseDate(date, 'America/Bogota')}
🇻🇪🇧🇴🇵🇾🇨🇱 ${parseDate(date, 'America/La_Paz')}
🇺🇾🇦🇷🇧🇷 ${parseDate(date, 'America/Montevideo')}
🇪🇸 ${parseDate(date, 'Europe/Madrid')}
AR ${parseDate(date, 'America/Argentina/Buenos_Aires')}
`;

console.log(message);

// export default parseDate;