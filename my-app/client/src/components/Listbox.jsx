import Cheakbox from "./Cheakbox";

const Listbox = (props) => {
  return (
    <>
      <div className="flex gap-8   border-2">
        <div className="border-1  bg-slate-400">
          <h1 className="bold text-red-500">{props.weekday}</h1>
          <p>11/22</p>
        </div>
     
        <div>
          <Cheakbox />
        </div>
      </div>
    </>
  );
};

export default Listbox;
