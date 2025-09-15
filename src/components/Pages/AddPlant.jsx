import React from "react";

const AddPlant = () => {


  const handleAddButton = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const allData = Object.fromEntries(formData.entries());
    console.log(allData);
  };

  return (
    <div className="my-10 mx-44">
      <form onSubmit={handleAddButton}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  ">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend"> Name</legend>
            <input
              type="text"
              name="Name"
              className="input w-full"
              placeholder="your name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Your email"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend">Plant Name</legend>
            <input
              type="text"
              name="plant name"
              className="input w-full"
              placeholder="Plant name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend">Category</legend>
            <select
              defaultValue="Server location"
              name="category"
              className="select select-neutral w-full"
            >
              <option>Succulent</option>
              <option>fern</option>
              <option>flowering</option>
            </select>
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend">Description</legend>
            <input
              type="text"
              name="description"
              className="input w-full"
              placeholder="details"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend">Care Lavel</legend>

            <select
              defaultValue="Server location"
              name="care"
              className="select select-neutral w-full"
            >
              <option>easy</option>
              <option>moderate</option>
              <option>difficult</option>
            </select>
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend">Health Status</legend>
            <input
              type="text"
              name="health"
              className="input w-full"
              placeholder="health status"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend">Watering Frequency</legend>
            <input
              type="text"
              name="water frequency"
              className="input w-full"
              placeholder="water frequency"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend">Last Watered Date</legend>
            <input type="date" name="last" className="input w-full" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend">Next Watering Date</legend>
            <input type="date" name="next" className="input w-full" />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Image URL</legend>
          <input
            type="text"
            name="photo"
            className="input w-full"
            placeholder="Photo url"
          />
        </fieldset>
        <button className="btn btn-block my-4">block</button>
      </form>
    </div>
  );
};

export default AddPlant;
