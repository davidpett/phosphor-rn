import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGlobeSimpleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm89.8 96h-43.92c-1.15-30.72-11.09-59.83-27.94-82.2A90.18 90.18 0 0 1 217.8 122ZM128 218a1.75 1.75 0 0 1-1.32-.59c-19.56-21.07-31.26-51.2-32.56-83.41h67.75c-1.29 32.21-13 62.34-32.55 83.41a1.75 1.75 0 0 1-1.32.59Zm-33.88-96c1.3-32.21 13-62.34 32.56-83.41a1.77 1.77 0 0 1 2.64 0c19.56 21.07 31.26 51.2 32.55 83.41Zm15.94-82.2C93.21 62.17 83.27 91.28 82.12 122H38.2a90.18 90.18 0 0 1 71.86-82.2ZM38.2 134h43.92c1.15 30.72 11.09 59.83 27.94 82.2A90.18 90.18 0 0 1 38.2 134Zm107.74 82.2c16.85-22.37 26.79-51.48 27.94-82.2h43.92a90.18 90.18 0 0 1-71.86 82.2Z" />
  </Svg>
);
const Memo = memo(SvgGlobeSimpleLight);
export default Memo;
