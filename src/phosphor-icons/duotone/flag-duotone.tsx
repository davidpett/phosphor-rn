import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlagDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 48v120c-64 55.43-112-55.43-176 0V48c64-55.43 112 55.43 176 0Z"
      opacity={0.2}
    />
    <Path d="M34.76 42A8 8 0 0 0 32 48v168a8 8 0 0 0 16 0v-44.23c26.79-21.16 49.87-9.75 76.45 3.41 16.4 8.11 34.06 16.85 53 16.85 13.93 0 28.54-4.75 43.82-18a8 8 0 0 0 2.76-6V48a8 8 0 0 0-13.27-6c-28 24.23-51.72 12.49-79.21-1.12C103.07 26.76 70.78 10.79 34.76 42ZM208 164.25c-26.79 21.16-49.87 9.74-76.45-3.41-25-12.35-52.81-26.13-83.55-8.4V51.79c26.79-21.16 49.87-9.75 76.45 3.4 25 12.35 52.82 26.13 83.55 8.4Z" />
  </Svg>
);
const Memo = memo(SvgFlagDuotone);
export default Memo;
