import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNeedleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M186.83 69.17a4 4 0 0 1 0 5.66l-16 16a4 4 0 0 1-5.66-5.66l16-16a4 4 0 0 1 5.66 0ZM220 72a35.76 35.76 0 0 1-10.54 25.46l-24 24a4.05 4.05 0 0 1-2.16 1.11c-21.65 3.72-52.74 21.46-89.91 51.33-28.34 22.77-50.34 44.71-50.56 44.93l-.24.22a4 4 0 0 1-5.42-5.88c.22-.17 22.16-22.17 44.93-50.56 29.9-37.17 47.61-68.26 51.33-89.91a4.05 4.05 0 0 1 1.11-2.16l24-24A36 36 0 0 1 220 72Zm-8 0a28 28 0 0 0-47.8-19.8l-23.12 23.12c-5.33 28-29.48 63.42-52.51 92.11 28.69-23 64.16-47.18 92.11-52.52L203.8 91.8A27.81 27.81 0 0 0 212 72Z" />
  </Svg>
);
const Memo = memo(SvgNeedleThin);
export default Memo;
