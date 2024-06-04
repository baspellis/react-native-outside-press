/// <reference types="react" />
import type { ViewProps } from 'react-native';
interface IOutsidePressHandlerProps extends ViewProps {
    onOutsidePress: () => void;
    disabled?: boolean;
}
export default function OutsidePressHandler(props: IOutsidePressHandlerProps): JSX.Element;
export {};
//# sourceMappingURL=outside-press-handler.d.ts.map