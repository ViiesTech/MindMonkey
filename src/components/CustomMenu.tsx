/* eslint-disable react-native/no-inline-styles */
// CustomMenu.tsx
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppColors from '../utils/AppColors';

type Props = {
  onEdit: Function;
  onSave: Function;
  onDelete: Function;
  setVisible: Function;
  visible: boolean;
  isChangeFavText?: boolean;
  manageActivities?: boolean;
};

const CustomMenu = ({
  onEdit,
  onSave,
  onDelete,
  visible,
  setVisible,
  isChangeFavText,
  manageActivities,
}: Props) => {
  const closeMenu = () => setVisible(false);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <Pressable
        style={[
          styles.overlay,
          {
            paddingTop: isChangeFavText
              ? responsiveHeight(16)
              : responsiveHeight(35),
          },
        ]}
        onPress={closeMenu}>
        <View style={styles.menuBox}>
          <TouchableOpacity
            onPress={() => {
              onEdit();
              closeMenu();
            }}
            style={styles.menuItem}>
            <Text style={styles.menuText}>Edit</Text>
          </TouchableOpacity>
          <View style={styles.divider} />

          <TouchableOpacity
            onPress={() => {
              onSave();
              closeMenu();
            }}
            style={styles.menuItem}>
            <Text style={styles.menuText}>
              {isChangeFavText ? manageActivities ? 'Remove' : 'Remove to favourites' : 'Save to favourites'}
            </Text>
          </TouchableOpacity>
          <View style={styles.divider} />

          <TouchableOpacity
            onPress={() => {
              onDelete();
              closeMenu();
            }}
            style={styles.menuItem}>
            <Icon
              name="trash-can-outline"
              size={18}
              color={AppColors.GRAY}
              style={{marginRight: 6}}
            />
            <Text style={styles.menuText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingRight: responsiveWidth(10),
  },
  menuBox: {
    width: 180,
    backgroundColor: AppColors.LIGHTGRAY,
    borderRadius: 12,
    paddingVertical: 8,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 3},
  },
  menuItem: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 15,
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginHorizontal: 12,
  },
});

export default CustomMenu;
