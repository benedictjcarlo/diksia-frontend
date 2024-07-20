import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text } from 'react-native';
import { IcCalendar } from '../../../assets'
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

export default function DateBirth({onDateChange}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [birthDate, setBirthDate] = useState('');

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleDateChange = (date) => {
    setBirthDate(date);
    hideDatePicker();
    onDateChange(date);
  };

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker} style={styles.container}>
        <TextInput
          numberOfLines={1}
          editable={false}
          placeholder="Pilih Tanggal"
          value={birthDate? moment(birthDate).format('DD MMMM, YYYY') : ''}
          style={{fontSize: 14, color: '#212121'}}
        />
        <IcCalendar/>
      </TouchableOpacity>
      <DatePicker
        modal
        open={isDatePickerVisible}
        date={birthDate? new Date(birthDate) : new Date()}
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