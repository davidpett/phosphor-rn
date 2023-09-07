import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDetectiveDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M104 180a28 28 0 1 1-28-28 28 28 0 0 1 28 28Zm76-28a28 28 0 1 0 28 28 28 28 0 0 0-28-28ZM166.11 51.29a8 8 0 0 0-12.7-.29l-12.94 15a16 16 0 0 1-24.94 0l-12.94-15a8 8 0 0 0-12.7.29L40 120h176Z"
      opacity={0.2}
    />
    <Path d="M248 112h-27.92l-47.5-65.41a16 16 0 0 0-25.31-.72l-12.85 14.9-.2.23a7.95 7.95 0 0 1-12.44 0l-.2-.23-12.85-14.9a16 16 0 0 0-25.31.72L35.92 112H8a8 8 0 0 0 0 16h240a8 8 0 0 0 0-16ZM96.34 56l.19.24 12.85 14.89a24 24 0 0 0 37.24 0l12.85-14.89c.06-.08.1-.16.17-.24l40.66 56H55.69ZM180 144a36 36 0 0 0-35.77 32h-32.46a36 36 0 1 0-1.83 16h36.12A36 36 0 1 0 180 144ZM76 200a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm104 0a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z" />
  </Svg>
);
const Memo = memo(SvgDetectiveDuotone);
export default Memo;
