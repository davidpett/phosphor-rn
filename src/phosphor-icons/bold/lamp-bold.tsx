import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLampBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m251 147.27-48-112A12 12 0 0 0 192 28H64a12 12 0 0 0-11 7.27l-48 112A12 12 0 0 0 16 164h100v40H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24h-20v-40h48v28a12 12 0 0 0 24 0v-28h28a12 12 0 0 0 11-16.73ZM34.2 140l37.71-88h112.18l37.71 88Z" />
  </Svg>
);
const Memo = memo(SvgLampBold);
export default Memo;
