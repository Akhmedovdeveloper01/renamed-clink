"use client";

import { forwardRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function formatGroups(digits: string) {
  const parts = [
    digits.slice(0, 2),
    digits.slice(2, 5),
    digits.slice(5, 7),
    digits.slice(7, 9),
  ].filter(Boolean);
  return parts.join(" ");
}

type PhoneInputProps = {
  value: string; // normalized "998XXXXXXXXX" or ""
  onChange: (normalized: string) => void;
  onBlur?: () => void;
  id?: string;
  placeholder?: string;
  className?: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
};

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  function PhoneInput(
    { value, onChange, onBlur, className, ...rest },
    ref
  ) {
    const [display, setDisplay] = useState(() =>
      value ? `+998 ${formatGroups(value.slice(3))}` : "+998 "
    );

    useEffect(() => {
      setDisplay(value ? `+998 ${formatGroups(value.slice(3))}` : "+998 ");
    }, [value]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      let raw = e.target.value.replace(/\D/g, "");
      if (raw.startsWith("998")) raw = raw.slice(3);
      raw = raw.slice(0, 9);
      setDisplay(`+998 ${formatGroups(raw)}`.trimEnd() + (raw.length ? "" : " "));
      onChange(raw ? `998${raw}` : "");
    }

    return (
      <input
        ref={ref}
        type="tel"
        inputMode="numeric"
        autoComplete="tel"
        value={display}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={(e) => {
          if (e.target.value === "") setDisplay("+998 ");
        }}
        className={cn(
          "w-full rounded-xl border border-border-strong bg-bg-elevated px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted focus-visible:border-brand",
          className
        )}
        {...rest}
      />
    );
  }
);
