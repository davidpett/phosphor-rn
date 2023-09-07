import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSelectionForegroundBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M68 216a12 12 0 0 1-12 12h-8a20 20 0 0 1-20-20v-8a12 12 0 0 1 24 0v4h4a12 12 0 0 1 12 12Zm44-12H96a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24Zm-72-32a12 12 0 0 0 12-12v-16a12 12 0 0 0-24 0v16a12 12 0 0 0 12 12Zm128 16a12 12 0 0 0-12 12v4h-4a12 12 0 0 0 0 24h8a20 20 0 0 0 20-20v-8a12 12 0 0 0-12-12Zm0-72a12 12 0 0 0 12-12v-8a20 20 0 0 0-20-20h-8a12 12 0 0 0 0 24h4v4a12 12 0 0 0 12 12ZM56 76h-8a20 20 0 0 0-20 20v8a12 12 0 0 0 24 0v-4h4a12 12 0 0 0 0-24Zm152-48H100a20 20 0 0 0-20 20v40a5.47 5.47 0 0 0 0 .6A12 12 0 0 0 92 100h20a12 12 0 0 0 0-24h-8V52h100v100h-24v-8a12 12 0 0 0-24 0v20a12 12 0 0 0 12 12h40a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20Z" />
  </Svg>
);
const Memo = memo(SvgSelectionForegroundBold);
export default Memo;
