import { useFonts } from '../../../hooks/useFonts';

export function ValueStick() {
  const pFont = useFonts('valueStick', 'p');

  return (
    <div className="w-full h-full flex items-center justify-center value-stick" data-component="valueStick">
      <div className="text-center">
        <div className="text-6xl mb-4">📊</div>
        <p className="text-muted-foreground value-stick" style={pFont.getFontStyle()}>Value Stick Component</p>
      </div>
    </div>
  );
}