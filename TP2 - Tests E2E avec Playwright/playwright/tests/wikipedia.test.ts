import { test, expect } from '@playwright/test';



test("Google", async ({page}) => {
    await page.goto('https://fr.wikipedia.org');

    // Vérifie que la page contient le titre Wikipédia
    await expect(page).toHaveTitle(/Wikipédia/); 

    // Saisi Rick Roll dans la barre de recherche
    const locator = page.locator('#p-search input.cdx-text-input__input').first();
    await locator.fill('Rick Roll');

    // Clique sur le lien Rick Roll
    await page.getByRole('link', { name: 'Rickroll mème internet' }).click();
    

    // Vérifie que la nouvelle page a l’URL https://fr.wikipedia.org/wiki/Rickroll
    await expect(page.url()).toEqual('https://fr.wikipedia.org/wiki/Rickroll');

    // Vérifie que la page contient le titre Wikipédia
    await expect(page).toHaveTitle(/Rickroll/); 

    // Vérifie que le lien Never Gonna Give You Up est visible dans la viewport
    // getByRole('link', { name: 'Never Gonna Give You Up', exact: true })
    const _link = page.getByRole('link', { name: 'Never Gonna Give You Up' }).first();
    await expect(_link).toBeVisible();
    await page.pause();
});