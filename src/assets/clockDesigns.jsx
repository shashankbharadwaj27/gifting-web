// src/data/clocks.js
import clock1svg from '../assets/clock-1.svg';
import clock2svg from '../assets/clock-2.svg';
import clock3svg from '../assets/clock-3.svg';
import untitled from '../assets/Untitled.svg'
import clock1 from '../assets/clock-1.png'
import clock2 from '../assets/clock-2.png'
import clock3 from '../assets/clock-3.png'


export const clockDesigns = [
  {
    id: '1',
    title: 'Classic Round',
    svg: clock1svg,
    thumbnail: clock1,
  },
  {
    id: '2',
    title: 'Modern Minimal',
    svg: clock2svg,
    thumbnail: clock2,
  },
  {
    id: '3',
    title: 'Elegant Floral',
    svg: untitled,
    thumbnail: clock3,
    slots: [
      { x: 35, y: 40, width: 130, height: 130 },
      { x: 168, y: 40, width: 100, height: 100 },
      { x: 45, y: 170, width: 90, height: 90 },
      { x: 138, y: 130, width: 124, height: 130 },
    ]
  },
];
