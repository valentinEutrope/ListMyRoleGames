import { defineConfig, loadEnv } from "vite";
import { fileURLToPath, URL } from "url";
import react from "@vitejs/plugin-react";

const getSrcAliases = (srcFolders: string[]): { [key: string]: string } =>
  srcFolders.reduce((acc, srcFolder) => {
    const aliasPath = "./src" + srcFolder;

    return {
      ...acc,
      [srcFolder]: fileURLToPath(new URL(aliasPath, import.meta.url)),
    };
  }, {});

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const srcFolders = [
    "utils",
    "components",
    "services",
    "assets",
    "pages",
    "hooks",
    "types",
    "styles",
  ];

  const aliases = {
    ...{
      public: fileURLToPath(new URL("./public", import.meta.url)),
    },
    ...getSrcAliases(srcFolders),
  };

  return {
    plugins: [react()],
    resolve: {
      alias: aliases,
    },
  };
});
