import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRepeatOnceThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M28 128a68.07 68.07 0 0 1 68-68h118.34l-17.17-17.17a4 4 0 0 1 5.66-5.66l24 24a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66-5.66L214.34 68H96a60.07 60.07 0 0 0-60 60 4 4 0 0 1-8 0Zm196-4a4 4 0 0 0-4 4 60.07 60.07 0 0 1-60 60H41.66l17.17-17.17a4 4 0 0 0-5.66-5.66l-24 24a4 4 0 0 0 0 5.66l24 24a4 4 0 1 0 5.66-5.66L41.66 196H160a68.07 68.07 0 0 0 68-68 4 4 0 0 0-4-4Zm-88 32a4 4 0 0 0 4-4v-48a4 4 0 0 0-5.79-3.58l-16 8a4 4 0 0 0 3.58 7.16l10.21-5.1V152a4 4 0 0 0 4 4Z" />
  </Svg>
);
const Memo = memo(SvgRepeatOnceThin);
export default Memo;
