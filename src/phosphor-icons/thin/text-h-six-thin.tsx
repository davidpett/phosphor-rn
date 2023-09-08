import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextHSixThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M212 148a32.08 32.08 0 0 0-9.75 1.52l21.18-35.47a4 4 0 0 0-6.86-4.1l-32.25 54a.89.89 0 0 0-.08.17A32 32 0 1 0 212 148Zm0 56a24 24 0 1 1 24-24 24 24 0 0 1-24 24ZM148 56v120a4 4 0 0 1-8 0v-56H44v56a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0v56h96V56a4 4 0 0 1 8 0Z" />
  </Svg>
);
const Memo = memo(SvgTextHSixThin);
export default Memo;
