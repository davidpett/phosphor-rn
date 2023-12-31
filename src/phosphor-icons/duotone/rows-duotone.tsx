import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRowsDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 152v40a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Zm-8-96H48a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8Z"
      opacity={0.2}
    />
    <Path d="M208 136H48a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16Zm0 56H48v-40h160v40Zm0-144H48a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16Zm0 56H48V64h160v40Z" />
  </Svg>
);
const Memo = memo(SvgRowsDuotone);
export default Memo;
