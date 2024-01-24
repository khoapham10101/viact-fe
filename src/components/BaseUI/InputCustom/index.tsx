import { TextField, TextFieldProps } from "@mui/material";
import { Controller } from "react-hook-form";

type InputCustomProps = {
  control?: any;
  name?: string;
} & TextFieldProps;

const InputCustom = (props: InputCustomProps) => {
  const { control, name, ...rest } = props;

  if (control && name) {
    return (
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange: _onChange, value },
          formState: { errors },
        }) => {
          const isInvalid = !!errors[name];
          return (
            <TextField
              onChange={_onChange}
              value={value}
              error={isInvalid}
              helperText={(errors?.[name]?.message as any) || ""}
              FormHelperTextProps={{
                style: { marginLeft: "0", marginRight: "0" },
              }}
              {...rest}
            />
          );
        }}
      />
    );
  }

  return (
    <TextField
      FormHelperTextProps={{
        style: { marginLeft: "0", marginRight: "0" },
      }}
      {...rest}
    />
  );
};

export default InputCustom;
