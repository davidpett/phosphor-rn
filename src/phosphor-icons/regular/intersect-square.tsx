import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgIntersectSquare = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 88h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8ZM48 152V48h104v40H96a8 8 0 0 0-8 8v56Zm56-36.69L140.69 152H104Zm48 25.38L115.31 104H152ZM208 208H104v-40h56a8 8 0 0 0 8-8v-56h40Z" />
  </Svg>
);
const Memo = memo(SvgIntersectSquare);
export default Memo;
