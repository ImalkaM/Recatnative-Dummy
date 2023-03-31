import React, {useState, useEffect} from 'react';
import {View, Platform} from 'react-native';
import PropTypes from 'prop-types';
import {useTheme} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect from 'react-native-picker-select';
import IconDrop from 'react-native-vector-icons/Entypo';
import styles from './styles';

const CustomDropDown = props => {
  const {isRequired, data, setText, currentValue} = props;
  const {colors, fontStyles, isHighContrast} = useTheme().theme;
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState(currentValue[0]);
  return (
    <View
      style={{
        ...styles.container,
      }}>
      {Platform.OS === 'android' && (
        <DropDownPicker
          value={value}
          zIndex={4000}
          items={data}
          placeholder={currentValue.length > 0 ? currentValue[0] : 'Select'}
          containerStyle={styles.dropdownView}
          style={{
            backgroundColor:
              isRequired || isHighContrast
                ? colors.background2
                : colors.errorBackground,
            borderColor: isRequired ? colors.border : colors.error,
            borderWidth: !isRequired && isHighContrast ? 3 : 1,
          }}
          itemStyle={styles.itemStyle}
          dropDownStyle={{
            backgroundColor: colors.background2,
            borderColor: isRequired ? colors.border : colors.error,
          }}
          labelStyle={{
            ...fontStyles.body2,
            textAlign: 'left',
          }}
          activeItemStyle={{
            ...styles.activeItemStyle,
            backgroundColor: colors.primary,
          }}
          activeLabelStyle={{
            color: colors.white,
          }}
          onChangeItem={item => setText(item.value)}
        />
      )}

      {Platform.OS === 'ios' && (
        <View
          style={{
            ...styles.dropdownViewIOS,
            backgroundColor:
              isRequired || isHighContrast
                ? colors.background2
                : colors.errorBackground,
            borderColor: isRequired ? colors.border : colors.error,
            borderWidth: !isRequired && isHighContrast ? 3 : 1,
          }}>
          <RNPickerSelect
            onValueChange={item => {
              setValue(item);
              setText(item);
              setIsSelected(true);
            }}
            onOpen={() => {
              setIsSelected(true);
            }}
            onClose={() => {
              setIsSelected(false);
            }}
            items={data}
            value={value}
            placeholder={{
              label: 'Select',
            }}
            style={{
              placeholder: {
                color: colors.primary,
                ...fontStyles.body2,
              },
              inputIOS: {
                ...fontStyles.body2,
              },
              inputAndroid: {
                ...fontStyles.body2,
              },
            }}
            Icon={() => (
              <IconDrop
                name={isSelected ? 'chevron-up' : 'chevron-down'}
                size={22}
                color={colors.primary}
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

CustomDropDown.propTypes = {
  isRequired: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  setText: PropTypes.func,
  currentValue: PropTypes.arrayOf(PropTypes.any),
};

CustomDropDown.defaultProps = {
  isRequired: true,
  setText: PropTypes.func,
  currentValue: [],
};

export default CustomDropDown;
