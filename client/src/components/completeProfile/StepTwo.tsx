import { Button } from '@chakra-ui/react';
import { User } from '../../assets/Icons';
import { FieldOption } from '../../data';
import Input from '../../uikit/Input';
import { StepPropsType } from '../../type';

const StepTwo: React.FC<StepPropsType> = ({ register, errors }) => {
  return (
    <div className="flex flex-col items-center h-full pt-4 pb-8 mx-auto">
      <div className="pt-10 flex flex-col  flex-wrap justify-center items-center w-[90%] ">
        <Input
          type="text"
          placeholder="First Name"
          style={`w-full pl-[2.5em]   rounded-[.4em] ${
            errors.firstName ? ' border-2 border-error' : 'border-2 border-gray'
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
        />
        <Button className=" self-end mt-12" colorScheme="whatsapp">
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
