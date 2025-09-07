const {test,expect} = require('@playwright/test');
//Se esta probando las paginas tools qa, malwarebytes y python
const casos = [
    {name: "Prueba 1 tools qa", url: "https://www.toolsqa.com/", value: "Tools QA"},
    {name: "Prueba 2 tools qa", url: "https://www.toolsqa.com/", value: /QA/},
    {name: "Prueba 3 malwarebytes", url: "https://www.malwarebytes.com/es/", value: "Malwarebytes Antivirus, antimalware, Privacy  y contra estafas"},
    {name: "Prueba 4 malwarebytes", url: "https://www.malwarebytes.com/es/", value: /antimalware/},
    {name: "Prueba 5 python", url: "https://www.python.org/", value: "Welcome to Python.org"},
    {name: "Prueba 6 python", url: "https://www.python.org/", value: /Python/},    
];

for (const {name, url, value} of casos) {
    test(`Verificar titulo correcto en ${name}`, async ({page}) => {
        await page.goto(url);
        await sleep(3000);
        await expect(page).toHaveTitle(value);
    });
}

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}