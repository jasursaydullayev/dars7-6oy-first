import { Link } from "react-router-dom";
import Main from './Main'
function Home() {
  return (
    <div className="flex gap-12">
      <div className="bg-[#ebebeb] h-[1028px] w-[210px] overflow-y-auto">
        <div className="cite-container flex flex-col gap-2 pt-3 ">
          <Link
            className="text-lg border-l-4 border-[#6d9cbe] pl-[5px]"
            to={"/"}
          >
            Docs
          </Link>
          <div>
            <Link
              className="text-lg border-l-4 border-[#6d9cbe] pl-[5px]"
              to={"/test"}
            >
              Test
            </Link>
          </div>
        </div>
      </div>
      <Main /> 
    </div>
  );
}

export default Home;
