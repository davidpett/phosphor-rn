import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretDoubleUpDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 208H48l80-80Z" opacity={0.2} />
    <Path d="M133.66 122.34a8 8 0 0 0-11.32 0l-80 80A8 8 0 0 0 48 216h160a8 8 0 0 0 5.66-13.66ZM67.31 200 128 139.31 188.69 200Zm-25-66.34a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1-11.32 11.32L128 59.31l-74.34 74.35a8 8 0 0 1-11.32 0Z" />
  </Svg>
);
const Memo = memo(SvgCaretDoubleUpDuotone);
export default Memo;
