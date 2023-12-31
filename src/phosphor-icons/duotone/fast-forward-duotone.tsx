import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFastForwardDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M136 128a7.76 7.76 0 0 1-3.63 6.59l-88.19 56.15A7.91 7.91 0 0 1 32 184.15V71.85a7.91 7.91 0 0 1 12.18-6.59l88.19 56.15A7.76 7.76 0 0 1 136 128Zm100.37-6.59-88.19-56.15A7.91 7.91 0 0 0 136 71.85v112.3a7.91 7.91 0 0 0 12.18 6.59l88.19-56.15a7.8 7.8 0 0 0 0-13.18Z"
      opacity={0.2}
    />
    <Path d="M240.67 114.66 152.48 58.5A15.91 15.91 0 0 0 128 71.84v37.3L48.48 58.5A15.91 15.91 0 0 0 24 71.84v112.32a15.92 15.92 0 0 0 24.48 13.34L128 146.86v37.3a15.92 15.92 0 0 0 24.48 13.34l88.19-56.16a15.8 15.8 0 0 0 0-26.68ZM40 183.94V72.07L127.82 128Zm104 0V72.07L231.82 128Z" />
  </Svg>
);
const Memo = memo(SvgFastForwardDuotone);
export default Memo;
