import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDiceFiveBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 28H64a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36V64a36 36 0 0 0-36-36Zm12 164a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12ZM104 88a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm40 40a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm40-40a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm-80 80a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm80 0a16 16 0 1 1-16-16 16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgDiceFiveBold);
export default Memo;
