import { readFileLines } from '../../utils/files';
import path from 'path';

export async function getListsAsNumbers() {
    const inputFile = path.resolve(__dirname, 'day01.input.txt');
    console.log(inputFile);
    const leftList: number[] = [];
    const rightList: number[] = [];
    const lines = await readFileLines(inputFile);
    lines.forEach((line) => {
        const [left, right] = line.trim().split(/\s+/).map(Number);
        leftList.push(left);
        rightList.push(right);
    });

    return { leftList, rightList };
}
