import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgClipboardLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 34h-37.17a45.91 45.91 0 0 0-69.66 0H56a14 14 0 0 0-14 14v168a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14Zm-72-4a34 34 0 0 1 34 34v2H94v-2a34 34 0 0 1 34-34Zm74 186a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h29.67A45.77 45.77 0 0 0 82 64v8a6 6 0 0 0 6 6h80a6 6 0 0 0 6-6v-8a45.77 45.77 0 0 0-3.67-18H200a2 2 0 0 1 2 2Z" />
  </Svg>
);
const Memo = memo(SvgClipboardLight);
export default Memo;
