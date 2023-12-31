import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCloudFogBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M120 200H72a12 12 0 0 1 0-24h48a12 12 0 0 1 0 24Zm64-24h-24a12 12 0 0 0 0 24h24a12 12 0 0 0 0-24Zm-24 36h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24Zm72-124a76.08 76.08 0 0 1-76 76H76a52 52 0 1 1 9-103.22A76 76 0 0 1 232 88Zm-24 0a52 52 0 0 0-104 0 12 12 0 0 1-24 0c0-1.24 0-2.48.09-3.71A29.28 29.28 0 0 0 76 84a28 28 0 0 0 0 56h80a52.06 52.06 0 0 0 52-52Z" />
  </Svg>
);
const Memo = memo(SvgCloudFogBold);
export default Memo;
