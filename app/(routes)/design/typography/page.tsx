"use client";
import { FontStyle, fontStyles } from "@/constants/typography";

const TypographyRow = ({ style }: { style: FontStyle }) => {
  return (
    <tr className="border-b">
      <td className="py-4 px-4" style={{ fontSize: style.size, fontWeight: style.weight }}>
        {style.name}
      </td>
      <td className="py-4 px-4 text-gray-600">{style.weight}</td>
      <td className="py-4 px-4 text-gray-600">{style.size}</td>
    </tr>
  );
};

export default function TypographyPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:max-w-[1400px]">
      <div className="space-y-12">
        <h1 className="text-4xl font-bold text-nav">Typography</h1>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Titles</h2>
          <div className="overflow-hidden border rounded-lg">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-4 px-4 text-left">Preview</th>
                  <th className="py-4 px-4 text-left">Weight</th>
                  <th className="py-4 px-4 text-left">Size</th>
                </tr>
              </thead>
              <tbody>
                {fontStyles
                  .filter((style) => style.name.startsWith('Title'))
                  .map((style) => (
                    <TypographyRow key={style.name} style={style} />
                  ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Subtitles</h2>
          <div className="overflow-hidden border rounded-lg">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-4 px-4 text-left">Preview</th>
                  <th className="py-4 px-4 text-left">Weight</th>
                  <th className="py-4 px-4 text-left">Size</th>
                </tr>
              </thead>
              <tbody>
                {fontStyles
                  .filter((style) => style.name.startsWith('Subtitle'))
                  .map((style) => (
                    <TypographyRow key={style.name} style={style} />
                  ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Body Text</h2>
          <div className="overflow-hidden border rounded-lg">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-4 px-4 text-left">Preview</th>
                  <th className="py-4 px-4 text-left">Weight</th>
                  <th className="py-4 px-4 text-left">Size</th>
                </tr>
              </thead>
              <tbody>
                {fontStyles
                  .filter((style) => style.name.startsWith('Body'))
                  .map((style) => (
                    <TypographyRow key={style.name} style={style} />
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
