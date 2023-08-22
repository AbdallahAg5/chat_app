// import { User } from '../../assets/Icons';
// import { FieldOption } from '../../data';
import { useContext } from 'react';
import profile from '../../assets/profile.avif';
import { StepPropsType } from '../../type';
import Btn from '../../uikit/Btn';
import Input from '../../uikit/Input';
import { Button } from '@chakra-ui/react';
import { StepContext } from '../../context/StepContext';

const StepOne: React.FC<StepPropsType> = ({ uploadedImage, register }) => {
  const setActiveStep = useContext(StepContext)?.setActiveStep;
  return (
    <div className="flex flex-col items-center h-full pt-4 pb-8 mx-auto">
      <div className="pt-10 flex flex-col  flex-wrap justify-center items-center w-[90%] ">
        <div className="mx-auto">
          <img
            src={uploadedImage ? URL.createObjectURL(uploadedImage) : profile}
            alt="profile__img"
            draggable="false"
            className=" h-40 rounded-full w-40 object-cover"
          />
        </div>

        <div className="w-[50%] relative overflow-hidden">
          <Btn
            type="button"
            text={'Upload image'}
            style=" bg-customBlue rounded-[.4em] w-full text-center py-[.3em] text-white mt-[1.8em] hover:bg-softBlue"
          />
          <Input
            type="file"
            name="userImg"
            label=""
            register={register}
            error={undefined}
            divStyle=""
            style="absolute -top-[40px] -left-[50px] opacity-0 "
            labelStyle=""
          />
        </div>
        <p className="pt-4 w-[70%] mx-auto text-center">
          You can edit your profile picture or upload a new one (JPG , PNG)
        </p>

        {/* <Input
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
        /> */}
        <Button
          className=" self-end mt-12"
          colorScheme="whatsapp"
          onClick={() => setActiveStep(2)}
        >
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
