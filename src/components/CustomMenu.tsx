// CustomMenu.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
    onEdit: Function,
    onSave: Function,
    onDelete: Function,
    setVisible: Function,
    visible: boolean,
}


const CustomMenu = ({onEdit, onSave, onDelete, visible, setVisible}: Props) => {

  const closeMenu = () => setVisible(false);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <Pressable style={styles.overlay} onPress={closeMenu}>
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
            <Text style={styles.menuText}>Save to favourites</Text>
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
              color="#d00"
              style={{marginRight: 6}}
            />
            <Text style={[styles.menuText, {color: '#d00'}]}>Delete</Text>
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
    paddingTop: 35,
    paddingRight: 20,
  },
  menuBox: {
    width: 180,
    backgroundColor: '#000',
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
