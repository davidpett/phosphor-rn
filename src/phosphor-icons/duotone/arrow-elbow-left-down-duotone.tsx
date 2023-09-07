import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowElbowLeftDownDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m128 160-48 48-48-48Z" opacity={0.2} />
    <Path d="M224 56H80a8 8 0 0 0-8 8v88H32a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48A8 8 0 0 0 128 152H88V72h136a8 8 0 0 0 0-16ZM80 196.69 51.31 168h57.38Z" />
  </Svg>
);
const Memo = memo(SvgArrowElbowLeftDownDuotone);
export default Memo;
