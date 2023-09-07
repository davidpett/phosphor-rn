import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLinkSimpleHorizontalBreakLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M22 128a42 42 0 0 0 42 42h40a6 6 0 0 1 0 12H64a54 54 0 0 1 0-108h40a6 6 0 0 1 0 12H64a42 42 0 0 0-42 42Zm170-54h-40a6 6 0 0 0 0 12h40a42 42 0 0 1 0 84h-40a6 6 0 0 0 0 12h40a54 54 0 0 0 0-108Z" />
  </Svg>
);
const Memo = memo(SvgLinkSimpleHorizontalBreakLight);
export default Memo;
