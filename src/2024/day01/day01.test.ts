import { totalDistanceBetweenLists } from './day01';
import { getListsAsNumbers } from './util';

describe('totalDistanceBetweenLists', () => {
    it('count the total distance between two lists', async () => {
        const { leftList, rightList } = await getListsAsNumbers();
        expect(totalDistanceBetweenLists(leftList, rightList)).toBe(2066446);
    });
});
