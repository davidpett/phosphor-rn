import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFadersHorizontalThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M36 80a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4Zm180 92h-44v-20a4 4 0 0 0-8 0v48a4 4 0 0 0 8 0v-20h44a4 4 0 0 0 0-8Zm-80 0H40a4 4 0 0 0 0 8h96a4 4 0 0 0 0-8Zm-32-64a4 4 0 0 0 4-4V84h108a4 4 0 0 0 0-8H108V56a4 4 0 0 0-8 0v48a4 4 0 0 0 4 4Z" />
  </Svg>
);
const Memo = memo(SvgFadersHorizontalThin);
export default Memo;
