module.exports = {
    "up": `CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(30) NOT NULL PRIMARY KEY,
        first_name VARCHAR(50) NULL,
        last_name VARCHAR(50) NULL,
        email VARCHAR(100) NULL,
        password VARCHAR(255) NOT NULL,
        create_date DATE NOT NULL,
        create_by VARCHAR(30) NOT NULL,
        update_date DATE NOT NULL,
        update_by VARCHAR(30) NOT NULL
    )`,
    "down": `DROP TABLE IF EXISTS users`
}