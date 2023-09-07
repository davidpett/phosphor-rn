import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCircuitryThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12ZM88 156a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm-44 52V48a4 4 0 0 1 4-4h36v104.4a20 20 0 1 0 8 0v-42.74l56 56V212H48a4 4 0 0 1-4-4Zm168 0a4 4 0 0 1-4 4h-52v-52a4 4 0 0 0-1.17-2.83L92 94.34V44h40v28a4 4 0 0 0 1.17 2.83L151.33 93a20 20 0 1 0 5.67-5.67l-17-17V44h68a4 4 0 0 1 4 4ZM168 92a12 12 0 1 1-12 12 12 12 0 0 1 12-12Z" />
  </Svg>
);
const Memo = memo(SvgCircuitryThin);
export default Memo;
