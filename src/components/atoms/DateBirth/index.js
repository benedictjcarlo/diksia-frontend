import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text } from 'react-native';
import { IcCalendar } from '../../../assets'
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

export default function DateBirth({onDateChange, defaultValue}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [birthDate, setBirthDate] = useState(() => {
    return defaultValue? moment(defaultValue, 'DD MMMM, YYYY').format('DD MMMM, YYYY') : '';
  });

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleDateChange = (date) => {
    setBirthDate(moment(date).format('DD MMMM, YYYY'));
    hideDatePicker();
    onDateChange(date);
  };

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker} style={styles.container}>
        <TextInput
          numberOfLines={1}
          editable={false}
          placeholder={birthDate ? '' : 'Pilih Tanggal'}
          value={birthDate}
          style={{fontSize: 14, color: '#212121'}}
        />
        <IcCalendar/>
      </TouchableOpacity>
      <DatePicker
        modal
        open={isDatePickerVisible}
        date={birthDate ? new Date(moment(birthDate, 'DD MMMM, YYYY').valueOf()) : new Date()}
        onConfirm={handleDateChange}
        onCancel={hideDatePicker}
        mode="date"
        maximumDate={new Date(moment().add(-1, 'days'))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'normal',
    color: '#212121',
    width: '100%',
  },
})