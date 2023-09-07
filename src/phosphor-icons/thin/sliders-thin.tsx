import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSlidersThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M60 108.29V40a4 4 0 0 0-8 0v68.29a28 28 0 0 0 0 55.42V216a4 4 0 0 0 8 0v-52.29a28 28 0 0 0 0-55.42ZM56 156a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm76-95.71V40a4 4 0 0 0-8 0v20.29a28 28 0 0 0 0 55.42V216a4 4 0 0 0 8 0V115.71a28 28 0 0 0 0-55.42ZM128 108a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm100 60a28 28 0 0 0-24-27.71V40a4 4 0 0 0-8 0v100.29a28 28 0 0 0 0 55.42V216a4 4 0 0 0 8 0v-20.29A28 28 0 0 0 228 168Zm-28 20a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z" />
  </Svg>
);
const Memo = memo(SvgSlidersThin);
export default Memo;
