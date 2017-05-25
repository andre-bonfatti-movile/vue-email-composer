export const data = {
  rows: [

    // single row format example
    {
      id: 1,
      component: 'app-single-row',
      rowProperties: { backgroundColor: '#2C2D37' },
      contentProperties: { },
      column1: {
        contentList: [
          { id: 10, component: 'app-empty-content', properties: { } }
        ],
        properties: { padding: '20px' }
      }
    },

    {
      id: 2,
      component: 'app-single-row',
      rowProperties: { backgroundColor: '#323341' },
      contentProperties: { padding: '40px' },
      column1: {
        contentList: [
          { id: 11, component: 'app-empty-content', properties: { } }
        ],
        properties: { }
      }
    },

    // double row format example
    {
      id: 3,
      component: 'app-double-row',
      rowProperties: { backgroundColor: '#61626F' },
      contentProperties: { backgroundColor: '', padding: '20px' },
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
