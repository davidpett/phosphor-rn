import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSelectionPlusLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M150 40a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6Zm-6 170h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12Zm66-162v24a6 6 0 0 0 12 0V48a14 14 0 0 0-14-14h-24a6 6 0 0 0 0 12h24a2 2 0 0 1 2 2Zm6 58a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6ZM40 150a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6Zm32 60H48a2 2 0 0 1-2-2v-24a6 6 0 0 0-12 0v24a14 14 0 0 0 14 14h24a6 6 0 0 0 0-12Zm0-176H48a14 14 0 0 0-14 14v24a6 6 0 0 0 12 0V48a2 2 0 0 1 2-2h24a6 6 0 0 0 0-12Zm168 176h-18v-18a6 6 0 0 0-12 0v18h-18a6 6 0 0 0 0 12h18v18a6 6 0 0 0 12 0v-18h18a6 6 0 0 0 0-12Z" />
  </Svg>
);
const Memo = memo(SvgSelectionPlusLight);
export default Memo;
