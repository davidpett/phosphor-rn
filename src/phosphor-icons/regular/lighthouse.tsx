import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLighthouse = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 80a8 8 0 0 0-8 8v16h-11.15L184 55.2a8 8 0 0 0-2.68-5.2l-42.88-38.12-.2-.17a16 16 0 0 0-20.48 0l-.2.17L74.68 50A8 8 0 0 0 72 55.2L67.15 104H56V88a8 8 0 0 0-16 0v24a8 8 0 0 0 8 8h17.54l-9.47 94.48A16 16 0 0 0 72 232h112a16 16 0 0 0 15.92-17.56L190.46 120H208a8 8 0 0 0 8-8V88a8 8 0 0 0-8-8Zm-80-56 27 24h-54ZM87.24 64h81.52l4 40H136V88a8 8 0 0 0-16 0v16H83.23ZM72 216l4-40h104l4 40Zm106.39-56H77.61l4-40h92.76Z" />
  </Svg>
);
const Memo = memo(SvgLighthouse);
export default Memo;
