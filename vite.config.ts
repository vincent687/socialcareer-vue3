import { resolve, loadEnv } from "./build/utils";
import { UserConfig } from "vite";

const viteConfig: UserConfig = {
  alias: {
    "/@/": resolve("src"),
    "/@components/": resolve("./src/components"),
  },
};

export default viteConfig;
