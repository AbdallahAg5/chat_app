// import { User } from '../../assets/Icons';
// import { FieldOption } from '../../data';
import { Button, useToast } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import profile from '../../assets/profile.png';
import { ImgContext } from '../../context/ProfileImgContext';
import { StepContext } from '../../context/StepContext';
import { StepPropsType } from '../../type';
import { ImgCropper } from '../Crop';
import Btn from '../uikit/Btn';
import Input from '../uikit/Input';

const StepOne: React.FC<StepPropsType> = ({ register }) => {
  const { uploadedImage, croppedImg, setDelete } = useContext(ImgContext) ?? {};
  const setActiveStep = useContext(StepContext)?.setActiveStep;
  const [showCropper, setShowCropper] = useState<boolean>(false);
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

  const HandleCropper = () => {
    setShowCropper(!showCropper);
  };

  return (
    <div className="flex flex-col items-center h-full pt-4 pb-8 mx-auto">
      <div className="pt-10 flex flex-col  flex-wrap justify-center items-center w-[90%] ">
        {showCropper && <ImgCropper HandleCropper={HandleCropper} />}
        <div className="mx-auto  ">
          <img
            onClick={uploadedImage ? HandleCropper : undefined}
            src={
              croppedImg
                ? croppedImg
                : uploadedImage
                ? URL.createObjectURL(uploadedImage)
                : profile
            }
            alt="profile__img"
            draggable="false"
            className=" h-40 rounded-full w-40 object-cover cursor-pointer border-white"
            style={{ border: '2px solid ' }}
          />
        </div>

        <div className="w-[50%] relative overflow-hidden group">
          <Btn
            type="button"
            text={croppedImg || uploadedImage ? 'Remove image' : 'Upload image'}
            style={`${
              croppedImg || uploadedImage
                ? 'bg-error group-hover:bg-softError'
                : 'bg-customBlue group-hover:bg-softBlue'
            } rounded-[.4em] w-full text-center py-[.3em] text-white mt-[1.8em]  cursor-pointer`}
            onClick={uploadedImage ? () => setDelete(true) : undefined}
          />
          {!uploadedImage && (
            <Input
              type="file"
              name="img"
              label=""
              register={register}
              error={undefined}
              divStyle=""
              style="absolute -top-[40px] -left-[50px] opacity-0 cursor-pointer "
              labelStyle=""
            />
          )}
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
