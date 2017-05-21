export const data = {
  rows: [

    // single row format example
    {
      id: 1,
      component: 'app-single-row',
      columns: [
        {
          contentList: [
            { id: 10, component: 'app-image-content', properties: { } },
            { id: 11, component: 'app-image-content', properties: { } }
          ],
          properties: { }
        }
      ]
    },

    // single row format example
    {
      id: 2,
      component: 'app-double-row',
      columns: [
        {
          contentList: [
            { id: 12, component: 'app-image-content', properties: { } }
          ],
          properties: { }
        },
        {
          contentList: [
            { id: 13, component: 'app-image-content', properties: { } }
          ],
          properties: { }
        }
      ]
    }

  ]
};
