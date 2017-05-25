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
          { id: 10, component: 'app-text-content', style: { color: '#FAFAFA', textAlign: 'center' }, html: '<h2>Your title <i>here</i>!</h2>' }
        ],
        properties: { padding: '20px' }
      }
    },

    {
      id: 3,
      component: 'app-single-row',
      rowProperties: { backgroundColor: '#61626F' },
      contentProperties: { backgroundColor: '', padding: '20px' },
      column1: {
        contentList: [
          { id: 12, component: 'app-image-content', properties: { } }
        ],
        properties: { }
      }
    },

    {
      id: 2,
      component: 'app-single-row',
      rowProperties: { backgroundColor: '#323341' },
      contentProperties: { padding: '40px' },
      column1: {
        contentList: [
          { id: 11, component: 'app-text-content', style: { color: 'white', lineHeight: '1.5em', fontSize: '18px' }, html: 'Your text here.<br/>Try <b>selecting</b> words or letters to edit it :-)<br/><br/>If you feel uncomfy about something, try pressing <u>CTRL+Z</u> or <u>CMD+Z</u>' }
        ],
        properties: { }
      }
    }

  ]
};
