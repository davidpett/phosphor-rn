import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgListDashesDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 64v128H40V64Z" opacity={0.2} />
    <Path d="M88 64a8 8 0 0 1 8-8h120a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8Zm128 56H96a8 8 0 1 0 0 16h120a8 8 0 0 0 0-16Zm0 64H96a8 8 0 1 0 0 16h120a8 8 0 0 0 0-16ZM56 56H40a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16Zm0 64H40a8 8 0 1 0 0 16h16a8 8 0 0 0 0-16Zm0 64H40a8 8 0 1 0 0 16h16a8 8 0 0 0 0-16Z" />
  </Svg>
);
const Memo = memo(SvgListDashesDuotone);
export default Memo;
