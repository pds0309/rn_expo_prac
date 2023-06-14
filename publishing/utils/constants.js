import Constants from "expo-constants";

// 앱의 환경 변수에 접근
export const { HELLO } = Constants.manifest.extra;
console.log(Constants.manifest.extra);
