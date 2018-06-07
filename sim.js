const sizeof = require('object-sizeof');

[30, 300, 30000, 300000, 3000000].forEach(n => scenario(n));

function scenario(numberOfItems) {
    console.log('-------------------------------------------------');
    console.log(`Handling ${numberOfItems} items: ${sizeof(makeItems(numberOfItems))} BYTES`);

    (() => {
        const items = makeItems(numberOfItems);
        test(() => {
            items[randomIntFromInterval(0, numberOfItems - 1)].id = 'waldo';
            const found = items.filter(i => i.id === 'waldo');
        }, 'find one');
    })();

    (() => {
        const items = makeItems(numberOfItems);
        test(() => {
            items[randomIntFromInterval(0, numberOfItems - 1)].id = 'findme';
            const foundIndex = items.findIndex(i => i.id === 'findme');
            const newItems = items.slice(foundIndex, foundIndex + 20);
        }, 'find index and return next 20 items')
    })();
}

function makeItems(n) {
    const range = n => Array.from(new Array(n).keys());
    const randomText = _ => Math.random().toString(36).substring(7);
    return items = range(n).map(i => ({ i, id: randomText(), text: randomText(), text2: randomText() }));
}

function test(fn, testName) {
    console.time(testName);
    fn();
    console.timeEnd(testName);
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
