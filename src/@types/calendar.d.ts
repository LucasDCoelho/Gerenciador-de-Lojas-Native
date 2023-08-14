declare module 'react-native-schedule-week-view' {
    import { Component } from 'react';
    import { StyleProp, ViewStyle } from 'react-native';
  
    interface ScheduleWeekViewProps {
      events: Event[];
      selectedDate?: Date;
      onEventPress?: (event: Event) => void;
      onGridClick?: (date: Date) => void;
      style?: StyleProp<ViewStyle>;
    }
  
    export class ScheduleWeekView extends Component<ScheduleWeekViewProps> {}
  }
  