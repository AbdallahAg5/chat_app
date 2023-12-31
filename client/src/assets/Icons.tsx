import { motion } from 'framer-motion';
import { FormIconPropType, ThemePropsType } from '../type';

export const EmailIcon: React.FC<FormIconPropType> = ({ style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={style + ' stroke-black'}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
};

export const Password: React.FC<FormIconPropType> = ({ style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={style + ' stroke-black'}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  );
};

export const Dark: React.FC<ThemePropsType> = ({ setTheme }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill=""
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 cursor-pointer fill-textColor"
    onClick={() => setTheme('dark')}
  >
    <path
      className="text-textColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
    />
  </svg>
);

export const Light: React.FC<ThemePropsType> = ({ setTheme }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill=""
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 cursor-pointer fill-textColor"
    onClick={() => setTheme('light')}
  >
    <path
      className="text-textColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
    />
  </svg>
);

export const User: React.FC<FormIconPropType> = ({ style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke=""
      className={style + ' stroke-black group-hover/items:stroke-white'}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
};

export const Logo: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="58"
    height="58"
    viewBox="0 0 228 228"
    fill="none"
    className=""
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M112.871 0.4104L116.233 3.1464C149.513 30.2149 191.883 31.0275 194.684 31.0487H194.828L200.112 31.0161L195.419 118.369C193.075 163.621 119.352 220.668 116.215 223.075L113.173 225.409L110.127 223.08C106.935 220.641 31.9885 162.821 29.9968 119.286L26.2771 30.9298L31.5862 31.0503C32.0357 31.0341 78.9516 31.7018 109.684 3.34834L112.871 0.412029V0.4104ZM115.749 36.8871L77.038 56.4137C76.8589 58.8712 76.6488 64.9393 76.5104 70.8152L99.0629 79.7821L118.598 64.5647L120.161 66.1184C120.371 66.3285 125.317 71.3217 124.851 77.3767C124.591 80.7511 122.778 83.6874 119.464 86.1075L59.5846 129.406C59.0912 129.712 50.5054 135.149 48.1879 143.099C54.6208 154.493 64.726 167.344 78.2823 181.258C78.963 181.959 79.6405 182.643 80.3229 183.327C87.0782 186.812 94.4735 186.95 103.082 183.882C113.411 180.206 143.086 157.69 143.386 157.462L145.362 155.96L148.391 159.877L146.417 161.38C145.171 162.325 115.816 184.595 104.764 188.528C100.191 190.157 95.835 190.974 91.687 190.974C90.4179 190.975 89.1499 190.895 87.8908 190.735C96.0115 198.448 104.442 205.828 113.161 212.858C119.194 207.988 133.323 196.181 147.443 181.464C164.414 163.777 175.928 147.62 181.548 133.807C180.105 129.178 176.43 124.913 171.523 122.464C167.795 120.602 160.178 118.295 151.073 123.736L109.955 152.099C105.618 154.849 99.2876 158.867 92.3955 158.867C86.6466 158.869 80.5085 156.076 74.8053 147.431L73.548 145.524L75.3606 144.129C75.6749 143.888 106.873 119.912 133.3 101.786C134.023 101.287 134.86 100.655 135.722 100.006C137.129 98.9471 138.585 97.8495 139.837 97.0971C145.357 93.7911 149.218 87.4803 150.171 80.2202C151.278 71.7663 148.371 63.4899 141.985 56.9039C129.462 46.1912 119.137 39.1313 115.749 36.8888V36.8871ZM113.262 13.4031C85.8942 36.4425 50.0656 40.2339 36.6592 40.825L39.9457 118.856C40.1981 124.374 42.0091 130.61 45.2548 137.432C48.2351 131.888 53.1811 127.558 56.8763 125.263L116.521 82.1256C118.637 80.5834 119.741 78.9027 119.886 77.0021C120.052 74.8345 118.961 72.719 117.997 71.3103L99.8804 85.4251L85.9984 79.9059L86.0506 80.0296L83.7461 80.9661C76.8052 83.7916 72.908 85.829 73.5659 94.8692L73.7451 97.3299L68.7812 97.6882L68.6004 95.2258C68.392 92.3758 68.6265 90.0177 69.1525 88.0113L60.4331 87.8973L60.4983 82.9611L71.4716 83.1028C73.6066 80.2756 76.6211 78.6372 79.5754 77.3539L71.4586 74.1244L71.4944 72.4193C71.5986 67.5173 71.8852 55.9349 72.3087 54.2217L72.5823 53.124L116.049 31.1985L117.249 31.9575C117.751 32.275 129.724 39.8886 145.326 53.2413L145.487 53.3927C153.001 61.0942 156.416 70.8477 155.105 80.8553C153.962 89.5926 149.218 97.2453 142.415 101.32C141.388 101.936 140.038 102.952 138.735 103.937C137.811 104.632 136.911 105.308 136.134 105.842C113.529 121.348 87.4007 141.166 80.2838 146.597C88.9299 158.168 97.2812 154.284 107.193 147.992L148.368 119.599C156.646 114.64 165.852 114.111 173.761 118.055C177.975 120.158 181.486 123.374 183.866 127.107C184.771 123.866 185.323 120.772 185.475 117.856L189.62 40.7322C176.713 39.9179 142.702 35.6429 113.262 13.4031ZM99.5628 53.7429L94.9702 66.7714L78.3914 62.8645L99.5628 53.7429Z"
      fill=""
      className=" fill-textColor"
    />
  </svg>
);

export const Phone: React.FC<FormIconPropType> = ({ style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={style + ' stroke-black'}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </svg>
);

export const Xmark: React.FC<{ style: string; onClick: () => void }> = ({
  style,
  onClick,
}) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    className={style}
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </motion.svg>
);

export const Add: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 cursor-pointer"
    whileHover={{ scale: 1.1 }}
    onClick={onClick}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </motion.svg>
);

export const Search = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
);

export const Arrow: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="group ">
    {children}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  </div>
);

export const Logout = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    className="w-6 h-6 stroke-error"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
    />
  </svg>
);

export const BackArrow: React.FC<{
  setSwitchSideBar: ((switchSideBar: boolean) => void) | undefined;
}> = ({ setSwitchSideBar }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 cursor-pointer"
    whileHover={{ scale: 1.1 }}
    onClick={() => setSwitchSideBar && setSwitchSideBar(false)}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </motion.svg>
);

export const Send = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
    />
  </svg>
);

export const EmojiesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 absolute top-7 right-20 md:right-28 cursor-pointer peer z-30"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
    />
  </svg>
);

export const Bars: React.FC<{
  onClick: () => void;
  open: boolean | undefined;
}> = ({ onClick, open }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={` w-6 h-6 cursor-pointer ${open ? ' ml-4 lg:hidden' : null} `}
    whileHover={{ scale: 1.1 }}
    onClick={onClick}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </motion.svg>
);
