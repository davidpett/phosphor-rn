import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlagLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M36.08 43.37A6 6 0 0 0 34 47.9V216a6 6 0 0 0 12 0v-45.22c28.08-22.79 51.88-11 79.34 2.57 16.12 8 33.49 16.58 52 16.58 13.57 0 27.76-4.6 42.56-17.42A6 6 0 0 0 222 168V47.9a6 6 0 0 0-9.93-4.54c-29 25.12-53.28 13.09-81.41-.84-27.89-13.81-59.66-29.36-94.58.85ZM210 165.17c-28.08 22.8-51.88 11-79.34-2.58C105.4 150.08 77.09 136.07 46 156V50.72c28.08-22.8 51.88-11 79.34 2.56C150.6 65.79 178.91 79.8 210 59.91Z" />
  </Svg>
);
const Memo = memo(SvgFlagLight);
export default Memo;
