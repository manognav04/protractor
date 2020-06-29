import * as page from '../page_object/search.page';
import { browser } from 'protractor';

describe('google search page', () => {
    beforeEach(() => {
        browser.get('htpps://www.google.com');
        browser.sleep(2000);
    })

    it('should verify the title google', () => {
        expect(page.getTitle()).toEqual('Google');
    })
})