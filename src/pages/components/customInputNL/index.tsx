interface CustomInputProps {
    value?: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    name?: string;
    maxLength?: number;
    as?: "input" | "textarea";
    rows?: number; // só pra textarea
  }
  
  export default function CustomInput({
    value,
    placeholder = "Digite aqui",
    onChange,
    name,
    maxLength = 40,
    as = "input",
    rows = 3,
  }: CustomInputProps) {
    const commonProps = {
      name,
      value,
      onChange,
      placeholder,
      maxLength,
      className:
        "w-full bg-transparent text-zinc-500 text-base font-normal font-gopher leading-normal tracking-tight focus:outline-none text-center resize-none",
    };
  
    return (
      <div
        data-size="Desktop"
        data-status="Default"
        className="w-96 min-h-14 p-4 bg-orange-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 inline-flex justify-center items-center gap-2.5 overflow-hidden"
      >
        {as === "textarea" ? (
          <textarea {...commonProps} rows={rows} />
        ) : (
          <input type="text" {...commonProps} />
        )}
      </div>
    );
  }