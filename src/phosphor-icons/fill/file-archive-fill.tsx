import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileArchiveFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h36a4 4 0 0 0 4-4v-20h-7.73a8.17 8.17 0 0 1-8.27-7.47 8 8 0 0 1 8-8.53h8v-16h-7.73a8.17 8.17 0 0 1-8.27-7.47 8 8 0 0 1 8-8.53h8v-16h-7.73a8.17 8.17 0 0 1-8.27-7.47 8 8 0 0 1 8-8.53h8v-7.73a8.18 8.18 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8v8h7.73a8.17 8.17 0 0 1 8.25 7.47 8 8 0 0 1-8 8.53h-8v16h7.73a8.17 8.17 0 0 1 8.25 7.47 8 8 0 0 1-8 8.53h-8v16h7.73a8.17 8.17 0 0 1 8.25 7.47 8 8 0 0 1-8 8.53h-8v20a4 4 0 0 0 4 4h84a16 16 0 0 0 16-16V88a8 8 0 0 0-2.28-5.66ZM152 88V44l44 44Z" />
  </Svg>
);
const Memo = memo(SvgFileArchiveFill);
export default Memo;
