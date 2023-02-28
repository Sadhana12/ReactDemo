const express = require("express");
const fs = require("fs");

const app = express();

app.set("port", process.env.PORT || 3001);

app.get("/api/users", (req, res) => {
  const fs = require('fs');
  res.setHeader('Content-Type', 'application/json');

  fs.readFile('./db/data.json', 'utf8', (err, jsonString) => {
    if (err) {
      res.json({ error: "Error reding data file" });
      return;
    }
    res.json(JSON.parse(jsonString));
    //res.json(jsonString);
  });

});

app.get('/api/adduser', (req, res) => {
  const param = req.query.q;
  const fs = require('fs');
  const fs2 = require('fs');

  var newString = "", newString2 = "";

  if (!param) {
    res.json({
      error: "Missing required parameter `q`"
    });
    return;
  }
  newString = fs.readFileSync('./db/data.json', 'utf8');
  //console.log(newString.substring(1));

  newString2 = "[{\"text\": \"" + param.toString() + "\"}," + newString.substring(1);
  // console.log(newString2);

  if (newString2.length > 0) {
    fs2.writeFileSync('./db/data.json', newString2);

  }
  /*
'./db/data.json', 'utf8', (err, jsonString) => {
   if (err) {
       res.json({error: "Error reding data file"});
       return;
       }
       res.json(JSON.parse(jsonString));
       //res.json(jsonString);
   });
   */
  //console.log(newString);
  res.json(newString2);
});


app.get("/api/strlist", (req, res) => {
  const fs = require('fs');
  res.setHeader('Content-Type', 'application/json');

  fs.readFile('./db/data.json', 'utf8', (err, jsonString) => {
    if (err) {
      res.json({ error: "Error reding data file" });
      return;
    }
    console.log(jsonString);
    res.json(JSON.parse(jsonString));
  });

});

app.get("/api/items", (req, res) => {
  const fs = require('fs');
  res.setHeader('Content-Type', 'application/json');

  fs.readFile('./db/items.json', 'utf8', (err, jsonString) => {
    if (err) {
      res.json({ error: "Error reding data file" });
      return;
    }
    res.json(JSON.parse(jsonString));
    //res.json(jsonString);
  });

});



app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
