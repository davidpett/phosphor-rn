import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHammerBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m250.18 105.17-63.47-63.92a100.11 100.11 0 0 0-141.43 0l-.13.14-13.78 14.22a12 12 0 1 0 17.24 16.7l13.71-14.15a75.68 75.68 0 0 1 15.17-11.73L119 88l-93.15 93.16a20 20 0 0 0 0 28.29l20.69 20.69a20 20 0 0 0 28.28 0L168 137l1.51 1.51 23.65 23.66a20 20 0 0 0 28.29 0l28.69-28.7a20 20 0 0 0 .04-28.3ZM60.68 210.34l-15-15L108 133l15 15ZM140 131l-15-15 19.51-19.51a12 12 0 0 0 0-17l-42.27-42.25a75.94 75.94 0 0 1 67.47 20.95l31.44 31.67L178 113l-1.51-1.51a12 12 0 0 0-17 0Zm67.32 11.31L195 130l23.09-23.09 12.3 12.39Z" />
  </Svg>
);
const Memo = memo(SvgHammerBold);
export default Memo;
