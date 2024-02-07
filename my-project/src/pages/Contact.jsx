import React from "react";

export const Contact = () => {
  return (
    <div className="grid place-items-center ">
      <form className="" action="">
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" type="text" />
        </div>
        <div>
            <label htmlFor="email">email</label>
        <input name="email" type="email" />
        </div>
        <div>
            <label htmlFor="message">Message</label>
        <input name="message" type="text" id="" />

        </div>
        <button type="submit">save</button>
      </form>
    </div>
  );
};
