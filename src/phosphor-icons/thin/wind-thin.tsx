import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWindThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M180 184a28 28 0 0 1-28 28c-12.09 0-23.76-7.83-27.75-18.61a4 4 0 1 1 7.5-2.78C134.58 198.24 143.28 204 152 204a20 20 0 0 0 0-40H40a4 4 0 0 1 0-8h112a28 28 0 0 1 28 28ZM148 72a28 28 0 0 0-28-28c-12.09 0-23.76 7.83-27.75 18.61a4 4 0 0 0 7.5 2.78C102.58 57.76 111.28 52 120 52a20 20 0 0 1 0 40H24a4 4 0 0 0 0 8h96a28 28 0 0 0 28-28Zm60 4c-12.09 0-23.76 7.83-27.75 18.61a4 4 0 1 0 7.5 2.78C190.58 89.76 199.28 84 208 84a20 20 0 0 1 0 40H32a4 4 0 0 0 0 8h176a28 28 0 0 0 0-56Z" />
  </Svg>
);
const Memo = memo(SvgWindThin);
export default Memo;
