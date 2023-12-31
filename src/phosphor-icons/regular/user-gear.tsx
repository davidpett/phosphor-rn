import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUserGear = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M144 157.68a68 68 0 1 0-71.9 0c-20.65 6.76-39.23 19.39-54.17 37.17a8 8 0 1 0 12.24 10.3C50.25 181.19 77.91 168 108 168s57.75 13.19 77.87 37.15a8 8 0 0 0 12.26-10.3c-14.95-17.78-33.53-30.41-54.13-37.17ZM56 100a52 52 0 1 1 52 52 52.06 52.06 0 0 1-52-52Zm188.25 43.07-4.66-2.69a23.6 23.6 0 0 0 0-8.76l4.66-2.69a8 8 0 0 0-8-13.86l-4.67 2.7a23.92 23.92 0 0 0-7.58-4.39V108a8 8 0 0 0-16 0v5.38a23.92 23.92 0 0 0-7.58 4.39l-4.67-2.7a8 8 0 1 0-8 13.86l4.66 2.69a23.6 23.6 0 0 0 0 8.76l-4.66 2.69a8 8 0 0 0 8 13.86l4.67-2.7a23.92 23.92 0 0 0 7.58 4.39V164a8 8 0 0 0 16 0v-5.38a23.92 23.92 0 0 0 7.58-4.39l4.67 2.7a7.92 7.92 0 0 0 4 1.07 8 8 0 0 0 4-14.93ZM208 136a8 8 0 1 1 8 8 8 8 0 0 1-8-8Z" />
  </Svg>
);
const Memo = memo(SvgUserGear);
export default Memo;
