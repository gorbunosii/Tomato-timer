const array = [
    {
      id: 12,
      name: 'Name 1',
    },
    {
      id: 22,
      name: 'Name 2',
    },
    {
      id: 32,
      name: 'Name 3',
    },
    {
      id: 222,
      name: 'Name 2',
    },
  ];

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