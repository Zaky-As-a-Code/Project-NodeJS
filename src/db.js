import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "zaky_user_db",
  password: "zakypass",
  port: 3306,
  database: "zekoflix_db",
});
