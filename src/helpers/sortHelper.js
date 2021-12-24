export const sort = (array) => {
    array.sort((a, b) => {
        let x = a.title;
        let y = b.title;
        return x < y ? -1 : (x > y ? 1 : 0);
    });
    
    return array;
};