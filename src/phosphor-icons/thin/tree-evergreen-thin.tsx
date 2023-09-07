import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTreeEvergreenThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m227.16 189.54-51-65.54H208a4 4 0 0 0 3.17-6.44l-80-104a4 4 0 0 0-6.34 0l-80 104A4 4 0 0 0 48 124h31.82l-51 65.54A4 4 0 0 0 32 196h92v44a4 4 0 0 0 8 0v-44h92a4 4 0 0 0 3.16-6.46ZM40.18 188l51-65.54A4 4 0 0 0 88 116H56.12L128 22.56 199.88 116H168a4 4 0 0 0-3.16 6.46l51 65.54Z" />
  </Svg>
);
const Memo = memo(SvgTreeEvergreenThin);
export default Memo;
