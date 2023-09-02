import React, { ReactNode, createContext, useState, useEffect } from 'react';

type ImgContextType = {
  croppedImg: string | null | undefined;
  setCroppedImg: (croppedImg: string | Blob | null) => void;
  setUploadedImage: (uploadedImage: string | Blob | null) => void;
  uploadedImage: string | Blob | MediaSource | null | undefined;
  delete: boolean;
  setDelete: (del: boolean) => void;
};

export const ImgContext = createContext<ImgContextType | null>(null);

const ImageContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [croppedImg, setCroppedImg] = useState<string | null>();
  const [uploadedImage, setUploadedImage] = useState<
    null | Blob | MediaSource | undefined | string
  >(null);
  const [del, setDelete] = useState<boolean>(false);

  return (
    <ImgContext.Provider
      value={{
        croppedImg: croppedImg,
        setCroppedImg: setCroppedImg,
        setUploadedImage: setUploadedImage,
        uploadedImage: uploadedImage,
        delete: del,
        setDelete: setDelete,
      }}
    >
      {children}
    </ImgContext.Provider>
  );
};

export default ImageContextProvider;
