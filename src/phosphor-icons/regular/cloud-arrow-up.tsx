import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCloudArrowUp = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M248 128a87.34 87.34 0 0 1-17.6 52.81 8 8 0 1 1-12.8-9.62A71.34 71.34 0 0 0 232 128a72 72 0 0 0-144 0 8 8 0 0 1-16 0 88 88 0 0 1 3.29-23.88C74.2 104 73.1 104 72 104a48 48 0 0 0 0 96h24a8 8 0 0 1 0 16H72a64 64 0 1 1 9.29-127.32A88 88 0 0 1 248 128Zm-90.34-5.66a8 8 0 0 0-11.32 0l-32 32a8 8 0 0 0 11.32 11.32L144 147.31V208a8 8 0 0 0 16 0v-60.69l18.34 18.35a8 8 0 0 0 11.32-11.32Z" />
  </Svg>
);
const Memo = memo(SvgCloudArrowUp);
export default Memo;
