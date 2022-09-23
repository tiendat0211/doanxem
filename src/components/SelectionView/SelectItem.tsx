import React from "react";
import { PressableProps } from "react-native";
import { fontSize16 } from "src/styles/AppFonts";
import { useTheme } from "../../hooks/useSetting";
import AppColors from "../../styles/AppColors";
import { unit32, unit4, unit16, unit20, unit8, unit12 } from "../../utils/appUnit";
import AppText from "../AppText/AppText";
import PressView from "../PressView/PressView";


interface SelectItemProps extends PressableProps {
  title: string,
  focused: boolean
}

const SelectItem: React.FC<SelectItemProps> = (props) => {
  let { title, focused } = props;
  const { colorPallet } = useTheme();
  return <PressView
    {...props}
    style={[{
      borderWidth: 1,
      borderColor: focused ? AppColors.color_primary : colorPallet.color_divider_2,
      backgroundColor: focused ? AppColors.color_primary : undefined,
      borderRadius: unit32,
      paddingVertical: unit4,
      paddingHorizontal: unit16,
      marginTop: unit12,
      marginEnd: unit8,
    }, props.style as {}]}
  >
    <AppText
      fontType={"medium"}
      style={{
        fontSize: fontSize16,
        color: focused ? AppColors.color_white : colorPallet.color_text_3,
      }}>
      {title}
    </AppText>
  </PressView>;
};
export default SelectItem;
