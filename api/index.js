const express = require("express");
const app = express();

app.get("/testtimeout", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Redirecting</title>
        </head>
        <body>
            <script>
  
  window.location.href = "/bill";
            </script>
            <p>testest.</p>
        </body>
        </html>
    `);
});
app.get("/bill", (req, res) => {
  setTimeout(() => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Redirecting</title>
      </head>
      <body>

          <p>redirect success.</p>
      </body>
      </html>
  `);
  }, 60001);
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
