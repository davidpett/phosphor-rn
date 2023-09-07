import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgListBulletsFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M56 128a16 16 0 1 1-16-16 16 16 0 0 1 16 16ZM40 48a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm0 128a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm176-64H88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8Zm0-64H88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8Zm0 128H88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgListBulletsFill);
export default Memo;
