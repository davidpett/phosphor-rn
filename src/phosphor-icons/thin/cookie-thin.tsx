import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCookieThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M161.66 166.34a8 8 0 1 1-11.32 0 8 8 0 0 1 11.32 0Zm-75.32-8a8 8 0 1 0 11.32 0 8 8 0 0 0-11.32 0Zm3.32-56a8 8 0 1 0 0 11.32 8 8 0 0 0 0-11.32Zm36.68 16a8 8 0 1 0 11.32 0 8 8 0 0 0-11.32 0ZM228 128A100 100 0 1 1 128 28a4 4 0 0 1 4 4 44.05 44.05 0 0 0 44 44 4 4 0 0 1 4 4 44.05 44.05 0 0 0 44 44 4 4 0 0 1 4 4Zm-8.08 3.84a52.08 52.08 0 0 1-47.78-48 52.08 52.08 0 0 1-48-47.78 92 92 0 1 0 95.76 95.76Z" />
  </Svg>
);
const Memo = memo(SvgCookieThin);
export default Memo;
