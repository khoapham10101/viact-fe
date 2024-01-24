import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  SelectProps,
} from "@mui/material";
import { Controller } from "react-hook-form";

type SelectCustomProps = {
  control?: any;
  name?: string;
  label: string;
} & SelectProps;

const SelectCustom = (props: SelectCustomProps) => {
  const { control, name, label, children, ...rest } = props;

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
            <FormControl fullWidth error={isInvalid}>
              <InputLabel id={`select-${label}`}>{label}</InputLabel>
              <Select
                labelId={`select-${label}`}
                label={label}
                onChange={_onChange}
                {...rest}
              >
                {children}
              </Select>
              <FormHelperText sx={{ marginLeft: "0", marginRight: "0" }}>
                {(errors?.[name]?.message as any) || ""}
              </FormHelperText>
            </FormControl>
          );
        }}
      />
    );
  }

  return (
    <FormControl fullWidth>
      <InputLabel id={`select-${label}`}>{label}</InputLabel>
      <Select labelId={`select-${label}`} label={label} {...rest}>
        {children}
      </Select>
    </FormControl>
  );
};

export default SelectCustom;
