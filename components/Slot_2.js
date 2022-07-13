import Image from "next/image";


const Slot_2 = () => {
    return (
      <>
        <div className="slot-2">
            <h3 className="slot-2-head">Courses</h3>
            <div className="slot-2-left_tools">
                <div className="choice_block">
                    <button className="choice_btn choice_btn-diff-1  ">all</button>
                    <button className="choice_btn  choice_btn-diff-2 active">my</button>
                </div>
                <div className="searchbar">
                    <input type="search" name="search" id="searchbar" placeholder="Search by keyword" />
                </div>
            </div>
        </div>
      </>
    );
  };
  export { Slot_2 };