import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgQuestionLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M138 180a10 10 0 1 1-10-10 10 10 0 0 1 10 10ZM128 74c-21 0-38 15.25-38 34v4a6 6 0 0 0 12 0v-4c0-12.13 11.66-22 26-22s26 9.87 26 22-11.66 22-26 22a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-2.42c18.11-2.58 32-16.66 32-33.58 0-18.75-17-34-38-34Zm102 54A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102Zm-12 0a90 90 0 1 0-90 90 90.1 90.1 0 0 0 90-90Z" />
  </Svg>
);
const Memo = memo(SvgQuestionLight);
export default Memo;
