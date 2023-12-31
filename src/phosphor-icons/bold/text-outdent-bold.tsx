import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextOutdentBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 128a12 12 0 0 1-12 12h-96a12 12 0 0 1 0-24h96a12 12 0 0 1 12 12ZM120 76h96a12 12 0 0 0 0-24h-96a12 12 0 0 0 0 24Zm96 104H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24ZM72 148a12 12 0 0 0 8.49-20.49L49 96l31.49-31.52a12 12 0 0 0-17-17l-40 40a12 12 0 0 0 0 17l40 40A12 12 0 0 0 72 148Z" />
  </Svg>
);
const Memo = memo(SvgTextOutdentBold);
export default Memo;
