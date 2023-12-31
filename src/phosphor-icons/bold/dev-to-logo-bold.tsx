import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDevToLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 52H24A20 20 0 0 0 4 72v112a20 20 0 0 0 20 20h208a20 20 0 0 0 20-20V72a20 20 0 0 0-20-20Zm-4 128H28V76h200Zm-120-24v-56a12 12 0 0 1 12-12h20a12 12 0 0 1 0 24h-8v4a12 12 0 0 1 0 24v4h8a12 12 0 0 1 0 24h-20a12 12 0 0 1-12-12Zm52.46-52.7a12 12 0 1 1 23.08-6.6l4.46 15.62 4.46-15.62a12 12 0 0 1 23.08 6.6l-16 56a12 12 0 0 1-23.08 0ZM56 168h8a36 36 0 0 0 36-36v-8a36 36 0 0 0-36-36h-8a12 12 0 0 0-12 12v56a12 12 0 0 0 12 12Zm12-55.31A12 12 0 0 1 76 124v8a12 12 0 0 1-8 11.31Z" />
  </Svg>
);
const Memo = memo(SvgDevToLogoBold);
export default Memo;
