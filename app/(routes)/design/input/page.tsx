"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const InputVariant = ({ title, label = "Email", hint, error }: { 
    title: string;
    label?: string;
    hint?: string;
    error?: string;
  }) => {
    return (
      <div className="space-y-2">
        <h3 className="text-lg text-gray-600">{title}</h3>
        <div className="space-y-1.5">
          <label className="text-sm text-gray-600">{label}</label>
          <Input 
            placeholder="Enter your email"
            className={cn(
              error && "border-red-300 focus-visible:ring-red-300",
              hint && "mb-1"
            )}
          />
          {hint && <p className="text-sm text-gray-500">{hint}</p>}
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
      </div>
    );
  };

export default function InputPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:max-w-[1400px]">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-nav">Text Fields</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InputVariant title="Default" />
          <InputVariant 
            title="Default with hint text" 
            hint="This is a hint text to help user."
          />
          <InputVariant 
            title="Destructive" 
            error="This is an error message."
          />
          <InputVariant title="Placeholder" />
          <InputVariant title="Filled" />
          <InputVariant title="Focused" />
          <InputVariant title="Disabled" />
        </div>
      </div>
    </div>
  );
}