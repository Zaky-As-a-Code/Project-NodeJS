import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "mysql-service.default.svc.cluster.local",
  user: "zaky",
  password: "zakypass",
  port: 3306,
  database: "zakydb",
});
