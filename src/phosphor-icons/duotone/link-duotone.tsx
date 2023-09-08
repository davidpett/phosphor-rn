import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLinkDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m209.94 113.94-28 28a47.76 47.76 0 0 1-26.52 13.48 47.76 47.76 0 0 1-13.48 26.52l-28 28a48 48 0 0 1-67.88-67.88l28-28a47.76 47.76 0 0 1 26.52-13.48 47.76 47.76 0 0 1 13.48-26.52l28-28a48 48 0 0 1 67.88 67.88Z"
      opacity={0.2}
    />
    <Path d="M137.54 186.36a8 8 0 0 1 0 11.31l-17.94 18a56 56 0 0 1-79.22-79.27l28.12-28.11a56 56 0 0 1 76.81-2.29 8 8 0 1 1-10.64 12 40 40 0 0 0-54.85 1.63L51.7 147.72a40 40 0 1 0 56.58 56.58l17.94-17.94a8 8 0 0 1 11.32 0Zm78.08-146a56.08 56.08 0 0 0-79.22 0l-17.94 17.97a8 8 0 0 0 11.32 11.31l17.94-17.94a40 40 0 0 1 56.58 56.58l-28.12 28.12a40 40 0 0 1-54.85 1.6 8 8 0 1 0-10.64 12 56 56 0 0 0 76.81-2.27l28.12-28.11a56.08 56.08 0 0 0 0-79.24Z" />
  </Svg>
);
const Memo = memo(SvgLinkDuotone);
export default Memo;
