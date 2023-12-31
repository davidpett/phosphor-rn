import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCornersInThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M156 96V48a4 4 0 0 1 8 0v44h44a4 4 0 0 1 0 8h-48a4 4 0 0 1-4-4Zm-60 60H48a4 4 0 0 0 0 8h44v44a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4Zm112 0h-48a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-44h44a4 4 0 0 0 0-8ZM96 44a4 4 0 0 0-4 4v44H48a4 4 0 0 0 0 8h48a4 4 0 0 0 4-4V48a4 4 0 0 0-4-4Z" />
  </Svg>
);
const Memo = memo(SvgCornersInThin);
export default Memo;
