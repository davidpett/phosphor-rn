import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChampagneBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M153.7 12.29A12 12 0 0 0 142.29 4h-44.6a12 12 0 0 0-11.41 8.29 453.85 453.85 0 0 0-14.36 60.29c-7.44 45.34-4.28 77.86 9.37 96.66A44.11 44.11 0 0 0 108 186.72V228H96a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24h-12v-41.28a44.11 44.11 0 0 0 26.7-17.48c13.66-18.8 16.81-51.32 9.37-96.66a453.85 453.85 0 0 0-14.37-60.29ZM133.36 28c2.08 7.25 5.14 18.7 7.92 32H98.7c2.78-13.3 5.84-24.75 7.92-32Zm5.91 127.14c-4.4 6-10.52 8.86-19.28 8.86s-14.88-2.82-19.28-8.86c-8.83-12.14-11-37.26-6.25-71.14h51.06c4.75 33.88 2.58 59-6.25 71.14ZM240 56a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm-60-36a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm36 84a16 16 0 1 1-16-16 16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgChampagneBold);
export default Memo;
