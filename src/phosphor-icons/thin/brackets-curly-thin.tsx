import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBracketsCurlyThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M35.89 128C52 136.23 52 155.64 52 172c0 24.8 1.35 40 28 40a4 4 0 0 1 0 8c-36 0-36-26.61-36-48 0-24.8-1.35-40-28-40a4 4 0 0 1 0-8c26.65 0 28-15.2 28-40 0-21.39 0-48 36-48a4 4 0 0 1 0 8c-26.65 0-28 15.2-28 40 0 16.36 0 35.77-16.11 44ZM240 124c-26.65 0-28-15.2-28-40 0-21.39 0-48-36-48a4 4 0 0 0 0 8c26.65 0 28 15.2 28 40 0 16.36 0 35.77 16.11 44C204 136.23 204 155.64 204 172c0 24.8-1.35 40-28 40a4 4 0 0 0 0 8c36 0 36-26.61 36-48 0-24.8 1.35-40 28-40a4 4 0 0 0 0-8Z" />
  </Svg>
);
const Memo = memo(SvgBracketsCurlyThin);
export default Memo;
