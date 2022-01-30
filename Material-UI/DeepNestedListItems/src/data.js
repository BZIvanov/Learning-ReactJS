const data = [
  {
    id: '1',
    name: 'One',
    items: [],
  },
  {
    id: '2',
    name: 'Two',
    items: [
      {
        id: '21',
        name: 'Two One',
        items: [
          {
            id: '211',
            name: 'Two One One',
            items: [
              {
                id: '2111',
                name: 'Two One One One',
                items: [],
              },
              {
                id: '2112',
                name: 'Two One One Two',
                items: [
                  {
                    id: '21121',
                    name: 'Two One One Two One',
                    items: [],
                  },
                ],
              },
            ],
          },
          {
            id: '212',
            name: 'Two One Two',
            items: [],
          },
        ],
      },
      {
        id: '22',
        name: 'Two Two',
        items: [],
      },
    ],
  },
  {
    id: '3',
    name: 'Three',
    items: [],
  },
];

export default data;
