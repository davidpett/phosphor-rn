import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPersonFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M100 36a28 28 0 1 1 28 28 28 28 0 0 1-28-28Zm115.42 104.78-45.25-51.3a28 28 0 0 0-21-9.48h-42.34a28 28 0 0 0-21 9.48l-45.25 51.3a16 16 0 0 0 22.56 22.69L89 142.7l-19.7 74.88a16 16 0 0 0 29.08 13.35L128 180l29.58 51a16 16 0 0 0 29.08-13.35L167 142.7l25.9 20.77a16 16 0 0 0 22.56-22.69Z" />
  </Svg>
);
const Memo = memo(SvgPersonFill);
export default Memo;
