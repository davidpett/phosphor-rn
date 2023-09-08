import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCoffeeDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M208 88v48a88 88 0 0 1-51.3 80H83.3A88 88 0 0 1 32 136V88Z"
      opacity={0.2}
    />
    <Path d="M80 56V24a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0Zm40 8a8 8 0 0 0 8-8V24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8Zm32 0a8 8 0 0 0 8-8V24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8Zm96 56v8a40 40 0 0 1-37.51 39.91 96.59 96.59 0 0 1-27 40.09H208a8 8 0 0 1 0 16H32a8 8 0 0 1 0-16h24.54A96.3 96.3 0 0 1 24 136V88a8 8 0 0 1 8-8h176a40 40 0 0 1 40 40Zm-48-24H40v40a80.27 80.27 0 0 0 45.12 72h69.76A80.27 80.27 0 0 0 200 136Zm32 24a24 24 0 0 0-16-22.62V136a95.78 95.78 0 0 1-1.2 15 24 24 0 0 0 17.2-23Z" />
  </Svg>
);
const Memo = memo(SvgCoffeeDuotone);
export default Memo;
