import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "dbc",
  user: "zaky",
  password: "zakypass",
  port: 3306,
  database: "zakydb",
});
