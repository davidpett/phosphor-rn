import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMicrosoftExcelLogo = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 24H72a16 16 0 0 0-16 16v24H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h16v24a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16Zm-40 80h40v48h-40Zm40-16h-40v-8a16 16 0 0 0-16-16V40h56ZM72 40h56v24H72ZM40 80h104v96H40Zm32 112h56v24H72Zm72 24v-24a16 16 0 0 0 16-16v-8h40v48Zm-78.15-69.12L81.59 128l-15.74-18.88a8 8 0 0 1 12.3-10.24L92 115.5l13.85-16.62a8 8 0 1 1 12.3 10.24L102.41 128l15.74 18.88a8 8 0 0 1-12.3 10.24L92 140.5l-13.85 16.62a8 8 0 0 1-12.3-10.24Z" />
  </Svg>
);
const Memo = memo(SvgMicrosoftExcelLogo);
export default Memo;
