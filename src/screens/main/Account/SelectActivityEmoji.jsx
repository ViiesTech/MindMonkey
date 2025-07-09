import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AppMainHeader from '../../../components/AppMainHeader';
import LineBreak from '../../../components/LineBreak';
import { responsiveHeight, responsiveWidth } from '../../../utils/Responsive_Dimensions';
import EmojiPicker from 'rn-emoji-keyboard';
import { useCustomNavigation } from '../../../utils/Hooks';

const SelectActivityEmoji = () => {
    const {goBack} = useCustomNavigation();
      const [emoji, setEmoji] = useState('');
  return (
    <View>
        <View style={{paddingHorizontal: responsiveWidth(5)}}>
      <AppMainHeader heading="Select Activity Emoji" />
        </View>
      <LineBreak space={2} />
      <EmojiPicker
        open={true}
        // hideSearchBarClearIcon={true}
        // enableSearchBar={true}
        selectedEmojis={emoji}
        defaultHeight={responsiveHeight(90)}
        enableRecentlyUsed={true}
        onClose={() => goBack()}
        onEmojiSelected={e => setEmoji(e.emoji)}
      />
    </View>
  );
};

export default SelectActivityEmoji;
