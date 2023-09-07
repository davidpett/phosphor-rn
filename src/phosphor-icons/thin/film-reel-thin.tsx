import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFilmReelThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 220h-56.82a100 100 0 1 0-39.18 8h96a4 4 0 0 0 0-8ZM36 128a92 92 0 1 1 92 92 92.1 92.1 0 0 1-92-92Zm92-28a20 20 0 1 0-20-20 20 20 0 0 0 20 20Zm0-32a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm20 108a20 20 0 1 0-20 20 20 20 0 0 0 20-20Zm-32 0a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm60-28a20 20 0 1 0-20-20 20 20 0 0 0 20 20Zm0-32a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm-96-8a20 20 0 1 0 20 20 20 20 0 0 0-20-20Zm0 32a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgFilmReelThin);
export default Memo;
