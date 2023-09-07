import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWebhooksLogoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m50.15 168 38.92-67.43-2.24-3.88a48 48 0 1 1 85.05-44.17 8.17 8.17 0 0 1-3.19 10.4 8 8 0 0 1-11.35-3.72 32 32 0 1 0-56.77 29.3.57.57 0 0 1 .08.13l13.83 23.94a8 8 0 0 1 0 8L77.86 184a16 16 0 0 1-27.71-16Zm141-40h-12.34l-36.95-64a16 16 0 0 0-27.71 16l34.64 60a8 8 0 0 0 6.92 4h35.63c17.89 0 32.95 14.64 32.66 32.53A32 32 0 0 1 192.31 208a8.23 8.23 0 0 0-8.28 7.33 8 8 0 0 0 8 8.67 48.05 48.05 0 0 0 48-48.93c-.54-26.28-22.55-47.07-48.84-47.07ZM208 175.23c-.4-8.61-7.82-15.23-16.43-15.23h-76.76a8 8 0 0 0-6.93 4l-16.16 28a32 32 0 1 1-53.47-35 8.2 8.2 0 0 0-.92-11 8 8 0 0 0-11.72 1.17A47.63 47.63 0 0 0 16 175.54 48 48 0 0 0 105.55 200l4.62-8H192a16 16 0 0 0 16-16.77Z" />
  </Svg>
);
const Memo = memo(SvgWebhooksLogoFill);
export default Memo;
