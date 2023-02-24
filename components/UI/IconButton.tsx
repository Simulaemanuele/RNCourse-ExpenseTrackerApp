import * as React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const IconButton = ({
  icon,
  size,
  color,
  onPress,
}: {
  icon: string;
  size: number;
  color: string | undefined;
  onPress: () => void;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Icon name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
