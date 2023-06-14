## React Native Expo Prac

<br>

## basic prac - expense app

### Dep

```
npm install @react-navigation/native
expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
npm install axios
firebase
```

<br>

### Prac

- [x] navigation(stack, bottom-tabs) 처리
- [x] 기본적인 style 적용하기
- [x] context api 활용 global state crud
- [x] 사용자 입력 처리
- [x] http 요청 처리

<br>

## authentication prac

### Dep

```
npm install @react-navigation/native
expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
npm install axios
npm install react-redux @reduxjs/toolkit
firebase
```


<br>

### Prac

- [X] 비로그인 시 로그인 화면이 최초에 식별된다.
- [X] 비로그인 시 로그인/회원가입 navigation이 식별된다.
- [X] 비로그인 시 로그인/회원가입을 할 수 있다.
- [X] 로그인 시/로그인 된 사용자에게 최초에 welcom 화면이 식별된다.
- [X] 로그인 시 mypage, welcome이 식별된다.


<br>


## Native Device Prac

### Dep

```
npm install @react-navigation/native @react-navigation/native-stack
expo install expo-image-picker
expo install expo-location
npm install react-native-maps
```

<br>


### Prac

- [X] Camera(ExpoImagePicker)
- [X] Location(ExpoLocation) & Map(react-native-maps)

<br>

### Etc

- useNavigation
- useRoute
- useIsFocused

<br>

## Notification

### Dep

```
npx expo install expo-notifications
```

<br>

### Prac

- [X] local notification
- [X] push notification

<br>


## Expo Publishing

### Dep

```
//env
npx expo install dotenv
//build
npm install -g eas-cli
eas login
eas build:configure
eas build -p android --profile [profile]
```


### Configuring Procedure

- Permission: Control permissions requested 

- AppName & Idedentifier: visible App Name, version, App Identifier

- Env variables: store variables securely in app-wide

- Icons & Splash Screen 


 