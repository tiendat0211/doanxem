import React from "react";
import { Image, SafeAreaView, StatusBar, Text, View, ViewStyle } from "react-native";
import AppStyles from "../../styles/AppStyles";
import AppColors from "../../styles/AppColors";
import { useTheme } from "../../hooks/useTheme";
import {  unit16, unit17, unit20, unit24, unit32, unit5 } from "../../utils/appUnit";
import { IC_ARROWLEFT,  IC_CHECK2,IC_ENGLISH, IC_VIETNAM, } from "../../assets/path";
import AppText from "../../components/AppText/AppText";
import { useLanguage } from "../../hooks/useLanguage";
import { fontSize16, fontSize18, fontSize20 } from "../../styles/AppFonts";
import PressView from "../../components/PressView/PressView";
import { NavigationRef } from "../../../App";
import AppBar from "../../components/AppBar/AppBar";


const data: LanguageItemProps[] = [
    {
      iconLeft: IC_ENGLISH,
      title: 'English',
      onPress: () => {
       
      },
      icRight: IC_CHECK2,
    },
    {
      iconLeft: IC_VIETNAM,
      title: 'Tiếng việt',
      onPress: () => {
        
      },
      icRight: IC_CHECK2,
    },
]

const LanguageScreen: React.FC = () => {
  const { colorPallet } = useTheme()
  const language = useLanguage();

  return (
    <SafeAreaView
      style={[AppStyles.container, { backgroundColor: colorPallet.color_background_1 }]}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={AppColors.color_transparent}
      />
      <AppBar
        title={language?.languageSetting}
        leftIcon={IC_ARROWLEFT}
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

      <View>

        {
          data.map((value) => {
            return <>
              <LaguageItem
                key={value.title}
                iconLeft={value.iconLeft}
                title={value.title}
                onPress={value.onPress}
                icRight={value.icRight}
              />
            </>
          })
        }
      </View>

    </SafeAreaView>
  )
};

export default LanguageScreen;

interface LanguageItemProps {
  iconLeft: any,
  title: string,
  onPress?(): any,
  icRight: any,
}

const LaguageItem: React.FC<LanguageItemProps> = (props) => {
  const { iconLeft, title, onPress ,icRight} = props;
  const { colorPallet } = useTheme()
  return (
    <>
      <PressView
        style={{
          flexDirection: 'row',
          marginHorizontal: unit20,
          alignItems: 'center',
          paddingVertical: unit17,
        }}
        onPress={onPress}
      >
        <Image
          source={iconLeft}
          style={{
            width: unit32,
            height: unit24,
            marginRight: unit16,
            borderRadius: unit5,
          }}
        />
        <AppText
          style={{
            fontSize: fontSize16,
            color: colorPallet.color_text_blue_3,
            flexGrow: 1,
          }}
        >
          {title}
        </AppText>
        <Image
          source={icRight}
          style={{
            width: unit24,
            height: unit24,
            tintColor: AppColors.color_primary ,
          }}
        />
      </PressView>
    </>
  );
}


