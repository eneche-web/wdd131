const currentYear = document.querySelector("#year");

const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();

lastModified.textContent = 'Last Modified ${document.lastModified}';

//Static weather values

const temperature = 30;
const windSpeed = 10;

function calculateWindChill(temp,speed)
{
    return(
        13.12 + 0.6215 * Math.pow(speed, 0.16)
    ). toFixed(1);

}

const windChill = document.querySelector("#windchill");
if (
    temperature <= 10 && windSpeed > 4.8
)
{
    windChill.textContent = '${calculateWindChill(temperature, windSpeed)} oC';
}
else
{
    windChill.textContent = "N/A";
}
