import './App.css';
import photo from './assets/photo.jpg'
import { Signup } from './components/Signup';

function App() {
  return (
    <div className="bg-gradient-to-r from-[#1C2147] to-[#AC3636] min-h-screen flex items-center justify-center">
      <div className="bg-[#17192A] flex  rounded-2xl shadow-lg max-w-5xl p-5 sm:h-5/6">
        <div className="sm:w-1/2  px-16 py-5">
        <h2 className="font-bold text-3xl text-[#FFEEDB] ">Submit Form</h2>
          <p className="text-sm mb-10 text-[#FFEEDB]">Please send your personel informations to us{" "}
          </p>
          <Signup />
        </div>
        <div className="w-1/2 sm:block hidden">
          <img className="rounded-2xl h-full" src={photo} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default App;
