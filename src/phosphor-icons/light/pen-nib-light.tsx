import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPenNibLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M238 100.68a13.94 13.94 0 0 0-4.1-9.9L165.21 22.1a14 14 0 0 0-19.8 0l-28.73 28.73-58.46 21.93a14 14 0 0 0-8.9 10.8L26.08 223a6 6 0 0 0 5.92 7 6.61 6.61 0 0 0 1-.08l139.44-23.24a14 14 0 0 0 10.81-8.9l21.92-58.46 28.74-28.74a13.92 13.92 0 0 0 4.09-9.9Zm-66 92.89a2 2 0 0 1-1.54 1.27L49.49 215l52.87-52.88a26 26 0 1 0-8.48-8.48L41 206.53l20.17-121A2 2 0 0 1 62.43 84l56.06-21L193 137.51ZM102 140a14 14 0 1 1 14 14 14 14 0 0 1-14-14Zm123.41-37.9L200 127.51 128.48 56l25.42-25.42a2 2 0 0 1 2.83 0l68.68 68.69a2 2 0 0 1 0 2.83Z" />
  </Svg>
);
const Memo = memo(SvgPenNibLight);
export default Memo;
