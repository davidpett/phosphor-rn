import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPenNibBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M244 100.68a19.86 19.86 0 0 0-5.86-14.14l-68.68-68.69a20 20 0 0 0-28.29 0l-27.82 27.82-57.24 21.47A20 20 0 0 0 43.4 82.58L20.16 222A12 12 0 0 0 32 236a11.9 11.9 0 0 0 2-.16l139.45-23.25a20.07 20.07 0 0 0 15.44-12.7l21.46-57.25 27.82-27.82a19.85 19.85 0 0 0 5.83-14.14Zm-76.8 88.62L67 206l33-33a34 34 0 1 0-17-17l-33 33L66.7 88.8 117 69.94 186.05 139ZM104 142a10 10 0 1 1 10 10 10 10 0 0 1-10-10Zm96-23-63-63 18.34-18.34 63 63Z" />
  </Svg>
);
const Memo = memo(SvgPenNibBold);
export default Memo;
