import React from 'react';
import express from 'express';
import path from 'path';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';

import App from './components/App';

import { MatchProvider } from './context/MatchContext';

function htmlTemplate(reactDom, helmetData) {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <link rel="stylesheet" href="./styles/styles.scss" />

            ${helmetData.title.toString()}
            ${helmetData.meta.toString()}
            ${helmetData.link.toString()}

            <title>React SSR</title>

        </head>
        
        <body>
            <div id="root">${reactDom}</div>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', (req, res) => {
  const jsx = (
    <MatchProvider>
      <App />
    </MatchProvider>
  );
  const reactDom = renderToString(jsx);
  const helmetData = Helmet.renderStatic();

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlTemplate(reactDom, helmetData));
});

app.listen(3000);
