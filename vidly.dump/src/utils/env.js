import "dotenv/config"

export const JWT_EXPIRES_IN_MINUTE = parseInt(process.env.JWT_EXPIRES_IN_MINUTE);
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export const APP_PORT = parseInt(process.env.APP_PORT);
export const NODE_ENV = process.env.NODE_ENV;
export const MONGODB_URI = process.env.MONGODB_URI;

export const appEnvs = {
    development: "development",
    production: "production"
};

export const verifyEnv = () => {
    if (!JWT_SECRET_KEY) {
        throw new Error("Must have JWT_SECRET_KEY in env");
    }
    if (!JWT_EXPIRES_IN_MINUTE) {
        throw new Error("Must have JWT_EXPIRES_IN_MINUTE in env");
    }
    if (!APP_PORT) {
        throw new Error("Must have APP_PORT in env");
    }
};