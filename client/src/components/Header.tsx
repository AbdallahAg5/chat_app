import { Dark, Light } from '../assets/Icons';
import useTheme from '../hooks/useTheme';

export const Header: React.FC = () => {
  const { changeTheme, theme } = useTheme(
    localStorage.getItem('theme') || 'light'
  );
  return (
    <nav className="h-[4em]   flex justify-between top-0 right-0  items-center px-8 rounded-xl absolute">
      {theme != 'dark' ? (
        <Dark setTheme={changeTheme} />
      ) : (
        <Light setTheme={changeTheme} />
      )}
    </nav>
  );
};
