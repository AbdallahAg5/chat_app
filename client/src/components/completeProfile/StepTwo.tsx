import { Button } from '@chakra-ui/react';
import { Phone, User } from '../../assets/Icons';
import { FieldOption, PhoneOption, countries } from '../../data';
import { StepPropsType } from '../../type';
import Input from '../uikit/Input';
import Select from '../uikit/Select';

const StepTwo: React.FC<StepPropsType> = ({ register, errors }) => {
  return (
    <div className="flex flex-col items-center w-[90%] mx-auto h-full pt-4 pb-8 ">
      <div className="pt-2 flex  flex-col justify-center items-center w-[100%] ">
        <div className="w-full flex sm:gap-2 flex-col sm:flex-row">
          <Select
            name="gender"
            style={`w-full pl-1  rounded-[.4em] bg-white text-black py-2 ${
              errors?.gender
                ? ' border-2 border-error'
                : 'border-2 border-softBlue '
            } `}
            defaultValue="Select Gender"
            options={[
              { opt: 'Male', val: 'm' },
              { opt: 'Female', val: 'f' },
            ]}
            registredOption={FieldOption}
            label="Select Gender"
            register={register}
            divStyle="w-full"
            labelStyle="pt-2"
          />
          <Select
            name="country"
            style={`w-full pl-1 rounded-[.4em] bg-white text-black py-2 ${
              errors?.country
                ? ' border-2 border-error'
                : 'border-2 border-softBlue '
            } `}
            defaultValue="Select Country"
            options={countries.map((country) => ({
              opt: country,
              val: country,
            }))}
            registredOption={FieldOption}
            label="Select Country"
            register={register}
            divStyle="w-full"
            labelStyle="pt-2"
          />
          {/* <Input
            type="text"
            placeholder="First Name"
            style={`w-full pl-[2.5em]   rounded-[.4em] text-black ${
              errors?.firstName
                ? ' border-2 border-error'
                : 'border-2 border-softBlue '
            } `}
            Icon={<User style="w-5 h-5 absolute top-11 left-2" />}
            altIcon="user__icon"
            name="firstName"
            register={register}
            registredOption={FieldOption}
            error={undefined}
            divStyle="w-full"
            label="First Name*"
            labelStyle="pt-2"
          /> */}
          {/* <Input
            type="text"
            placeholder="First Name"
            style={`w-full pl-[2.5em]   rounded-[.4em] text-black ${
              errors?.firstName
                ? ' border-2 border-error'
                : 'border-2 border-softBlue '
            } `}
            Icon={<User style="w-5 h-5 absolute top-11 left-2" />}
            altIcon="user__icon"
            name="firstName"
            register={register}
            registredOption={FieldOption}
            error={undefined}
            divStyle="w-full"
            label="First Name*"
            labelStyle="pt-2"
          /> */}
          {/* <Input
            type="text"
            placeholder="Last Name"
            style={`w-full pl-[2.5em] rounded-[.4em] text-black ${
              errors?.lastName
                ? ' border-2 border-error'
                : 'border-2 border-softBlue'
            }`}
            Icon={<User style="w-5 h-5 absolute top-11 left-2" />}
            altIcon="user__icon"
            name="lastName"
            register={register}
            registredOption={FieldOption}
            error={undefined}
            divStyle="w-full "
            label="Last Name*"
            labelStyle="pt-2"
          /> */}
        </div>
        <Input
          type="date"
          style={`w-full pl-[.5em] text-black  rounded-[.4em] ${
            errors?.birthDate
              ? ' border-2 border-error'
              : 'border-2 border-softBlue'
          }`}
          Icon={null}
          altIcon=""
          name="birthDate"
          register={register}
          registredOption={FieldOption}
          error={undefined}
          divStyle=" w-full"
          label="Date of Birth"
          labelStyle="pt-2"
        />
        <Input
          type="text"
          placeholder="Phone Number"
          style={`w-full pl-[2.5em] rounded-[.4em] text-black ${
            errors?.phone
              ? ' border-2 border-error'
              : 'border-2 border-softBlue'
          }`}
          Icon={<Phone style="w-5 h-5 absolute top-11 left-2" />}
          altIcon="phone__icon"
          name="phone"
          register={register}
          registredOption={PhoneOption}
          error={errors?.phone}
          divStyle="w-full "
          label="Phone Number*"
          labelStyle="pt-2"
        />
        <Button
          type="submit"
          className=" self-end mt-12"
          colorScheme="whatsapp"
        >
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
