import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUserRectangle = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM96 120a32 32 0 1 1 32 32 32 32 0 0 1-32-32Zm-23.43 80a64 64 0 0 1 110.86 0ZM216 200h-14.67a80.14 80.14 0 0 0-43.69-42.28 48 48 0 1 0-59.28 0A80.14 80.14 0 0 0 54.67 200H40V56h176v144Z" />
  </Svg>
);
const Memo = memo(SvgUserRectangle);
export default Memo;
