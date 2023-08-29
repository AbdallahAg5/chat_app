import { useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
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

const CompleteProfile = () => {
  const setImg = useContext(ImgContext);
  const activeStepContext = useContext(StepContext)?.activeStep;
  const auth = useSelector((e: RootType) => e.auth);
  const toast = useToast();
  const setActiveStep = useContext(StepContext)?.setActiveStep;
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompleteFormType>();
  const onSubmit: SubmitHandler<CompleteFormType> = (data) => {
    setActiveStep && setActiveStep(3);
    console.log(data);
  };
  const userImgValue = watch('userImg');
  // const location = useGeoLocation();

  useEffect(() => {
    if (userImgValue && userImgValue.length > 0 && !setImg?.croppedImg) {
      const selectedImage = userImgValue[0];
      setImg?.setUploadedImage(selectedImage);
    }
  }, [userImgValue, setImg]);

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
