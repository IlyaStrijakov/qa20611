describe ('Test of counters', () =>{
    it ('should have the right title', () => {
        browser.url('https://likejean.github.io/homework-5/');
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Complex Counter App';
        expect(actualTitle).toEqual(expectedTitle);
    });
    it('Verify that a header exists on the top of the page and its named as "Counters', function () {
        browser.url('https://likejean.github.io/homework-5/');
        const title = $("//h1[@class = 'header']");
        expect(title.getText()).toEqual('Counters');
    });
    it('Verify that the input field for counter title is present on the page with default value "Counter Name"!', function () {
        browser.url('https://likejean.github.io/homework-5/');
        const counterName = $("//input[@name ='name']");
        expect(counterName.getAttribute('value')).toEqual('Counter Name');
    });
    it('Verify that the input field for Initial Count is present on the page with default value "50".', function () {
        browser.url('https://likejean.github.io/homework-5/');
        const initialCount = $("//input[@name ='value']");
        expect(initialCount.getAttribute('value')).toEqual('50');
    });
});

