import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useContext, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Header } from '../components/Header';
import StepOne from '../components/completeProfile/StepOne';
import StepTwo from '../components/completeProfile/StepTwo';
import StepForm from '../components/completeProfile/Steps';
import StepProvider, { StepContext } from '../context/StepContext';
import useGeoLocation from '../hooks/useGeolocation';
import { GetAuthUser } from '../redux/AuthAsync';
import { RootType } from '../redux/store';
import { CompleteFormType } from '../type';

const CompleteProfile = () => {
  const [uploadedImage, setUploadedImage] = useState<null | Blob | MediaSource>(
    null
  );
  const activeStepContext = useContext(StepContext)?.activeStep;
  console.log(activeStepContext);
  const dispatch: ThunkDispatch<RootType, unknown, AnyAction> = useDispatch();
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompleteFormType>({ mode: 'onChange' });
  const onSubmit: SubmitHandler<CompleteFormType> = (data) => {
    console.log(data);
  };
  const userImgValue = watch('userImg');
  const location = useGeoLocation();
  console.log(location);

  useEffect(() => {
    if (userImgValue && userImgValue.length > 0) {
      const selectedImage = userImgValue[0];
      setUploadedImage(selectedImage);
    }
    dispatch(GetAuthUser());
  }, [userImgValue, dispatch]);

  return (
    <>
      <div className="w-[97%] xs:w-[90%] md:w-[50%]  px-4  justify-center items-center  mx-auto text-textColor py-20 ">
        <Header />
        <div className="bg-gray-600 py-4 px-4 rounded-lg">
          <div className="bg-customGray py-3 px-3 rounded-lg">
            <StepForm />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-col mx-auto mt-2 sm:flex-row flex border-2  h-auto  border-b-2 border-customBlue rounded-lg "
          >
            {activeStepContext === 0 ? (
              <StepOne
                uploadedImage={uploadedImage}
                register={register}
                errors={errors}
              />
            ) : activeStepContext === 2 ? (
              <StepTwo register={register} errors={errors} />
            ) : null}
          </form>
        </div>
      </div>
    </>
  );
};

export default CompleteProfile;
