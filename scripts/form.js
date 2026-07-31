const product =[
    {
        id: "fc-1888",
        name: "Flux Capacitor"
    },
    {
        id: "fc-2050",
        name: "Power Laces"
    },
    {
        id: "fs-1987",
        name: "Time circuits"
    },
    {
        id: "ac-2000",
        name: "Low Voltage Reactor"
    },
    {
        id: "jj-1969",
        name: " w   rap Equalizer"
    }
];


const productSelect = document.querySelector("#product");

product.forEach(product => {
    const option = document.createElement("option");

    option.value = product.id;
    option.textContent = product.name;

    productSelect.appendChild(option);
})

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = 'Last Modified: ${document.lastModified}';