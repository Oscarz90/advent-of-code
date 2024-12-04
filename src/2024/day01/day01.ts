export function totalDistanceBetweenLists(
    leftList: Array<number>,
    rightList: Array<number>,
) {
    leftList.sort((a, b) => a - b);
    rightList.sort((a, b) => a - b);
    let totalDistance = 0;

    for (let i = 0; i < leftList.length; i++) {
        totalDistance += Math.abs(leftList[i] - rightList[i]);
    }

    return totalDistance;
}
