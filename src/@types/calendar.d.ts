declare module 'react-native-schedule-week-view' {
    import { Component } from 'react';
    import { StyleProp, ViewStyle } from 'react-native';
  
    export interface Event {
      id: string;
      description: string;
      startDate: Date;
      endDate: Date;
      color?: string;
    }
  
    interface ScheduleWeekViewProps {
      events: Event[];
      selectedDate?: Date;
      onEventPress?: (event: Event) => void;
      onGridClick?: (date: Date) => void;
      style?: StyleProp<ViewStyle>;
    }
  
    export class ScheduleWeekView extends Component<ScheduleWeekViewProps> {}
  }
  