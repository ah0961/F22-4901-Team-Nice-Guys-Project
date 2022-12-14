import React, { useState, useMemo } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Calendar } from 'react-native-calendars';

function CustomCalendar(props) {
  const initDate = this.state;
  const [selected, setSelected] = useState(initDate);
  const marked = useMemo(() => ({
    [selected]: {
      selected: true,
      selectedColor: '#7DC265',
      selectedTextColor: 'white',
    }
  }), [selected]);
  return (
    <Calendar
      initialDate={initDate}
      markedDates={marked}
      onDayPress={(day) => {
        setSelected(day.dateString);
        props.onDaySelect && props.onDaySelect(day);
      }}
      {...props}
    />
  );
}
 
function HomeCalendar() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomCalendar onDaySelect={(day) => console.log(`Date selected: ${day.dateString}`)}/>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeCalendar;