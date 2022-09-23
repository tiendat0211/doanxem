import React from "react";
import { Button, Dimensions, Image, Platform, SafeAreaView, StatusBar, Text, View } from "react-native";
import AppStyles from "../../styles/AppStyles";
import useAuth from "../../hooks/useAuth";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AppColors from "../../styles/AppColors";
import { useTheme } from "../../hooks/useTheme";
import { unit1, unit12, unit15, unit20, unit24, unit32, unit35, unit5, unit8 } from "../../utils/appUnit";
import { IC_DRAWER, IC_FILTER, IC_HOTTAB, IC_NEWTAB, IC_TOPTAB } from "../../assets/path";
import AppText from "../../components/AppText/AppText";
import { useLanguage } from "../../hooks/useLanguage";
import { fontSize16, fontSize18, fontSize20 } from "../../styles/AppFonts";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import PressView from "../../components/PressView/PressView";
import { NavigationRef } from "../../../App";


const SettingScreen: React.FC = () => {
  const { authData, signOut } = useAuth();
  const user = authData.user;
  const {colorPallet} = useTheme()
  const language = useLanguage();



  return (
    <SafeAreaView
      style={[AppStyles.container,{backgroundColor: colorPallet.color_background_1}]}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={AppColors.color_transparent}
      />
      <View
        style={{
          marginTop: (Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0) + unit12,
          paddingHorizontal: unit20,
          flexDirection:'row',
          alignItems:'center',
          paddingVertical: unit12,
          borderBottomWidth: unit1,
          borderBottomColor: colorPallet.color_divider_3
        }}
      >
        <PressView
          onPress={() =>{
            NavigationRef.current?.dispatch(DrawerActions.toggleDrawer);
          } }
        >
          <Image
            source={IC_DRAWER}
            style={{
              width: unit24,
              height: unit24
            }}
          />
        </PressView>

        <View
          style={{
            flexGrow:1,
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          <AppText
            style={{
              fontSize: fontSize20,
              color: colorPallet.color_text_blue_1,
            }}
          >
            {language?.setting}
          </AppText>
        </View>

      </View>

      <Button
        onPress={
          () => {
            signOut();
          }
        }
        title={"Logout"} />

    </SafeAreaView>
    //   style={AppStyles.centerContainer}>
    //   <Text>HOME SCREEN</Text>
    //   <Text>{user?.username || "Not sign in"}</Text>
    //   <Button
    //     onPress={
    //       () => {
    //         signOut();
    //       }
    //     }
    //     title={"Logout"} />
    // </SafeAreaView>;
  )
};

export default SettingScreen;


