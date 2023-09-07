import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgIceCreamLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M206 90.83V88a78 78 0 0 0-156 0v2.83A22 22 0 0 0 56 134h4.52l62.27 109a6 6 0 0 0 10.42 0l62.27-109H200a22 22 0 0 0 6-43.17Zm-78 137.08L74.34 134h23.89L140 207Zm8-93.91 22.85 40-11.94 20.91L112.05 134Zm29.76 27.91L149.77 134h31.89ZM200 122H56a10 10 0 0 1 0-20 6 6 0 0 0 6-6v-8a66 66 0 0 1 132 0v8a6 6 0 0 0 6 6 10 10 0 0 1 0 20Z" />
  </Svg>
);
const Memo = memo(SvgIceCreamLight);
export default Memo;
