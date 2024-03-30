const filter = (arr, key, val) => {
    const newArr = [];
    if (key === 'name') {
        for (const keys in arr) {
            if (arr[keys].name === val) {
                newArr.push(arr[keys]);
            }
          }
    } else {
        for (const keys in arr) {
            if (arr[keys].id === val) {
                newArr.push(arr[keys]);
            }
          }
    }

      return newArr;
};

export default filter;