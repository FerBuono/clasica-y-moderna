export const sort = (array, sortBy, order) => {
    order === 'decreasing' 
        ? array.sort((a, b) => {
            let x = a[sortBy];
            let y = b[sortBy];
            return x < y ? -1 : (x > y ? 1 : 0)
        })
        : array.sort((a, b) => {
            let x = a[sortBy];
            let y = b[sortBy];
            return x > y ? -1 : (x < y ? 1 : 0)
        });
    
    return array;
};