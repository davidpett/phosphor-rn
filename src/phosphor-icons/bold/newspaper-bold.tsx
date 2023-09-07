import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNewspaperBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M92 108a12 12 0 0 1 12-12h72a12 12 0 0 1 0 24h-72a12 12 0 0 1-12-12Zm12 52h72a12 12 0 0 0 0-24h-72a12 12 0 0 0 0 24Zm132-96v120a28 28 0 0 1-28 28H36a32 32 0 0 1-32-32V88a12 12 0 0 1 24 0v92a8 8 0 0 0 16 0V64a20 20 0 0 1 20-20h152a20 20 0 0 1 20 20Zm-24 4H68v112a32 32 0 0 1-1 8h141a4 4 0 0 0 4-4Z" />
  </Svg>
);
const Memo = memo(SvgNewspaperBold);
export default Memo;
