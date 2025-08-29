import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFonts } from '../../../hooks/useFonts';
export function ValueStick() {
    const pFont = useFonts('valueStick', 'p');
    return (_jsx("div", { className: "w-full h-full flex items-center justify-center value-stick", "data-component": "valueStick", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-6xl mb-4", children: "\uD83D\uDCCA" }), _jsx("p", { className: "text-muted-foreground value-stick", style: pFont.getFontStyle(), children: "Value Stick Component" })] }) }));
}
