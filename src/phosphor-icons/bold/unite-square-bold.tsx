import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUniteSquareBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 160V96a12 12 0 0 0-12-12h-44V40a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h44v44a12 12 0 0 0 12 12h120a12 12 0 0 0 12-12v-56Zm-63 44L52 91V69l135 135ZM69 52h22l113 113v22Zm135 79-23-23h23Zm-56-56-23-23h23Zm-96 50 23 23H52Zm56 56 23 23h-23Z" />
  </Svg>
);
const Memo = memo(SvgUniteSquareBold);
export default Memo;
