import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgIntersectSquareBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 84h-44V40a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h44v44a12 12 0 0 0 12 12h120a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12ZM52 148V52h96v32H96a12 12 0 0 0-12 12v52Zm56-23 23 23h-23Zm40 6-23-23h23Zm56 73h-96v-32h52a12 12 0 0 0 12-12v-52h32Z" />
  </Svg>
);
const Memo = memo(SvgIntersectSquareBold);
export default Memo;
