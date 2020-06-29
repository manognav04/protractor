const title = element(by.id('hplogo'));

export const getTitle = () => {
    title.getText();
}