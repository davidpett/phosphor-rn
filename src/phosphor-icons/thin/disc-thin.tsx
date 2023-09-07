import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDiscThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm35.77 96a35.78 35.78 0 0 0-7.66-18.45l39.68-39.68A91.64 91.64 0 0 1 219.91 124Zm-7.77 4a28 28 0 1 1-28-28 28 28 0 0 1 28 28Zm-28 92a92 92 0 1 1 62.13-159.79l-39.68 39.68A36 36 0 1 0 163.77 132h56.14A92.11 92.11 0 0 1 128 220Z" />
  </Svg>
);
const Memo = memo(SvgDiscThin);
export default Memo;
