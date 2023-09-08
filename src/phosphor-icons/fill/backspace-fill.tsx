import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBackspaceFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40H68.53a16.12 16.12 0 0 0-13.72 7.77L9.14 123.88a8 8 0 0 0 0 8.24l45.67 76.11A16.11 16.11 0 0 0 68.53 216H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-50.34 106.34a8 8 0 0 1-11.32 11.32L136 139.31l-18.35 18.35a8 8 0 0 1-11.31-11.32L124.69 128l-18.35-18.34a8 8 0 1 1 11.31-11.32L136 116.69l18.34-18.35a8 8 0 0 1 11.32 11.32L147.31 128Z" />
  </Svg>
);
const Memo = memo(SvgBackspaceFill);
export default Memo;
