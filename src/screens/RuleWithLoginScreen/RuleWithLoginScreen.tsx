import React from "react";
import { Image, Platform, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import AppStyles from "../../styles/AppStyles";
import AppColors from "../../styles/AppColors";
import { useTheme } from "../../hooks/useTheme";
import { unit1, unit12, unit20, unit24, unit32 } from "../../utils/appUnit";
import { IC_ARROWLEFT, IC_DRAWER, IC_FILTER } from "../../assets/path";
import AppText from "../../components/AppText/AppText";
import { useLanguage } from "../../hooks/useLanguage";
import { fontSize16, fontSize20 } from "../../styles/AppFonts";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import PressView from "../../components/PressView/PressView";
import { NavigationRef } from "../../../App";
import TextRule from "../../components/TextRule/TextRule";


const RuleWithLoginScreen: React.FC = () => {
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
          borderBottomColor: colorPallet.color_divider_3,
        }}
      >
        <PressView
          onPress={() =>{
            NavigationRef.current?.navigate('RegisterScreen');
          } }
        >
          <Image
            source={IC_ARROWLEFT}
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
            {language?.Rule}
          </AppText>
        </View>
      </View>

      <ScrollView style={{flex: 1}}>
        <TextRule/>
      </ScrollView>

    </SafeAreaView>
  )
};

export default RuleWithLoginScreen;


