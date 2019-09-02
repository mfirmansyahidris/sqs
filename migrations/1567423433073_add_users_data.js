module.exports = {
    "up": `
            INSERT IGNORE INTO users(id, first_name, last_name, email, create_date, create_by) 
            VALUES 
                ('manca', 'manca', 'fi', 'manca.fi@gmail.com', NOW(), '_seeders'),
                ('kedongdong', 'kedongdong', 'manis', 'kedonggong@gmail.com', NOW(), '_seeders'),
                ('bambang', 'bambang', 'cahyono', 'mr.bambang@yahoo.com', NOW(), '_seeders'),
                ('syamsuddin', 'udin', 'syam', 'udin.syam@hotmail.com', NOW(), '_seeders')
    `,
    "down": `DELETE FROM users WHERE id IN ('manca', 'kedongdong', 'bambang', 'syamsuddin')`
}