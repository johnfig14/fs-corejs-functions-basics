import Test from 'ava';
import * as Assignment from '../src';

Test('johnnyFive exported properly', t => t.truthy(Assignment.johnnyFive));

Test('johnnyFive has a greet function', t => t.truthy(Assignment.johnnyFive.greet));

Test(`johnnyFive's greet function returns the proper greeting`, t => t.is(Assignment.johnnyFive.greet(), 'Johnny Five is Alive'));

Test(`johnnyFive's greet function takes a name parameter`, t => t.is(Assignment.johnnyFive.greet('Tyler'), `Hello, Tyler. I am Johnny 5.  I am alive!`));

Test('shout function is exported', t => t.truthy(Assignment.shout));

Test(`shout function works properly`, t => t.is(Assignment.shout('Booyah'), 'BOOYAH!!!'));

Test('playing with AVA - addition', t => {
    t.deepEqual(1 + 1, 2)
});

Test('playing with AVA - subtraction', t => {
    t.deepEqual(5 - 2, 3)
});

Test('playing with AVA - multiplication', t => {
    t.deepEqual(5 * 5, 25)
});

Test('playing with AVA division', t => {
    t.deepEqual(5 / 5, 1)
});

Test(`playing with AVA - truthy`, t => {
    t.truthy('Alphabet soup' === 'Alphabet soup')
});

Test('playing with AVA - falsy', t => {
    t.falsy('Cheese' === 'Butter')
});



