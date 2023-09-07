import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEngineThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M248 108a4 4 0 0 0-4 4v28h-24v-20a12 12 0 0 0-12-12h-12.69a4 4 0 0 1-2.82-1.17l-35.32-35.32a11.93 11.93 0 0 0-8.48-3.51H124V44h28a4 4 0 0 0 0-8H88a4 4 0 0 0 0 8h28v24H48a12 12 0 0 0-12 12v60H12v-28a4 4 0 0 0-8 0v64a4 4 0 0 0 8 0v-28h24v24.69a11.93 11.93 0 0 0 3.51 8.48l35.32 35.32a11.93 11.93 0 0 0 8.48 3.51h65.38a11.93 11.93 0 0 0 8.48-3.51l35.32-35.32a4 4 0 0 1 2.82-1.17H208a12 12 0 0 0 12-12v-20h24v28a4 4 0 0 0 8 0v-64a4 4 0 0 0-4-4Zm-36 60a4 4 0 0 1-4 4h-12.69a11.93 11.93 0 0 0-8.48 3.51l-35.32 35.32a4 4 0 0 1-2.82 1.17H83.31a4 4 0 0 1-2.82-1.17l-35.32-35.32a4 4 0 0 1-1.17-2.82V80a4 4 0 0 1 4-4h100.69a4 4 0 0 1 2.82 1.17l35.32 35.32a11.93 11.93 0 0 0 8.48 3.51H208a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgEngineThin);
export default Memo;
