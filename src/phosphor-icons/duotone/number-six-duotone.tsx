import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberSixDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16Z"
      opacity={0.2}
    />
    <Path d="M128 104a56 56 0 0 0-15.62 2.23L143 51.93a8 8 0 1 0-14-7.85l-49.55 88A56 56 0 1 0 128 104Zm0 96a40 40 0 1 1 40-40 40 40 0 0 1-40 40Z" />
  </Svg>
);
const Memo = memo(SvgNumberSixDuotone);
export default Memo;
