import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTShirtLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m246.64 63-51.77-28.26A5.93 5.93 0 0 0 192 34h-32a6 6 0 0 0-6 6 26 26 0 0 1-52 0 6 6 0 0 0-6-6H64a5.93 5.93 0 0 0-2.88.74L9.36 63a13.77 13.77 0 0 0-5.78 18.55l19.28 36.81A14.38 14.38 0 0 0 35.67 126H58v82a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-82h22.34a14.38 14.38 0 0 0 12.81-7.64l19.28-36.81A13.77 13.77 0 0 0 246.64 63Zm-211 51a2.42 2.42 0 0 1-2.18-1.21L14.21 76a1.82 1.82 0 0 1 .9-2.47L58 50.11V114ZM186 208a2 2 0 0 1-2 2H72a2 2 0 0 1-2-2V46h20.48a38 38 0 0 0 75 0H186Zm55.8-132-19.28 36.8a2.42 2.42 0 0 1-2.18 1.21H198v-63.9l42.9 23.4a1.83 1.83 0 0 1 .89 2.49Z" />
  </Svg>
);
const Memo = memo(SvgTShirtLight);
export default Memo;
