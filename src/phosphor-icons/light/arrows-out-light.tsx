import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsOutLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M214 48v48a6 6 0 0 1-12 0V62.48l-45.76 45.76a6 6 0 0 1-8.48-8.48L193.52 54H160a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6ZM99.76 147.76 54 193.52V160a6 6 0 0 0-12 0v48a6 6 0 0 0 6 6h48a6 6 0 0 0 0-12H62.48l45.76-45.76a6 6 0 0 0-8.48-8.48ZM208 154a6 6 0 0 0-6 6v33.52l-45.76-45.76a6 6 0 0 0-8.48 8.48L193.52 202H160a6 6 0 0 0 0 12h48a6 6 0 0 0 6-6v-48a6 6 0 0 0-6-6ZM62.48 54H96a6 6 0 0 0 0-12H48a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0V62.48l45.76 45.76a6 6 0 0 0 8.48-8.48Z" />
  </Svg>
);
const Memo = memo(SvgArrowsOutLight);
export default Memo;
