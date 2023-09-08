import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChecksFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM80 160a8 8 0 0 1-5.66-2.34l-24-24a8 8 0 0 1 11.32-11.32L80 140.69l50.34-50.35a8 8 0 0 1 11.32 11.32l-56 56A8 8 0 0 1 80 160Zm133.66-58.34-56 56a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L152 140.69l50.34-50.35a8 8 0 0 1 11.32 11.32Z" />
  </Svg>
);
const Memo = memo(SvgChecksFill);
export default Memo;
