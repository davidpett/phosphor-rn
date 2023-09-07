import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBackspaceThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 44H68.53a12.06 12.06 0 0 0-10.29 5.83l-45.67 76.11a4 4 0 0 0 0 4.12l45.67 76.11A12.06 12.06 0 0 0 68.53 212H216a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12Zm4 156a4 4 0 0 1-4 4H68.53a4 4 0 0 1-3.43-1.94L20.67 128 65.1 53.94A4 4 0 0 1 68.53 52H216a4 4 0 0 1 4 4Zm-57.17-93.17L141.66 128l21.17 21.17a4 4 0 0 1-5.66 5.66L136 133.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L130.34 128l-21.17-21.17a4 4 0 0 1 5.66-5.66L136 122.34l21.17-21.17a4 4 0 1 1 5.66 5.66Z" />
  </Svg>
);
const Memo = memo(SvgBackspaceThin);
export default Memo;
