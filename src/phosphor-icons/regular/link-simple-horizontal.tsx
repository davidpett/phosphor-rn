import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLinkSimpleHorizontal = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M80 120h96a8 8 0 0 1 0 16H80a8 8 0 0 1 0-16Zm24 48H64a40 40 0 0 1 0-80h40a8 8 0 0 0 0-16H64a56 56 0 0 0 0 112h40a8 8 0 0 0 0-16Zm88-96h-40a8 8 0 0 0 0 16h40a40 40 0 0 1 0 80h-40a8 8 0 0 0 0 16h40a56 56 0 0 0 0-112Z" />
  </Svg>
);
const Memo = memo(SvgLinkSimpleHorizontal);
export default Memo;
