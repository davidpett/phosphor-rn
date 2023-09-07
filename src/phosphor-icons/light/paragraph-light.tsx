import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgParagraphLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 42H96a62 62 0 0 0 0 124h42v42a6 6 0 0 0 12 0V54h28v154a6 6 0 0 0 12 0V54h18a6 6 0 0 0 0-12Zm-70 112H96a50 50 0 0 1 0-100h42Z" />
  </Svg>
);
const Memo = memo(SvgParagraphLight);
export default Memo;
