import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgThermometerHotDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M152 138V48a32 32 0 0 0-64 0v90a56 56 0 1 0 64 0Zm-32 70a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z"
      opacity={0.2}
    />
    <Path d="M177.41 80.54a8 8 0 0 1 2.05-11.12c10.4-7.18 26.68-7.18 37.08 0 5 3.47 13.88 3.47 18.92 0a8 8 0 0 1 9.08 13.16 34.64 34.64 0 0 1-37.08 0c-5-3.47-13.88-3.47-18.92 0a8 8 0 0 1-11.13-2.04Zm58.05 20.88c-5 3.47-13.88 3.47-18.92 0-10.4-7.18-26.68-7.18-37.08 0a8 8 0 1 0 9.08 13.16c5-3.47 13.88-3.47 18.92 0a34.64 34.64 0 0 0 37.08 0 8 8 0 0 0-9.08-13.16ZM152 184a32 32 0 1 1-40-31V48a8 8 0 0 1 16 0v105a32.06 32.06 0 0 1 24 31Zm-16 0a16 16 0 1 0-16 16 16 16 0 0 0 16-16Zm48 0a64 64 0 1 1-104-50V48a40 40 0 0 1 80 0v86a64.08 64.08 0 0 1 24 50Zm-16 0a48.08 48.08 0 0 0-20.58-39.4A8 8 0 0 1 144 138V48a24 24 0 0 0-48 0v90a8 8 0 0 1-3.42 6.56A48 48 0 1 0 168 184Z" />
  </Svg>
);
const Memo = memo(SvgThermometerHotDuotone);
export default Memo;
