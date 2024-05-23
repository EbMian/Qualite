import { test } from '@playwright/test';


test.describe("BOTW", () => {
	test.beforeEach(async ({page}) => {
        await page.goto('http://localhost:8000')
        await page.evaluate(() => {
            // Code JS exécuté sur la page
            window.scrollTo(0, document.body.scrollHeight);
            // /Code JS exécuté sur la page
        });
    });	

	test("Teste si L’indicateur de chargement est visible", async ({ page }) => {
        // Mock the api call before navigating
        await page.route('*/**/api.php', async route => {});
               
        // Teste si L’indicateur de chargement est visible
        const locator = page.locator('#comments-loading').first();
        await test.expect(locator).toBeVisible();
        //await page.pause();
    });

    test("Si la requête retourne un tableau vide, le compteur affiche 0 commentaires et la liste est vide.", async ({ page }) => {
        // Mock the api call before navigating
        await page.route('*/**/api.php', async route => {
            const json = [];
            await route.fulfill({ json });
        });
        await page.pause();
    });
});