import { useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../components/Header';
import StepOne from '../components/completeProfile/StepOne';
import StepTwo from '../components/completeProfile/StepTwo';
import StepForm from '../components/completeProfile/Steps';
import { StepContext } from '../context/StepContext';
// import useGeoLocation from '../hooks/useGeolocation';
import { RootType } from '../redux/store';
import { CompleteFormType } from '../type';
import StepThree from '../components/completeProfile/StepThree';
import { ToastId, useToast } from '@chakra-ui/react';
import { ImgContext } from '../context/ProfileImgContext';
import { CompleProfileThunk } from '../redux/AuthAsync';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

const CompleteProfile = () => {
  const dispatch: ThunkDispatch<RootType, unknown, AnyAction> = useDispatch();
  const setImg = useContext(ImgContext);
  const activeStepContext = useContext(StepContext)?.activeStep;
  const auth = useSelector((e: RootType) => e.auth);
  const toast = useToast();
  const setActiveStep = useContext(StepContext)?.setActiveStep;
  const {
    watch,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CompleteFormType>();
  const onSubmit: SubmitHandler<CompleteFormType> = (data) => {
    setActiveStep && setActiveStep(3);
    const formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      console.log(key);
      if (key == 'img') {
        formData.append(key, value[0]);
      }
      formData.append(key, value);
    }
    dispatch(CompleProfileThunk(formData));
  };
  const userImgValue = watch('img');
  // const location = useGeoLocation();

  useEffect(() => {
    if (userImgValue && userImgValue.length > 0 && !setImg?.delete) {
      const selectedImage = userImgValue[0];
      setImg?.setUploadedImage(selectedImage);
    } else if (setImg?.delete) {
      setImg.setCroppedImg(null);
      setImg.setUploadedImage(null);
      setImg.setDelete(false);
      reset();
    }
  }, [userImgValue, setImg, reset]);

  useEffect(() => {
    if (auth.message && auth.status == 'success') {
      const toastId: ToastId = toast({
        title: 'Auth message.',
        description: auth.message,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });

      return () => {
        toast.close(toastId);
      };
    }
  }, []);

  return (
    <>
      <div className="w-[97%] xs:w-[90%] md:w-[80%] lg:w-[50%]  px-4  justify-center items-center  mx-auto text-textColor py-20 ">
        <Header />
        <div className="bg-gray-600 py-4 px-4 rounded-lg">
          <div className="bg-customGray py-3 px-3 rounded-lg">
            <StepForm />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-col  mx-auto mt-2  flex border-2  h-auto  border-b-2 border-customBlue rounded-lg "
          >
            {activeStepContext === 0 ? (
              <StepOne register={register} errors={errors} />
            ) : activeStepContext === 2 ? (
              <StepTwo register={register} errors={errors} />
            ) : (
              <StepThree />
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default CompleteProfile;
