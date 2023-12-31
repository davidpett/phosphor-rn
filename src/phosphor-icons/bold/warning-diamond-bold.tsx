import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWarningDiamondBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 68a12 12 0 0 1 12 12v52a12 12 0 0 1-24 0V80a12 12 0 0 1 12-12Zm0 88a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm116-28a19.86 19.86 0 0 1-5.84 14.11l-96 96.06a20 20 0 0 1-28.21 0l-96-96.06a20 20 0 0 1 0-28.22L114 17.83a20 20 0 0 1 28.21 0l96.06 96.06A19.86 19.86 0 0 1 244 128Zm-25.68 0L128 37.67 37.68 128 128 218.33Z" />
  </Svg>
);
const Memo = memo(SvgWarningDiamondBold);
export default Memo;
