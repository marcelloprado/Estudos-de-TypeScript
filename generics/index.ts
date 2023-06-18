function makeArray<T> (item: T): T[] {
    return [item];
}

const numbers = makeArray(40);
console.log(numbers);

const names = makeArray('Marcello');
console.log(names);
