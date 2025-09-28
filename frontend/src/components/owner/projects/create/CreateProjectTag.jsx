import { useState } from "react";
import toast from "react-hot-toast";
import { PiX } from "react-icons/pi";

const CreateProjectTag = ({ tagsList, setTagsList }) => {
  const [tag, setTag] = useState("");
  const handleAddTag = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (
        !tagsList?.find(
          (t) =>
            t?.toString()?.toLocaleLowerCase() ===
            tag?.toString()?.toLocaleLowerCase(),
        ) &&
        tag?.length > 0
      ) {
        setTagsList([...tagsList, tag]);
        setTag("");
      } else if (
        tagsList?.find(
          (t) =>
            t?.toString()?.toLocaleLowerCase() ===
            tag?.toString()?.toLocaleLowerCase(),
        )
      ) {
        toast.error("تگ تکراری است.");
      }
    } else return;
  };
  const handleRemoveTag = (index) => {
    console.log(index);
    setTagsList(tagsList?.filter((t, idx) => idx !== index));
  };
  return (
    <div>
      <label htmlFor="tag" className="mb-2 block text-sm text-secondary-700">
        تگ‌
      </label>
      <div className="border border-secondary-400 p-1 w-full rounded-md flex gap-2 flex-wrap">
        {tagsList?.length > 0 &&
          tagsList?.map((t, index) => (
            <div
              key={index}
              className="text-xs flex items-center gap-1.5 rounded-xl px-2 py-0.5 bg-secondary-200 text-secondary-600"
            >
              <span>{t}</span>
              <button
                type="button"
                onClick={() => handleRemoveTag(index)}
                className="text-sm cursor-pointer"
              >
                <PiX />
              </button>
            </div>
          ))}
        <input
          type="text"
          value={tag}
          className="w-[40%] p-1 px-2 focus:outline-none bg-secondary-200 rounded-md text-sm"
          onChange={(e) => setTag(e.target.value)}
          onKeyDown={handleAddTag}
          id="tag"
        />
      </div>
    </div>
  );
};

export default CreateProjectTag;
