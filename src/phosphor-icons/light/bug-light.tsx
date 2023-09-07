import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBugLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M146 92a10 10 0 1 1 10 10 10 10 0 0 1-10-10Zm-46-10a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm146 46a6 6 0 0 1-6 6h-26v10a85.88 85.88 0 0 1-3.45 24.08l23.85 10.42a6 6 0 0 1-4.8 11l-23.23-10.15a86 86 0 0 1-156.74 0L26.4 189.5a6 6 0 1 1-4.8-11l23.85-10.42A85.88 85.88 0 0 1 42 144v-10H16a6 6 0 0 1 0-12h26v-10a85.88 85.88 0 0 1 3.45-24.08L21.6 77.5a6 6 0 0 1 4.8-11l23.23 10.15a86 86 0 0 1 156.74 0L229.6 66.5a6 6 0 1 1 4.8 11l-23.85 10.42A85.88 85.88 0 0 1 214 112v10h26a6 6 0 0 1 6 6Zm-192-6h148v-10a74 74 0 0 0-148 0Zm68 95.74V134H54v10a74.09 74.09 0 0 0 68 73.74ZM202 134h-68v83.74A74.09 74.09 0 0 0 202 144Z" />
  </Svg>
);
const Memo = memo(SvgBugLight);
export default Memo;
