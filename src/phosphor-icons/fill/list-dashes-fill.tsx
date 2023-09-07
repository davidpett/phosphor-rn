import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgListDashesFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 56v16a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h120a8 8 0 0 1 8 8ZM56 48H40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8Zm160 64H96a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8Zm-160 0H40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8Zm160 64H96a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8Zm-160 0H40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgListDashesFill);
export default Memo;
