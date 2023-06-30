import WordTransform from "../../src/utils/util";

describe('validate wordTransform Util', () => {
    test('validate a word in uppercase', () => {
        expect(WordTransform("HELLO")).toEqual('hello');

    })
})