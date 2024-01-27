import { Link } from "react-router-dom";
import ReactSyntaxHighlighter, {
  Prism as SyntaxHighlighter,
} from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
function TestPage() {
  const codeBlock = `  // Could be GET or POST/PUT/PATCH/DELETE
  fetch('//dummyjson.com/test')
  .then(res => res.json())
  .then(console.log);
  
  /* { status: 'ok', method: 'GET' } */`;
  return (
    <div className="flex gap-[50px]">
      <div className="bg-[#ebebeb] h-[653px] w-[210px] overflow-y-auto">
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

    <div className="mt-[20px]">
      <h1 className="text-[28px] font-bold">How to use it</h1>
      <p className="text-[16px] mt-1">
      DummyJSON can be used with any type of front end project that needs products, carts, users, todos or any dummy data in JSON format.
      </p>
      <p className="text-[16px] mt-1">
      You can use examples below to check how DummyJSON works.
      </p>
      <p className="text-[16px] mt-1">
      Feel free to enjoy it in your awesome projects!
      </p>
      <hr className="mt-[25px] h-[4px] w-[1240px] bg-[#ebebeb]" />
      <h1 className="mt-[25px] text-[26px] font-bold">Intro</h1>
      <hr className="mt-[18px] h-[1px] w-[1240px] bg-[#ebebeb]" />
      <h1 className="mt-[20px] text-xl font-semibold">Test Route</h1>
      <div className=" mt-5 mb-[30px]">
        <ReactSyntaxHighlighter
          className="rounded-xl"
          language="javascript"
          style={atelierDuneDark}
        >
          {codeBlock}
        </ReactSyntaxHighlighter>
      </div>
    </div>
    </div>
  );
}

export default TestPage;
