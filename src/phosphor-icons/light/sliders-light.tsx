import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSlidersLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M62 106.6V40a6 6 0 0 0-12 0v66.6a30 30 0 0 0 0 58.8V216a6 6 0 0 0 12 0v-50.6a30 30 0 0 0 0-58.8ZM56 154a18 18 0 1 1 18-18 18 18 0 0 1-18 18Zm78-95.4V40a6 6 0 0 0-12 0v18.6a30 30 0 0 0 0 58.8V216a6 6 0 0 0 12 0v-98.6a30 30 0 0 0 0-58.8Zm-6 47.4a18 18 0 1 1 18-18 18 18 0 0 1-18 18Zm102 62a30.05 30.05 0 0 0-24-29.4V40a6 6 0 0 0-12 0v98.6a30 30 0 0 0 0 58.8V216a6 6 0 0 0 12 0v-18.6a30.05 30.05 0 0 0 24-29.4Zm-30 18a18 18 0 1 1 18-18 18 18 0 0 1-18 18Z" />
  </Svg>
);
const Memo = memo(SvgSlidersLight);
export default Memo;
