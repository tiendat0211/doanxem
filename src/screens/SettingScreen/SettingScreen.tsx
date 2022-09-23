import React from "react";
import { Button, Dimensions, Image, Platform, SafeAreaView, StatusBar, Text, View } from "react-native";
import AppStyles from "../../styles/AppStyles";
import useAuth from "../../hooks/useAuth";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AppColors from "../../styles/AppColors";
import { useTheme } from "../../hooks/useTheme";
import { unit1, unit12, unit15, unit20, unit24, unit32, unit35, unit48, unit5, unit6, unit72, unit8 } from "../../utils/appUnit";
import { IC_ACCINFO, IC_APPSHARE, IC_BELL, IC_BLOCKLIST, IC_DRAWER, IC_EMAIL, IC_FILTER, IC_HOTTAB, IC_LANGUAGE, IC_LOCK, IC_NEWTAB, IC_OUT, IC_STAR, IC_TOPTAB, IC_USER, IC_VIEWMODE, IMG_LOGO } from "../../assets/path";
import AppText from "../../components/AppText/AppText";
import { useLanguage } from "../../hooks/useLanguage";
import { fontSize14, fontSize16, fontSize18, fontSize20 } from "../../styles/AppFonts";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import PressView from "../../components/PressView/PressView";
import { NavigationRef } from "../../../App";
import AppBar from "../../components/AppBar/AppBar";
import { ScrollView } from "react-native-gesture-handler";
import SelectSettingItem from "./components/SelectSettingItem";


const SettingScreen: React.FC = () => {
  const { authData, signOut } = useAuth();
  const user = authData.user;
  const { colorPallet } = useTheme()
  const language = useLanguage();

  const settingItems = [
    {
      name: language?.accountInfo,
      iconSrc: IC_ACCINFO,
      id: 1,
      onClick: () => {
        // NavigationRef.current?.navigate("ProfileMyPointScreen");
      },
    },
    {
      name: language?.blockList,
      iconSrc: IC_BLOCKLIST,
      id: 1,
      onClick: () => {
        // NavigationRef.current?.navigate("ProfileMyPointScreen");
      },
    },
    {
      name: language?.changePwd,
      iconSrc: IC_LOCK,
      id: 1,
      onClick: () => {
        // NavigationRef.current?.navigate("ProfileMyPointScreen");
      },
    },
    {
      name: language?.language,
      iconSrc: IC_LANGUAGE,
      id: 1,
      onClick: () => {
        // NavigationRef.current?.navigate("ProfileMyPointScreen");
      },
    },
    {
      name: language?.viewMode,
      iconSrc: IC_VIEWMODE,
      id: 1,
      onClick: () => {
        // NavigationRef.current?.navigate("ProfileMyPointScreen");
      },
    },
    {
      name: language?.notiCenter,
      iconSrc: IC_BELL,
      id: 1,
      onClick: () => {
        // NavigationRef.current?.navigate("ProfileMyPointScreen");
      },
    },
    {
      name: language?.appShare,
      iconSrc: IC_APPSHARE,
      id: 1,
      onClick: () => {
        // NavigationRef.current?.navigate("ProfileMyPointScreen");
      },
    },
    {
      name: language?.appRate,
      iconSrc: IC_STAR,
      id: 1,
      onClick: () => {
        // NavigationRef.current?.navigate("ProfileMyPointScreen");
      },
    },
  ];

  return (
    <SafeAreaView
      style={[AppStyles.container, {
        backgroundColor: colorPallet.color_background_1,
      }]}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={AppColors.color_transparent}
      />
      <AppBar
        title={language?.setting}
        leftIcon={IC_DRAWER}
        leftIconOnClick={() => {
          NavigationRef.current?.goBack()
        }}
        titleStyle={{
          color: colorPallet.color_text_blue_1
        }}
        containerStyle={{
          borderBottomColor: colorPallet.color_divider_3
        }}
      />
      <ScrollView
        style={{
          paddingStart: unit20
        }}>
        <View
          style={{
            marginTop: unit24,
            flexDirection: 'row',
            marginBottom: unit24
          }}
        >
          <Image
            source={IMG_LOGO}
            style={{
              width: unit72,
              height: unit72,
              marginRight: unit20,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <AppText
              style={{
                color: colorPallet.color_text_blue_1,
                fontSize: fontSize18,
                paddingBottom: unit6,
              }}
            >
              _Nghiencoliemsi_
            </AppText>
            <AppText
              style={{
                color: colorPallet.color_text_gray_3,
                fontSize: fontSize14,
                paddingBottom: unit6,
              }}
            >
              @ngoclongg2010
            </AppText>
          </View>

        </View>
        {settingItems.map((item, index) => {
          return (
            <View
              key={index.toString()}
              style={{
                width: "100%",
              }}>
              <SelectSettingItem
                leftImageProps={{
                  width: unit24,
                  height: unit24,
                  tintColor: AppColors.color_primary,
                }}
                onPress={item.onClick}
                leftImageSource={item?.iconSrc}
                title={item?.name}
              />
            </View>
          );
        })}
        <SelectSettingItem
          leftImageProps={{
            width: unit24,
            height: unit24,
            tintColor: '#FF3333',
          }}
          onPress={()=>{ 
            signOut()
          }
        }
          leftImageSource={IC_OUT}
          title={language?.signOut}
          appTxtStyle={{
            color:'#FF3333'
          }}
        />
      </ScrollView>

    </SafeAreaView>
  )
};

export default SettingScreen;


