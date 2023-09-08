import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStairsThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12Zm-48 112h52v32h-96v-32Zm4-8v-32h48v32ZM56 36h144a4 4 0 0 1 4 4v52h-52a4 4 0 0 0-4 4v36h-44a4 4 0 0 0-4 4v36H52V40a4 4 0 0 1 4-4Zm144 184H56a4 4 0 0 1-4-4v-36h152v36a4 4 0 0 1-4 4Z" />
  </Svg>
);
const Memo = memo(SvgStairsThin);
export default Memo;
