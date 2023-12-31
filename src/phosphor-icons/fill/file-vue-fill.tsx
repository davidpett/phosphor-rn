import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileVueFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8V88a8 8 0 0 0-2.34-5.66ZM152 88V44l44 44Zm-64.46 66.69-20 56a8 8 0 0 1-15.07 0l-20-56a8 8 0 0 1 15.07-5.38L60 184.21l12.47-34.9a8 8 0 0 1 15.07 5.38ZM184 160v12h16a8 8 0 0 1 0 16h-16v12h24a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8v-56a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16Zm-32-8v38a26 26 0 0 1-52 0v-38a8 8 0 0 1 16 0v38a10 10 0 0 0 20 0v-38a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgFileVueFill);
export default Memo;
