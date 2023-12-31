import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSubtractSquareBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 160V96a12 12 0 0 0-12-12h-44V40a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h44v44a12 12 0 0 0 12 12h120a12 12 0 0 0 12-12v-56Zm-63 44-32-32h22l32 32Zm7-49v-22l32 32v22Zm32-24-23-23h23ZM52 52h96v96H52Zm56 129 23 23h-23Z" />
  </Svg>
);
const Memo = memo(SvgSubtractSquareBold);
export default Memo;
