import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLightningSlash = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M53.92 34.62a8 8 0 1 0-11.84 10.76l39.25 43.18-39.18 42a8 8 0 0 0 3 13l57.63 21.61-14.62 73.26a8 8 0 0 0 13.69 7l61.86-66.28 38.37 42.2a8 8 0 1 0 11.84-10.76ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l30.12-32.27 60.78 66.86Zm-.71-143a8 8 0 0 1-.39-11.31l45.88-49.16a8 8 0 0 1 13.69 7L153.18 90.9l57.63 21.61a8 8 0 0 1 3 12.95l-22.3 23.89a8 8 0 0 1-11.7-10.91L194 123.29l-52.8-19.8a8 8 0 0 1-5-9.06l10.47-52.38L120 70.62a8 8 0 0 1-11.34.38Z" />
  </Svg>
);
const Memo = memo(SvgLightningSlash);
export default Memo;
