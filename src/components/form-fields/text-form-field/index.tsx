"use client";
import { Controller, useFormContext } from "react-hook-form";
import CommonTextFields from "@/components/input-fields/common-text-field";
import { BodyText } from "@/components/text/body-text";
import FieldLabel from "@/components/input-fields/field-label";

const TextFormFields = (props: any) => {
  const { name, onBlurHandler, required = false, label, ...other } = props;

  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        console.log(field);
        return (
          <>
            <CommonTextFields
              {...field}
              id={name}
              label={label}
              value={field?.value || ""}
              onChange={field?.onChange}
              onBlur={() => {
                onBlurHandler?.();
                field?.onBlur?.();
              }}
              required={required}
              error={!!error}
              startIcon={other?.startIcon}
              endIcon={other?.endIcon}
              helperText={
                <BodyText component="span">{error?.message}</BodyText>
              }
              {...other}
            />
          </>
        );
      }}
    />
  );
};

export default TextFormFields;
