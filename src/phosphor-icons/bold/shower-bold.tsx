import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShowerBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M68 236a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm16-48a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm-64 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm32 0a16 16 0 1 0-16-16 16 16 0 0 0 16 16ZM256 40a12 12 0 0 1-12 12h-23l-25.81 25.79-21.45 125.54a20 20 0 0 1-33.86 10.8l-98-98a20 20 0 0 1 10.84-33.88l125.5-21.44 26.95-26.95A19.86 19.86 0 0 1 219.31 28H244a12 12 0 0 1 12 12Zm-86.68 46.68-105 17.94 87.07 87.07Z" />
  </Svg>
);
const Memo = memo(SvgShowerBold);
export default Memo;
