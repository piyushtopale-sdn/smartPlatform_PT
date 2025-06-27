import dotenv from 'dotenv';
dotenv.config();

export const config = {
SERVICE_A_URL: process.env.SERVICE_A_URL,
SERVICE_B_URL: process.env.SERVICE_B_URL,
GATEWAY_PORT: process.env.GATEWAY_PORT,
};
