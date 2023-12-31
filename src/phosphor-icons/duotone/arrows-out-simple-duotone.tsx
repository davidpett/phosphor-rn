import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsOutSimpleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 48v48l-48-48ZM48 208h48l-48-48Z" opacity={0.2} />
    <Path d="M208 40h-48a8 8 0 0 0-5.66 13.66L172.69 72l-34.35 34.34a8 8 0 0 0 11.32 11.32L184 83.31l18.34 18.35A8 8 0 0 0 216 96V48a8 8 0 0 0-8-8Zm-8 36.69L179.31 56H200Zm-93.66 61.65L72 172.69l-18.34-18.35A8 8 0 0 0 40 160v48a8 8 0 0 0 8 8h48a8 8 0 0 0 5.66-13.66L83.31 184l34.35-34.34a8 8 0 0 0-11.32-11.32ZM56 200v-20.69L76.69 200Z" />
  </Svg>
);
const Memo = memo(SvgArrowsOutSimpleDuotone);
export default Memo;
