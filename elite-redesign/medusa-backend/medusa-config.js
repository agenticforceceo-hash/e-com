const dotenv = require('dotenv');
let ENV_FILE_NAME = '.env';
try { dotenv.config({ path: process.cwd() + '/' + ENV_FILE_NAME }); } catch (e) {}

module.exports = {
  projectConfig: {
    database_url: process.env.DATABASE_URL,
    database_type: "postgres",
    store_cors: process.env.STORE_CORS || "http://localhost:8000",
    admin_cors: process.env.ADMIN_CORS || "http://localhost:7001",
    jwt_secret: process.env.JWT_SECRET || "something_secret",
    cookie_secret: process.env.COOKIE_SECRET || "something_secret",
  },
  plugins: [],
};
