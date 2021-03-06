const data = [
  {
    id: 39,
    title: "广州教学部",
    children: [
      { id: 45, title: "教务组", children: null },
      {
        id: 120,
        title: "师训处",
        children: [
          { id: 46, title: "师训处", children: null },
          {
            id: 56,
            title: "兼职组",
            children: [
              { id: 229, title: "兼职C00组", children: null },
              { id: 230, title: "兼职C01组", children: null },
              { id: 231, title: "兼职C02组", children: null },
              { id: 232, title: "兼职C03组", children: null },
              { id: 233, title: "兼职C04组", children: null },
              { id: 234, title: "兼职C05组", children: null },
              { id: 235, title: "兼职C06组", children: null },
              { id: 236, title: "兼职C07组", children: null },
              { id: 237, title: "兼职C08组", children: null },
              { id: 278, title: "兼职C09组", children: null },
            ],
          },
          { id: 344, title: "兼职demo管理组", children: null },
        ],
      },
    ],
  },
];

function structureDFS(data, id) {
  let path = [],
    finded = false;
  const fn = (data, id) => {
    if (data instanceof Array) {
      for (let i = 0; i < data.length; i++) {
        let item = data[i];
        path.push(item.id);
        if (item.id === id) {
          finded = true;
          return;
        }
        fn(item.children, id);
        if (finded === true) return;
        path.pop();
      }
    }
    return;
  };
  fn(data, id);
  return path;
}

function structureDFS(data, id) {
  if (data instanceof Array) {
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      if (item.id === id) {
        return [item.id];
      } else {
        let res = structureDFS(item.children || [], id);
        if (res) {
          return [item.id, ...res];
        }
      }
    }
  }
  return false;
}

const reuslt = structureDFS(data, 278);

console.log(reuslt);
