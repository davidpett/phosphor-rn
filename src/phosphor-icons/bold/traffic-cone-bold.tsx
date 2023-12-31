import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTrafficConeBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 204h-15.47L157.2 33.43A20 20 0 0 0 138.31 20h-20.62A20 20 0 0 0 98.8 33.43L39.47 204H24a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24ZM98.27 108h59.46l13.91 40H84.36Zm22.26-64h14.94l13.91 40h-42.76ZM76 172h104l11.13 32H64.88Z" />
  </Svg>
);
const Memo = memo(SvgTrafficConeBold);
export default Memo;
