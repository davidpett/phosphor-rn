import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWarningOctagonLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M122 136V80a6 6 0 0 1 12 0v56a6 6 0 0 1-12 0Zm108-44.45v72.9a13.92 13.92 0 0 1-4.1 9.9l-51.55 51.55a13.92 13.92 0 0 1-9.9 4.1h-72.9a13.92 13.92 0 0 1-9.9-4.1L30.1 174.35a13.92 13.92 0 0 1-4.1-9.9v-72.9a13.92 13.92 0 0 1 4.1-9.9L81.65 30.1a13.92 13.92 0 0 1 9.9-4.1h72.9a13.92 13.92 0 0 1 9.9 4.1l51.55 51.55a13.92 13.92 0 0 1 4.1 9.9Zm-12 0a2 2 0 0 0-.59-1.42l-51.54-51.54a2 2 0 0 0-1.42-.59h-72.9a2 2 0 0 0-1.41.59L38.58 90.13a2 2 0 0 0-.58 1.42v72.9a2 2 0 0 0 .59 1.42l51.54 51.54a2 2 0 0 0 1.42.59h72.9a2 2 0 0 0 1.41-.59l51.56-51.54a2 2 0 0 0 .58-1.42ZM128 162a10 10 0 1 0 10 10 10 10 0 0 0-10-10Z" />
  </Svg>
);
const Memo = memo(SvgWarningOctagonLight);
export default Memo;
