import React from "react";
import { PressableProps, ImageSourcePropType, StyleProp, ImageStyle, TextStyle, Image } from "react-native";
import AppText from "../../../components/AppText/AppText";
import PressView from "../../../components/PressView/PressView";
import { useTheme } from "../../../hooks/useTheme";
import { fontSize16 } from "../../../styles/AppFonts";
import AppStyles from "../../../styles/AppStyles";
import { unit16 } from "../../../utils/appUnit";


interface SelectSettingItemProps extends PressableProps {
  title: string,
  leftImageSource?: ImageSourcePropType,
  leftImageProps?: StyleProp<ImageStyle>,
  appTxtStyle?:StyleProp<TextStyle>
}

const SelectSettingItem: React.FC<SelectSettingItemProps> = (
  props,
) => {
  const {
    title,
    leftImageSource,
    leftImageProps,

    appTxtStyle,
  } = props;
  const s = props.style
  const  {colorPallet}  = useTheme();
  return <PressView
    {...props}
    style={[AppStyles.alignRow, {
      paddingVertical: unit16,
    }]}>

    { 
      leftImageSource && <Image
        style={[AppStyles.icon24, leftImageProps]}
        source={leftImageSource}
      />
    }

    <AppText
      fontType={"regular"}
      style={[{
        color:colorPallet.color_text_blue_3,
        fontSize: fontSize16,
        paddingHorizontal: unit16,
        flexGrow: 1,
      },appTxtStyle]}>
      {title}
    </AppText>


  </PressView>;
};

export default SelectSettingItem;
