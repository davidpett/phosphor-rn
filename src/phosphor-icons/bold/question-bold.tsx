import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgQuestionBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M144 180a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm92-52A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108Zm-24 0a84 84 0 1 0-84 84 84.09 84.09 0 0 0 84-84Zm-84-64c-24.26 0-44 17.94-44 40v4a12 12 0 0 0 24 0v-4c0-8.82 9-16 20-16s20 7.18 20 16-9 16-20 16a12 12 0 0 0-12 12v8a12 12 0 0 0 23.73 2.56C158.31 137.88 172 122.37 172 104c0-22.06-19.74-40-44-40Z" />
  </Svg>
);
const Memo = memo(SvgQuestionBold);
export default Memo;
