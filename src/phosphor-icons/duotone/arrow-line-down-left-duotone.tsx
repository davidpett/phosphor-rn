import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineDownLeftDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M160 200H64v-96Z" opacity={0.2} />
    <Path d="M224 40a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8Zm-42.34 42.34a8 8 0 0 1 0 11.32L123.31 152l42.35 42.34A8 8 0 0 1 160 208H64a8 8 0 0 1-8-8v-96a8 8 0 0 1 13.66-5.66L112 140.69l58.34-58.35a8 8 0 0 1 11.32 0ZM140.69 192l-34.34-34.34L72 123.31V192Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineDownLeftDuotone);
export default Memo;
