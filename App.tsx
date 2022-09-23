import React, { useEffect } from "react";
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native";
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen/RegisterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import AppColors from "./src/styles/AppColors";
import useAuth from "./src/hooks/useAuth";
import { addOnUnAuthorizeListener, setAccessToken } from "./src/network/client";
import OnboardingSceen from "./src/screens/OnboardingSceen/OnboardingSceen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen/ForgotPasswordScreen";
import VerifyOTPScreen from "./src/screens/VerifyOTPScreen/VerifyOTPScreen";
import ResetPasswordScreen from "./src/screens/ResetPasswordScreen/ResetPasswordScreen";
import MyDrawer from "./src/screens/HomeScreen/MyDrawer";
import RuleWithLoginScreen from "./src/screens/RuleWithLoginScreen/RuleWithLoginScreen";
import SettingScreen from "./src/screens/SettingScreen/SettingScreen";

export type RootStackParamList = {
  SplashScreen: undefined,
  LoginScreen: undefined,
  RegisterScreen: undefined,
  HomeScreen: undefined,
  OnboardingSceen: undefined,
  ForgotPasswordScreen: undefined,
  VerifyOTPScreen: undefined,
  RestPassWordScreen: undefined,
  RuleWithLoginScreen: undefined,
  MyDrawer: undefined,
  SettingScreen: undefined,
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();
export const NavigationRef = React.createRef<NavigationContainerRef<RootStackParamList>>();

const App = () => {
  const { authData, signOut } = useAuth();
  const user = authData.user;

  useEffect(() => {
    addOnUnAuthorizeListener(() => {
      signOut();
    });
  }, []);

  useEffect(() => {
    setAccessToken(authData.token);
  }, [authData]);

  return <SafeAreaProvider
    initialMetrics={initialWindowMetrics}>
    <StatusBar
      translucent
      barStyle={"dark-content"}
      backgroundColor={AppColors.color_transparent}
    />
    <NavigationContainer
      ref={NavigationRef}>
      <RootStack.Navigator
        screenOptions={{ headerShown: false }}>
        {
          user
            ?
            <>
              <RootStack.Screen
                name={"MyDrawer"}
                component={MyDrawer}
              />

              <RootStack.Screen
                name={"HomeScreen"}
                component={HomeScreen} />

              <RootStack.Screen
                name={"SettingScreen"}
                component={SettingScreen} />
            </>


            :
            <>
              <RootStack.Screen
                name={"OnboardingSceen"}
                component={OnboardingSceen} />

              <RootStack.Screen
                name={"LoginScreen"}
                component={LoginScreen} />

              <RootStack.Screen
                name={"RegisterScreen"}
                component={RegisterScreen} />

              <RootStack.Screen
                name={"ForgotPasswordScreen"}
                component={ForgotPasswordScreen} />
              <RootStack.Screen
                name={"VerifyOTPScreen"}
                component={VerifyOTPScreen} />
              <RootStack.Screen
                name={"RestPassWordScreen"}
                component={ResetPasswordScreen} />
              <RootStack.Screen
                name={"RuleWithLoginScreen"}
                component={RuleWithLoginScreen} />
            </>
        }
      </RootStack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>;
};


export default App;
