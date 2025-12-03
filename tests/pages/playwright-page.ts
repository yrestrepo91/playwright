import { Locator, Page } from '@playwright/test';

export class playwrightPage {
    readonly page: Page;
    readonly startButton: Locator;
    constructor(page: Page){
        this.page = page
        this.startButton = this.page.getByText('Get started')
    }

    async navigate(){
        await this.page.goto('https://playwright.dev/');
    }

}