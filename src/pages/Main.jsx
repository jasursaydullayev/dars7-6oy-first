import ReactSyntaxHighlighter, {
  Prism as SyntaxHighlighter,
} from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
function Main() {
  const codeBlock = `  fetch('https://dummyjson.com/products') 
  .then(res => res.json())
  .then(console.log);`;
  const codeBlock2 = `  fetch('https://dummyjson.com/products/1') 
  .then(res => res.json())
  .then(console.log);`;
  const bigCode = `
{
  "products": [
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "...",
      "images": ["...", "...", "..."]
    },
    {...},
    {...},
    {...}
    // 30 items
  ],

  "total": 100,
  "skip": 0,
  "limit": 30
}
  `;
  return (
    <div className="mt-[20px]">
      <h1 className="text-[28px] font-bold">Docs</h1>
      <p className="text-[16px] mt-1">
        You can use examples below to check how DummyJSON works.
      </p>
      <hr className="mt-[25px] h-[4px] w-[1240px] bg-[#ebebeb]" />
      <h1 className="mt-[25px] text-[26px] font-bold">Products</h1>
      <hr className="mt-[18px] h-[1px] w-[1240px] bg-[#ebebeb]" />
      <h1 className="mt-[20px] text-xl font-semibold">Get all products</h1>
      <div className=" mt-5 mb-[30px]">
        <ReactSyntaxHighlighter
          className="rounded-xl"
          language="javascript"
          style={atelierDuneDark}
        >
          {codeBlock}
        </ReactSyntaxHighlighter>
      </div>

      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn bg-black text-white rounded-2xl m-1">
          Show Output
        </div>
        <div
          tabIndex={0}
          className="dropdown-content z-[1] card card-compact w-[1240px] p-2text-primary-content"
        >
          <div className="card-body">
            <ReactSyntaxHighlighter
              className="rounded-xl "
              language="javascript"
              style={atelierDuneDark}
            >
              {bigCode}
            </ReactSyntaxHighlighter>
          </div>
        </div>
      </div>
      <hr className="mt-[25px] h-[4px] w-[1240px] bg-[#ebebeb]" />
      <h1 className="mt-[20px] text-xl font-semibold">Get a single product</h1>
      <div className=" mt-5" >
        <ReactSyntaxHighlighter
          className="rounded-xl"
          language="javascript"
          style={atelierDuneDark}
        >
          {codeBlock2}
        </ReactSyntaxHighlighter>
      </div>
    </div>
  );
}

export default Main;
