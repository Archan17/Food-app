const ContactUs = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="font-bold m-4 p-4 text-3xl">Contact Us</h1>
      </div>
      <form className="flex flex-col items-center">
        <input
          type="text"
          className="p-4 m-4 border border-black rounded-lg w-1/2"
          placeholder="Name"
        />
        <input
          type="text"
          className="p-4 m-4 border border-black rounded-lg w-1/2"
          placeholder="message"
        />
        <button className="rounded-lg border border-black p-2 m-2 bg-gray-100 w-1/12">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactUs;
