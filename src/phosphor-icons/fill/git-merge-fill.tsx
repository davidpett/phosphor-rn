import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGitMergeFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 112a32.06 32.06 0 0 0-31 24h-25a40.19 40.19 0 0 1-32-16L93.69 84.92A32 32 0 1 0 72 87v82a32 32 0 1 0 16 0v-65l19.2 25.6A56.26 56.26 0 0 0 152 152h25a32 32 0 1 0 31-40ZM96 200a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm112-40a16 16 0 0 1-16-16 16 16 0 1 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgGitMergeFill);
export default Memo;
