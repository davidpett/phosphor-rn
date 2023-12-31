import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgImageFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-60 48a12 12 0 1 1-12 12 12 12 0 0 1 12-12ZM40 200v-28l52-52 80 80Zm176 0h-21.37l-36-36 20-20L216 181.38V200Z" />
  </Svg>
);
const Memo = memo(SvgImageFill);
export default Memo;
