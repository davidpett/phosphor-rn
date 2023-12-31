import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextHFiveLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M246 180a34 34 0 0 1-34 34 33.6 33.6 0 0 1-24.29-9.8 6 6 0 0 1 8.58-8.4A21.65 21.65 0 0 0 212 202a22 22 0 0 0 0-44 21.65 21.65 0 0 0-15.71 6.2 6 6 0 0 1-10.21-5.2l8-48a6 6 0 0 1 5.92-5h40a6 6 0 0 1 0 12h-34.92l-5 30a36 36 0 0 1 11.92-2 34 34 0 0 1 34 34ZM144 50a6 6 0 0 0-6 6v54H46V56a6 6 0 0 0-12 0v120a6 6 0 0 0 12 0v-54h92v54a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6Z" />
  </Svg>
);
const Memo = memo(SvgTextHFiveLight);
export default Memo;
