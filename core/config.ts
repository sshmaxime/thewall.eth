import * as dotenv from "dotenv";

dotenv.config();

export default {
  dev_secret: process.env.DEV_SECRET as string,
  infura_kovan_api: process.env.INFURA_KOVAN_API as string,
};
