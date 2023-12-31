import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowULeftUpDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M136 80H40l48-48Z" opacity={0.2} />
    <Path d="M200 72a8 8 0 0 0-8 8v88a48 48 0 0 1-96 0V88h40a8 8 0 0 0 5.66-13.66l-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 40 88h40v80a64 64 0 0 0 128 0V80a8 8 0 0 0-8-8ZM88 43.31 116.69 72H59.31Z" />
  </Svg>
);
const Memo = memo(SvgArrowULeftUpDuotone);
export default Memo;
