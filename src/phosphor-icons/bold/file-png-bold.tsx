import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFilePngBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M56 140H40a12 12 0 0 0-12 12v56a12 12 0 0 0 24 0v-4h4a32 32 0 0 0 0-64Zm0 40h-4v-16h4a8 8 0 0 1 0 16Zm176 20.87a12 12 0 0 1-3.33 8.3A34 34 0 0 1 204 220c-19.85 0-36-17.95-36-40s16.15-40 36-40a33.39 33.39 0 0 1 18.71 5.8 12 12 0 1 1-13.42 19.89A9.39 9.39 0 0 0 204 164c-6.5 0-12 7.33-12 16s5.5 16 12 16a9 9 0 0 0 2.7-.42A12 12 0 0 1 216 176h4a12 12 0 0 1 12 12ZM160 152v56a12 12 0 0 1-8.34 11.43 12.15 12.15 0 0 1-3.66.57 12 12 0 0 1-9.76-5L120 189.44V208a12 12 0 0 1-24 0v-56a12 12 0 0 1 21.76-7L136 170.55V152a12 12 0 0 1 24 0ZM48 120a12 12 0 0 0 12-12V44h76v48a12 12 0 0 0 12 12h48v4a12 12 0 0 0 24 0V88a12 12 0 0 0-3.51-8.49l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 12 12Zm112-63 23 23h-23Z" />
  </Svg>
);
const Memo = memo(SvgFilePngBold);
export default Memo;
