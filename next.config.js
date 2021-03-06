module.exports = {
  future: {
    webpack5: true,
  },
  webpack(config) {
    config.experiments = { syncWebAssembly: true };
    config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm";
    return config;
  },
};
