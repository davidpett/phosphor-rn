import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTrainLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 26H72a30 30 0 0 0-30 30v128a30 30 0 0 0 30 30h12l-16.8 22.4a6 6 0 1 0 9.6 7.2L99 214h58l22.2 29.6a6 6 0 0 0 9.6-7.2L172 214h12a30 30 0 0 0 30-30V56a30 30 0 0 0-30-30ZM54 122V78h68v44Zm80-44h68v44h-68ZM72 38h112a18 18 0 0 1 18 18v10H54V56a18 18 0 0 1 18-18Zm112 164H72a18 18 0 0 1-18-18v-50h148v50a18 18 0 0 1-18 18Zm-2-30a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm-88 0a10 10 0 1 1-10-10 10 10 0 0 1 10 10Z" />
  </Svg>
);
const Memo = memo(SvgTrainLight);
export default Memo;
