import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMicrophoneStageDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M156.5 151 59 222.45a8 8 0 0 1-10.38-.79l-14.3-14.3a8 8 0 0 1-.77-10.36L105 99.5a64 64 0 0 0 51.48 51.5Z"
      opacity={0.2}
    />
    <Path d="M168 16a72.07 72.07 0 0 0-72 72 73.29 73.29 0 0 0 .63 9.42l-69.51 94.8A15.93 15.93 0 0 0 28.71 213L43 227.29a15.93 15.93 0 0 0 20.78 1.59l94.81-69.53a73.29 73.29 0 0 0 9.41.65 72 72 0 1 0 0-144Zm56 72a55.72 55.72 0 0 1-11.16 33.52l-78.35-78.36A56 56 0 0 1 224 88ZM54.32 216 40 201.68 102.14 117A72.37 72.37 0 0 0 139 153.86ZM112 88a55.67 55.67 0 0 1 11.16-33.51l78.34 78.34A56 56 0 0 1 112 88Zm-2.35 58.34a8 8 0 0 1 0 11.31l-8 8a8 8 0 1 1-11.31-11.31l8-8a8 8 0 0 1 11.33-.01Z" />
  </Svg>
);
const Memo = memo(SvgMicrophoneStageDuotone);
export default Memo;
