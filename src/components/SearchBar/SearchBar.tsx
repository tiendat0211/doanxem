import { Image, Platform, TextInput, View } from "react-native";
import React from "react";
import { dimension } from "../../styles/AppFonts";
import { useTheme } from "../../hooks/useTheme";
import { useLanguage } from "../../hooks/useLanguage";
import AppStyles from "../../styles/AppStyles";
import { unit100, unit12, unit16, unit20 } from "../../utils/appUnit";

interface SearchBarProps {
  searchWord: string,
  setSearchWord: React.Dispatch<React.SetStateAction<string>>,
  onSearchPress: () => void,
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  let { searchWord, setSearchWord, onSearchPress } = props;
  const width = dimension.width;
  const { colorPallet } = useTheme();
  const {language} = useLanguage()
  return <View style={[AppStyles.alignRow, {
    marginTop: unit20,
    marginHorizontal: unit16,
    paddingHorizontal: unit20,
    paddingVertical: unit12,
    borderRadius: unit100,
    backgroundColor: colorPallet.color_background_1,
  }]}>
    <TextInput
      placeholder={language.enterKeyWord}
      placeholderTextColor={colorPallet.color_text_4}
      value={searchWord}
      onChangeText={(text) => setSearchWord(text)}
      style={{
        flexGrow: 1,
        padding: Platform.OS === "android" ? 0 : 0,
        color: colorPallet.color_text_3,
        width: width - unit73 - unit36,
        paddingEnd: unit16,
        fontSize: fontSize14,
        fontFamily: AppFonts.semiBold,
        includeFontPadding: false,
      }} />
    <PressView
      onPress={onSearchPress}>
      <Image
        source={IC_SEARCH}
        style={[AppStyles.icon24]} />
    </PressView>
  </View>;

};
export default SearchBar;
