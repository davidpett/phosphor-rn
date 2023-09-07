import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNotionLogoDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 208h-40L64 48h40Z" opacity={0.2} />
    <Path d="M216 40h-48a8 8 0 0 0 0 16h16v120.85L111 44.14a8 8 0 0 0-7-4.14H40a8 8 0 0 0 0 16h16v144H40a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16H72V79.15l73 132.71a8 8 0 0 0 7 4.14h40a8 8 0 0 0 8-8V56h16a8 8 0 0 0 0-16Zm-59.27 160L77.53 56h21.74l79.2 144Z" />
  </Svg>
);
const Memo = memo(SvgNotionLogoDuotone);
export default Memo;
