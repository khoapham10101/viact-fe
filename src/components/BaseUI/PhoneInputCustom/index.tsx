import { MuiTelInput, MuiTelInputProps } from "mui-tel-input";
import { Controller } from "react-hook-form";

type PhoneInputCustomProps = {
  control?: any;
  name?: string;
} & MuiTelInputProps;

const PhoneInputCustom = (props: PhoneInputCustomProps) => {
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
            <MuiTelInput
              onChange={_onChange}
              value={value}
              error={isInvalid}
              helperText={(errors?.[name]?.message as any) || ""}
              FormHelperTextProps={{
                style: { marginLeft: "0", marginRight: "0" },
              }}
              defaultCountry="VN"
              {...(rest as any)}
            />
          );
        }}
      />
    );
  }

  return <MuiTelInput defaultCountry="VN" {...(rest as any)} />;
};

export default PhoneInputCustom;
