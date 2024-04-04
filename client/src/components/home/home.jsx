import {Main, Navbar, Saidbar} from '../';
import { useTheme } from './../../helpers/dark-mode';

const HomePage = () => {

  const {darkMode} = useTheme();

  return (
    <div className={darkMode 
      ? "grid grid-cols-5 grid-rows-6 gap-4 bg-neutral-200 h-screen p-6" 
      : "grid grid-cols-5 grid-rows-6 gap-4 bg-slate-800 h-screen p-6"}>
      <Saidbar/>
      <Navbar/>
      <Main/>
    </div>
  )
}

export default HomePage;