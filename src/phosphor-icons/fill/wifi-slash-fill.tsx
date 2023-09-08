import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWifiSlashFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M213.92 210.62a8 8 0 1 1-11.84 10.76l-33.67-37-28.1 33.88A15.93 15.93 0 0 1 128 224a15.93 15.93 0 0 1-12.31-5.77L11.65 92.8a15.65 15.65 0 0 1-3.54-11.89 15.93 15.93 0 0 1 6.17-10.81 187.93 187.93 0 0 1 32.35-19.71l-4.55-5a8 8 0 1 1 11.84-10.77Zm34-129.71a15.93 15.93 0 0 0-6.17-10.81A186.67 186.67 0 0 0 128 32a190.62 190.62 0 0 0-35.36 3.3 8 8 0 0 0-4.44 13.24l94.65 104.12a8 8 0 0 0 5.92 2.62h.23a8 8 0 0 0 6-2.9l49.35-59.58a15.65 15.65 0 0 0 3.54-11.89Z" />
  </Svg>
);
const Memo = memo(SvgWifiSlashFill);
export default Memo;
