import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSyringeBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m240.49 63.51-48-48a12 12 0 0 0-17 17L191 48l-23 23-31.51-31.49a12 12 0 1 0-17 17L123 60l-81.14 81.17A19.86 19.86 0 0 0 36 155.31V203l-20.49 20.51a12 12 0 0 0 17 17L53 220h47.72a19.86 19.86 0 0 0 14.14-5.86L196 133l3.51 3.52a12 12 0 0 0 17-17L185 88l23-23 15.51 15.52a12 12 0 1 0 17-17ZM99 196H60v-39l14-14 17.51 17.52a12 12 0 0 0 17-17L91 126l11-11 17.51 17.52a12 12 0 0 0 17-17L119 98l21-21 39 39Z" />
  </Svg>
);
const Memo = memo(SvgSyringeBold);
export default Memo;
