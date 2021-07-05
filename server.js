const express = require("express");

const app = express();

//5000 Portu veya ortamda uygun olan portun kullanılmasını sağlar.
const PORT = 5000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Anasayfa");
});

app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`));
