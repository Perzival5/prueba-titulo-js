const {test,expect} = require('@playwright/test');

test('validar titulo exacto', async ({ page }) => {
  // Abre la pagina toolsqa.com
  await page.goto('https://www.toolsqa.com/');

  await sleep(3000)

  // Verificacion del titulo exacto
  await expect(page).toHaveTitle('Tools QA');
});

test('validar titulo con regex (contiene palabra)', async ({ page }) => {
  // Abre la pagina toolsqa.com
  await page.goto('https://www.toolsqa.com/');
    
  await sleep(3000)

  // Verificamos palabra
  await expect(page).toHaveTitle(/QA/);
});

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}