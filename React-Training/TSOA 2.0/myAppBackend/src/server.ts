// src/server.ts
import { app } from "./app";

const port = process.env.PORT || 3006;

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);