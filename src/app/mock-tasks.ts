import { Task } from './task';

export const TASKS: Task[] = [
  { id: 11, title: 'Do laundry', due: new Date(2017,11,15,10,30,0), completed: true },
  { id: 12, title: 'Make dinner', due: new Date(2017,11,15,19,0,0), completed: true },
  { id: 13, title: 'Go grocery shopping', due: new Date(2017,11,16,13,0,0), completed: false },
  { id: 14, title: 'Call John', due: new Date(2017,11,18,14,30,0), completed: false },
  { id: 15, title: 'Buy Mike a gift', due: new Date(2017,11,19,11,15,0), completed: false },
  { id: 16, title: 'Book flight', due: new Date(2017,11,20,9,0,0), completed: false },
  { id: 17, title: 'Finish essay', due: new Date(2017,11,25,12,30,0), completed: false },
  { id: 18, title: 'Complete homework problems 13-24', due: new Date(2017,11,26,2,0,0), completed: false },
  { id: 19, title: 'Clean apartment', due: new Date(2017,11,27,9,0,0), completed: false },
  { id: 20, title: 'Movie night', due: new Date(2017,11,27,8,0,0), completed: false },
];
