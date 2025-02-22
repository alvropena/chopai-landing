"use client";
import { Card } from "@/components/ui/card";
import { ColorSwatch, colorPalettes } from "@/constants/colors";

const ColorCard = ({ color }: { color: ColorSwatch }) => {
    return (
      <Card className="p-2.5 space-y-2">
        <div 
          className="w-full h-20 rounded-md" 
          style={{ backgroundColor: color.hex }}
        />
        <div className="space-y-1">
          <p className="font-medium text-sm">{color.name}</p>
          <p className="text-xs text-gray-500">{color.hex}</p>
          <p className="text-xs text-gray-500">{color.rgb}</p>
          <p className="text-xs text-gray-500">{color.hsl}</p>
        </div>
      </Card>
    );
  };

export default function ColorsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:max-w-[1400px]">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-nav">Colors</h1>
        {colorPalettes.map((palette) => (
          <div key={palette.name} className="space-y-4">
            <h2 className="text-xl font-semibold">{palette.name}</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-3">
              {palette.colors.map((color) => (
                <ColorCard 
                  key={`${palette.name}-${color.name}-${color.hex}`} 
                  color={color} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}