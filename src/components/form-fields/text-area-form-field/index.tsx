"use client";
import { Controller, useFormContext } from "react-hook-form";
import { BodyText } from "@/components/text/body-text";
import FieldLabel from "@/components/input-fields/field-label";
import CommonTextAreaField from "@/components/input-fields/common-text-area=field";

const TextAreaFormFields = (props: any) => {
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
            <CommonTextAreaField
              {...field}
              id={name}
              label={label}
              value={field?.value || ""}
              onChange={field?.onChange}
              onBlur={() => {
                onBlurHandler?.();
                field?.onBlur?.();
              }}
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

export default TextAreaFormFields;
