import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPerspectiveDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 48v160a8 8 0 0 1-9.43 7.87l-160-29.09a8 8 0 0 1-6.57-7.87V77.09a8 8 0 0 1 6.57-7.87l160-29.09A8 8 0 0 1 216 48Z"
      opacity={0.2}
    />
    <Path d="M240 120h-16V48a16 16 0 0 0-18.86-15.74l-160 29.09A16 16 0 0 0 32 77.09V120H16a8 8 0 0 0 0 16h16v42.91a16 16 0 0 0 13.14 15.74l160 29.09a16.47 16.47 0 0 0 2.86.26 16 16 0 0 0 16-16v-72h16a8 8 0 0 0 0-16ZM48 77.09 208 48v72H48ZM208 208 48 178.91V136h160Z" />
  </Svg>
);
const Memo = memo(SvgPerspectiveDuotone);
export default Memo;
