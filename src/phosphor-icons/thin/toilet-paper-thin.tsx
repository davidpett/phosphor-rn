import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgToiletPaperThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M72 120a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm164 0v88a12 12 0 0 1-12 12H112a12 12 0 0 1-12-12v-39.14C92.1 190.26 79 204 64 204c-24.67 0-44-36.9-44-84s19.33-84 44-84h128c24.67 0 44 36.9 44 84Zm-136 0c0-41.2-16.49-76-36-76s-36 34.8-36 76 16.49 76 36 76 36-34.8 36-76Zm128 88v-84h-20a4 4 0 0 1 0-8h20c-1-39.42-17.07-72-35.95-72h-109c14.29 12.8 24.14 39.76 24.9 72h20a4 4 0 0 1 0 8H108v84a4 4 0 0 0 4 4h112a4 4 0 0 0 4-4Zm-52-92h-16a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8Z" />
  </Svg>
);
const Memo = memo(SvgToiletPaperThin);
export default Memo;
