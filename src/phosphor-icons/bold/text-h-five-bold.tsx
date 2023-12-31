import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextHFiveBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M252 180a40 40 0 0 1-40 40 39.53 39.53 0 0 1-28.57-11.6 12 12 0 1 1 17.14-16.8A15.54 15.54 0 0 0 212 196a16 16 0 0 0 0-32 15.54 15.54 0 0 0-11.43 4.4 12 12 0 0 1-20.41-10.4l8-48A12 12 0 0 1 200 100h40a12 12 0 0 1 0 24h-29.83l-2.71 16.23A45.39 45.39 0 0 1 212 140a40 40 0 0 1 40 40ZM144 44a12 12 0 0 0-12 12v48H52V56a12 12 0 0 0-24 0v120a12 12 0 0 0 24 0v-48h80v48a12 12 0 0 0 24 0V56a12 12 0 0 0-12-12Z" />
  </Svg>
);
const Memo = memo(SvgTextHFiveBold);
export default Memo;
