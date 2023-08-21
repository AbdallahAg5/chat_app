import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Logo, User } from '../assets/Icons';
import profile from '../assets/profile.avif';
import { Header } from '../components/Header';
import { FieldOption } from '../data';
import { GetAuthUser } from '../redux/AuthAsync';
import { RootType } from '../redux/store';
import { CompleteFormType } from '../type';
import Btn from '../uikit/Btn';
import Input from '../uikit/Input';
import Select from '../uikit/Select';

const CompleteProfile = () => {
  const [uploadedImage, setUploadedImage] = useState<null | Blob | MediaSource>(
    null
  );
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
  console.log(userImgValue);

  useEffect(() => {
    if (userImgValue && userImgValue.length > 0) {
      const selectedImage = userImgValue[0];
      setUploadedImage(selectedImage);
    }
    dispatch(GetAuthUser());
  }, [userImgValue]);

  console.log(uploadedImage);

  return (
    <div className="flex justify-center items-center  w-full text-textColor py-20 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-col sm:flex-row flex border-2  h-auto w-[90%] max-w-[1000px] border-b-2 border-blue rounded-lg "
      >
        <Header />
        <div className="flex justify-center flex-col items-center border-b-2 sm:border-r-2 px-12 border-blue text-center py-4 sm:py-28 bg-gray sm:w-[50%] md:w-[40%]">
          <div className="h-[100px] w-[100px]">
            <img
              src={uploadedImage ? URL.createObjectURL(uploadedImage) : profile}
              alt="profile__img"
              draggable="false"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <div className="w-[50%] relative overflow-hidden">
            <Btn
              type="button"
              text={'Upload image'}
              style="bg-blue rounded-[.4em] w-full text-center py-[.3em] text-white mt-[1.8em] hover:bg-softBlue"
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
          <p className="pt-4">
            You can edit your profile picture or upload a new one (JPG , PNG)
          </p>
        </div>
        <div className="flex flex-col items-center h-full pt-4 pb-8 sm:w-[50%] md:w-[60%]">
          <Logo />
          <div className="pt-10 flex flex-wrap justify-center items-center w-[90%] ">
            <Input
              type="text"
              placeholder="First Name"
              style={`w-full pl-[2.5em]   rounded-[.4em] ${
                errors.firstName
                  ? ' border-2 border-error'
                  : 'border-2 border-gray'
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
            <Input
              type="text"
              placeholder="Last Name"
              style={`w-full pl-[2.5em] rounded-[.4em] ${
                errors.lastName
                  ? ' border-2 border-error'
                  : 'border-2 border-gray'
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
            />
            <Input
              type="date"
              style={`w-full pl-[.5em] text-black  rounded-[.4em] ${
                errors.birthDate
                  ? ' border-2 border-error'
                  : 'border-2 border-gray'
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
            <div className="flex gap-3 w-full">
              <Select
                style={`w-full pl-[.5em] w-[150px] text-black rounded-[.4em] h-[40px] border-2 border-gray`}
                name="gender"
                register={register}
                divStyle=""
                label="Gender"
                labelStyle="pt-2"
                defaultValue="Select gender"
                options={[
                  { val: 'male', opt: 'male' },
                  { val: 'female', opt: 'female' },
                ]}
              />
              <Select
                style={`w-full pl-[.5em] text-black rounded-[.4em] h-[40px] border-2 border-gray`}
                name="gender"
                register={register}
                divStyle="w-full"
                label="Interests"
                labelStyle="pt-2"
                defaultValue="Select interests"
                options={[
                  { val: 'male', opt: 'male' },
                  { val: 'female', opt: 'female' },
                ]}
              />
            </div>
            <Btn
              type="submit"
              text={'Confirm'}
              style="bg-blue rounded-[.4em] w-full text-center py-[.3em] text-white mt-[1.8em] hover:bg-softBlue"
            />
          </div>
        </div>
        {/* <GettingStartedExample /> */}
      </form>
    </div>
  );
};

export default CompleteProfile;
