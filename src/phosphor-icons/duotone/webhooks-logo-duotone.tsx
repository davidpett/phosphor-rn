import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWebhooksLogoDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M128 112a40 40 0 1 1 40-40 40 40 0 0 1-40 40Zm64 24a40 40 0 1 0 40 40 40 40 0 0 0-40-40Zm-128 0a40 40 0 1 0 40 40 40 40 0 0 0-40-40Z"
      opacity={0.2}
    />
    <Path d="M178.16 184h-66.84a48 48 0 1 1-85.72-36.81 8 8 0 0 1 12.8 9.61A31.69 31.69 0 0 0 32 176a32 32 0 0 0 64 0 8 8 0 0 1 8-8h74.16a16 16 0 1 1 0 16ZM64 192a16 16 0 0 0 14.08-23.61l35.77-58.14a8 8 0 0 0-2.62-11 32 32 0 1 1 46.1-40.06 8 8 0 1 0 14.67-6.4 48 48 0 1 0-75.62 55.33L64.44 160H64a16 16 0 0 0 0 32Zm128-64a48.18 48.18 0 0 0-18 3.49L142.08 79.6A16 16 0 1 0 128 88h.44l35.78 58.15a8 8 0 0 0 11 2.61A32 32 0 1 1 192 208a8 8 0 0 0 0 16 48 48 0 0 0 0-96Z" />
  </Svg>
);
const Memo = memo(SvgWebhooksLogoDuotone);
export default Memo;
