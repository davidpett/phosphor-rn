import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShoppingCartSimpleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M94 216a14 14 0 1 1-14-14 14 14 0 0 1 14 14Zm90-14a14 14 0 1 0 14 14 14 14 0 0 0-14-14Zm45.73-128.24-28.52 92.71a21.89 21.89 0 0 1-21 15.53H84.07a22.1 22.1 0 0 1-21.16-16L26.75 39.45A2 2 0 0 0 24.82 38H8a6 6 0 0 1 0-12h16.82a14.05 14.05 0 0 1 13.46 10.15L46.81 66H224a6 6 0 0 1 5.73 7.76ZM215.88 78H50.24l24.21 84.75a10 10 0 0 0 9.62 7.25h96.11a10 10 0 0 0 9.56-7.06Z" />
  </Svg>
);
const Memo = memo(SvgShoppingCartSimpleLight);
export default Memo;
