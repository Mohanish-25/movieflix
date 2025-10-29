const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// `globals.css` lives in the `app/` directory (app/globals.css).
// Point NativeWind's metro integration to that file so it can process styles.
module.exports = withNativeWind(config, { input: "./app/globals.css" });
