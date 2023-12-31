import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgOctagonLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M225.9 81.65 174.35 30.1a13.92 13.92 0 0 0-9.9-4.1h-72.9a13.92 13.92 0 0 0-9.9 4.1L30.1 81.65a13.92 13.92 0 0 0-4.1 9.9v72.9a13.92 13.92 0 0 0 4.1 9.9l51.55 51.55a13.92 13.92 0 0 0 9.9 4.1h72.9a13.92 13.92 0 0 0 9.9-4.1l51.55-51.55a13.92 13.92 0 0 0 4.1-9.9v-72.9a13.92 13.92 0 0 0-4.1-9.9Zm-7.9 82.8a2 2 0 0 1-.59 1.42l-51.55 51.54a2 2 0 0 1-1.41.59h-72.9a2 2 0 0 1-1.42-.59l-51.54-51.54a2 2 0 0 1-.59-1.42v-72.9a2 2 0 0 1 .59-1.42l51.55-51.54a2 2 0 0 1 1.41-.59h72.9a2 2 0 0 1 1.42.59l51.54 51.55a2 2 0 0 1 .59 1.41Z" />
  </Svg>
);
const Memo = memo(SvgOctagonLight);
export default Memo;
