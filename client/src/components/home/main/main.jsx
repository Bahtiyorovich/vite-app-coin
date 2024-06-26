import { AddMentor, AllInformation, MyAccount, UpdateMentor } from '../../';
import { Routes, Route} from 'react-router-dom';

const Main = () => {
  return (
    <div className={"w-full overflow-auto"}>
      <Routes>
        <Route path="/all-information" element={<AllInformation/>}/>
        <Route path="/add-mentor" element={<AddMentor/>}/>
        <Route path="/update-mentor" element={<UpdateMentor/>}/>
        <Route path="/my-account" element={<MyAccount/>}/>
      </Routes>
    </div>
  )
}

export default Main;