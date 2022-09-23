import * as React from 'react';
import { Button, Dimensions, Image, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainerRef } from "@react-navigation/native";

import HomeScreen from "./HomeScreen";
import { useLanguage } from "../../hooks/useLanguage";
import CustomDrawer from "../../components/CustomDrawer/CustomDrawer";
import { useTheme } from "../../hooks/useTheme";
import { unit0, unit20, unit28, unit35 } from "../../utils/appUnit";
import AppColors from "../../styles/AppColors";
import SearchScreen from "../SearchScreen/SearchScreen";
import { IC_HOME, IC_INFO, IC_SEARCH, IC_USER2 } from "../../assets/path";
import { fontSize20 } from "../../styles/AppFonts";
import RuleScreen from "../RuleScreen/RuleScreen";
import ProfileScreen from "../ProfileScreen/ProfileSceen";

export const Drawer = createDrawerNavigator();

export default function MyDrawer() {

  const language = useLanguage();
  const {colorPallet} = useTheme()

  return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props}/> }
          screenOptions={{
            headerShown: false,
            drawerStyle:{
              width: Dimensions.get("screen").width*0.9,
              backgroundColor: colorPallet.color_background_4,
              borderBottomRightRadius: unit35,
              borderTopRightRadius: unit35,
              paddingHorizontal: unit20,
            },
            drawerActiveBackgroundColor: colorPallet.color_background_4,
            drawerActiveTintColor: AppColors.color_primary,
            headerPressColor: AppColors.color_primary,
            drawerLabelStyle:{
              marginLeft: -10,
              fontSize: fontSize20,
            }
          }}
      >
        <Drawer.Screen
          name={language?.Home}
          component={HomeScreen}
          options={{
            drawerIcon: ({focused}) =>
              <Image
                source={IC_HOME}
                style={{
                  width:unit28,
                  height: unit28,
                  tintColor: focused ? AppColors.color_primary : colorPallet.color_text_blue_3
                }}
              />
          }}
        />
        <Drawer.Screen
          name={language?.Search}
          component={SearchScreen}
          options={{
            drawerIcon: ({focused}) =>
              <Image
                source={IC_SEARCH}
                style={{
                  width:unit28,
                  height: unit28,
                  tintColor: focused ? AppColors.color_primary : colorPallet.color_text_blue_3
                }}
              />
          }}
        />
        <Drawer.Screen
          name={language?.User_profile}
          component={ProfileScreen}
          options={{
            drawerIcon: ({focused}) =>
              <Image
                source={IC_USER2}
                style={{
                  width:unit28,
                  height: unit28,
                  tintColor: focused ? AppColors.color_primary : colorPallet.color_text_blue_3
                }}
              />
          }}
        />
        <Drawer.Screen
          name={language?.Rule}
          component={RuleScreen}
          options={{
            drawerIcon: ({focused}) =>
              <Image
                source={IC_INFO}
                style={{
                  width:unit28,
                  height: unit28,
                  tintColor: focused ? AppColors.color_primary : colorPallet.color_text_blue_3
                }}
              />
          }}
        />
      </Drawer.Navigator>
  );
}
