import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../shared/app";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <script src="/bundle.js" defer></script>
        <title>Hello World</title>
    </head>
    <body>
        <div id="root">${renderToString(<App />)}</div>
    </body>
    </html>
  `);
});

app.listen( 3000, () => {
  console.log(`Server is Running`);
});
