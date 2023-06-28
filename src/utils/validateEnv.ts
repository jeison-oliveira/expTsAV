import { cleanEnv, port, str } from 'envalid';

function validateEnv() {
  cleanEnv(process.env, {
    PORT: port(),
    NODE_ENV: str(),
    BCRYPT_ROUNDS: str(),
  });
}

export default validateEnv;
