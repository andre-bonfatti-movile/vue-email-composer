export const data = {
  rows: [

    // single row format example
    {
      id: 1,
      component: 'app-single-row',
      rowProperties: {},
      column1: {
        contentList: [
          { id: 10, component: 'app-empty-content', properties: { } },
          { id: 11, component: 'app-empty-content', properties: { } }
        ],
        properties: { }
      }
    },

    // double row format example
    {
      id: 2,
      component: 'app-double-row',
      rowProperties: {},
      column1: {
        contentList: [
          { id: 12, component: 'app-image-content', properties: { } }
        ],
        properties: { }
      },
      column2: {
        contentList: [
          { id: 13, component: 'app-image-content', properties: { } }
        ],
        properties: { }
      }
    }

  ]
};
