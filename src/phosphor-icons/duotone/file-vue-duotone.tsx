import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileVueDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 88h-56V32Z" opacity={0.2} />
    <Path d="m87.54 154.69-20 56a8 8 0 0 1-15.07 0l-20-56a8 8 0 0 1 15.07-5.38L60 184.21l12.47-34.9a8 8 0 0 1 15.07 5.38ZM208 160a8 8 0 0 0 0-16h-32a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h32a8 8 0 0 0 0-16h-24v-12h16a8 8 0 0 0 0-16h-16v-12Zm-64-16a8 8 0 0 0-8 8v38a10 10 0 0 1-20 0v-38a8 8 0 0 0-16 0v38a26 26 0 0 0 52 0v-38a8 8 0 0 0-8-8Zm72-56v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88Zm-27.31-8L160 51.31V80Z" />
  </Svg>
);
const Memo = memo(SvgFileVueDuotone);
export default Memo;
