CONSTS = {
    PORT:process.env.PORT || 9001,
    IP:process.env.IP || '0.0.0.0',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DATABASE: process.env.DATABASE || 'site-caridade',
}

module.exports = CONSTS