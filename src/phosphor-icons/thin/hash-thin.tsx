import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHashThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 92h-53.39l9.33-51.28a4 4 0 1 0-7.88-1.44L162.48 92h-55.87l9.33-51.28a4 4 0 1 0-7.88-1.44L98.48 92H48a4 4 0 0 0 0 8h49l-10.16 56H32a4 4 0 0 0 0 8h53.39l-9.33 51.28a4 4 0 0 0 3.22 4.65 3.65 3.65 0 0 0 .72.07 4 4 0 0 0 3.94-3.29L93.52 164h55.87l-9.33 51.28a4 4 0 0 0 3.22 4.65 3.65 3.65 0 0 0 .72.07 4 4 0 0 0 3.94-3.29l9.58-52.71H208a4 4 0 0 0 0-8h-49l10.19-56H224a4 4 0 0 0 0-8Zm-73.16 64H95l10.19-56H161Z" />
  </Svg>
);
const Memo = memo(SvgHashThin);
export default Memo;
