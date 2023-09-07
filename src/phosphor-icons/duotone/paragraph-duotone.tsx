import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgParagraphDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M144 48v112H96a56 56 0 0 1 0-112Z" opacity={0.2} />
    <Path d="M208 40H96a64 64 0 0 0 0 128h40v40a8 8 0 0 0 16 0V56h24v152a8 8 0 0 0 16 0V56h16a8 8 0 0 0 0-16Zm-72 112H96a48 48 0 0 1 0-96h40Z" />
  </Svg>
);
const Memo = memo(SvgParagraphDuotone);
export default Memo;
