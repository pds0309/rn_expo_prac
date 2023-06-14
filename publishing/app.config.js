import "dotenv/config";

export default {
  expo: {
    name: "My App Name",
    slug: "myapp",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      buildNumber: "1.0.0",
      supportsTablet: true,
    },
    android: {
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "f1cf833d-3480-42c9-928c-a1a03093a101",
      },
      HELLO: process.env.HELLO ?? "no env",
    },
  },
};
