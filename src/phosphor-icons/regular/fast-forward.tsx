import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFastForward = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240.67 114.66 152.48 58.5A15.91 15.91 0 0 0 128 71.84v37.3L48.48 58.5A15.91 15.91 0 0 0 24 71.84v112.32a15.92 15.92 0 0 0 24.48 13.34L128 146.86v37.3a15.92 15.92 0 0 0 24.48 13.34l88.19-56.16a15.8 15.8 0 0 0 0-26.68ZM40 183.94V72.07L127.82 128Zm104 0V72.07L231.82 128Z" />
  </Svg>
);
const Memo = memo(SvgFastForward);
export default Memo;
