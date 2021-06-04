CONSTS = {
    PORT:process.env.PORT || 9001,
    IP:process.env.IP || '0.0.0.0',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_USER: process.env.DB_USER || 'root'
}

module.exports = CONSTS