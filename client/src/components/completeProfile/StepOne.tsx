// import { User } from '../../assets/Icons';
// import { FieldOption } from '../../data';
import { Button, useToast } from '@chakra-ui/react';
import { useContext } from 'react';
import profile from '../../assets/profile.avif';
import { StepContext } from '../../context/StepContext';
import { StepPropsType } from '../../type';
import Btn from '../../uikit/Btn';
import Input from '../../uikit/Input';

const StepOne: React.FC<StepPropsType> = ({ uploadedImage, register }) => {
  const setActiveStep = useContext(StepContext)?.setActiveStep;
  const toast = useToast();
  const HandleNext = () => {
    if (!uploadedImage) {
      return toast({
        title: 'No image uploaded.',
        description: 'Please upload an image.',
        status: 'error',
        duration: 3000,
        isClosable: true,

        position: 'top-right',
      });
    } else {
      if (setActiveStep) {
        setActiveStep(2);
      }
    }
  };

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
        <Button
          className=" self-end mt-12"
          colorScheme="whatsapp"
          onClick={() => HandleNext()}
        >
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
