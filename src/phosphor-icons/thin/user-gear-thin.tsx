import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUserGearThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M133.17 158.84a64 64 0 1 0-50.34 0c-23.76 5.46-45.18 18.69-61.89 38.59a4 4 0 1 0 6.12 5.14C48 177.7 76.7 164 108 164s60 13.7 80.94 38.57a4 4 0 0 0 6.12-5.14c-16.71-19.9-38.13-33.13-61.89-38.59ZM52 100a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Zm190.25 46.54-7.25-4.21a19.78 19.78 0 0 0 0-12.66l7.29-4.21a4 4 0 0 0-4-6.92l-7.31 4.21A20 20 0 0 0 220 116.4V108a4 4 0 0 0-8 0v8.4a20 20 0 0 0-10.94 6.35l-7.31-4.21a4 4 0 1 0-4 6.92l7.29 4.21a19.78 19.78 0 0 0 0 12.66l-7.29 4.21a4 4 0 0 0 2 7.46 3.92 3.92 0 0 0 2-.54l7.31-4.21A20 20 0 0 0 212 155.6v8.4a4 4 0 0 0 8 0v-8.4a20 20 0 0 0 10.94-6.35l7.31 4.21a3.92 3.92 0 0 0 2 .54 4 4 0 0 0 2-7.46ZM216 148a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgUserGearThin);
export default Memo;
