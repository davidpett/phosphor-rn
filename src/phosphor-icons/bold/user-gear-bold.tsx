import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUserGearBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152.5 156.53a72 72 0 1 0-89 0 124 124 0 0 0-48.69 35.75 12 12 0 0 0 18.38 15.44C52.54 184.69 79.11 172 108 172c37 0 61.12 19.42 74.81 35.72a12 12 0 1 0 18.38-15.44 124 124 0 0 0-48.69-35.75ZM60 100a48 48 0 1 1 48 48 48.05 48.05 0 0 1-48-48Zm182.73 41.23-3.31 1.08 2 2.82a12 12 0 1 1-19.41 14.1l-2.01-2.82-2 2.82a12 12 0 1 1-19.41-14.1l2-2.82-3.31-1.08a12 12 0 0 1 7.42-22.82l3.31 1.07V116a12 12 0 0 1 24 0v3.48l3.31-1.07a12 12 0 0 1 7.42 22.82Z" />
  </Svg>
);
const Memo = memo(SvgUserGearBold);
export default Memo;
