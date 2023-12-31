import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUniteSquareThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 92h-52V40a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v120a4 4 0 0 0 4 4h52v52a4 4 0 0 0 4 4h120a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4Zm-62.34 120L44 102.34V49.66L206.34 212Zm-104-168h52.68L212 153.66v52.68ZM212 142.34 169.66 100H212Zm-56-56L113.66 44H156ZM44 113.66 86.34 156H44Zm56 56L142.34 212H100Z" />
  </Svg>
);
const Memo = memo(SvgUniteSquareThin);
export default Memo;
