import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSelectionBackgroundThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M160 84H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12Zm4 124a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4ZM140 40a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4Zm80 8v8a4 4 0 0 1-8 0v-8a4 4 0 0 0-4-4h-8a4 4 0 0 1 0-8h8a12 12 0 0 1 12 12Zm0 48v16a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0Zm0 56v8a12 12 0 0 1-12 12h-8a4 4 0 0 1 0-8h8a4 4 0 0 0 4-4v-8a4 4 0 0 1 8 0ZM84 56v-8a12 12 0 0 1 12-12h8a4 4 0 0 1 0 8h-8a4 4 0 0 0-4 4v8a4 4 0 0 1-8 0Z" />
  </Svg>
);
const Memo = memo(SvgSelectionBackgroundThin);
export default Memo;
