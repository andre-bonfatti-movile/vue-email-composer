export const data = {
  rows: [

    // single row format example
    {
      id: 1,
      rowProperties: { backgroundColor: '#2C2D37' },
      contentProperties: { backgroundColor: '' },
      columns: [{
        contentList: [
          { id: 10, component: 'app-text-content', style: { color: '#FAFAFA', textAlign: 'center' }, html: '<h1 style="font-size:3em;">Your title <i>here</i>!</h1>' }
        ],
        properties: { padding: '20px' }
      }]
    },

    {
      id: 3,
      rowProperties: { backgroundColor: '#61626F' },
      contentProperties: { backgroundColor: '' },
      columns: [
        {
          contentList: [
            { id: 12, component: 'app-image-content', properties: { } }
          ],
          properties: { padding: '50px 40px' }
        }
      ]
    },

    {
      id: 2,
      rowProperties: { backgroundColor: '#323341' },
      contentProperties: { padding: '40px', backgroundColor: '' },
      columns: [{
        contentList: [
          {
            id: 11, component: 'app-text-content',
            style: { color: 'white', lineHeight: '1.5em', fontSize: '18px' },
            html: 'Your text here.<br/><h2>Try selecting this text to edit it :-)</h2>If you feel uncomfy about something, try pressing <b><u>CTRL+Z</u></b> or <b><u>CMD+Z</u></b>'
          }
        ],
        properties: { }
      }]
    }

  ]
};
