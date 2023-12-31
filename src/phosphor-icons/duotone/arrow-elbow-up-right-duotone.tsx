import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowElbowUpRightDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m208 80-48 48V32Z" opacity={0.2} />
    <Path d="m213.66 74.34-48-48A8 8 0 0 0 152 32v40H64a8 8 0 0 0-8 8v144a8 8 0 0 0 16 0V88h80v40a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32ZM168 108.69V51.31L196.69 80Z" />
  </Svg>
);
const Memo = memo(SvgArrowElbowUpRightDuotone);
export default Memo;
