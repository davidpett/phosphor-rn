import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSlidersHorizontal = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M40 88h33a32 32 0 0 0 62 0h81a8 8 0 0 0 0-16h-81a32 32 0 0 0-62 0H40a8 8 0 0 0 0 16Zm64-24a16 16 0 1 1-16 16 16 16 0 0 1 16-16Zm112 104h-17a32 32 0 0 0-62 0H40a8 8 0 0 0 0 16h97a32 32 0 0 0 62 0h17a8 8 0 0 0 0-16Zm-48 24a16 16 0 1 1 16-16 16 16 0 0 1-16 16Z" />
  </Svg>
);
const Memo = memo(SvgSlidersHorizontal);
export default Memo;
