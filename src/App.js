import React, { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

function App() {
  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  // });

  // function handleChange(event) {
  //   const { name, value } = event.target;

  //   setUser((prevUser) => {
  //     return {
  //       ...prevUser,
  //       [name]: value,
  //     };
  //   });
  // }

  // function makePayments() {
  //   console.log(user.email);
  // }

  const config = {
    public_key: process.env.REACT_APP_FLUTTER_KEY,
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phonenumber: "07064586146",
      name: "joel ugwumadu",
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  console.log(config.public_key);
  // console.log(user.email);

  return (
    <div
      className="min-h-screen flex items-center 
    justify-center bg-gradient-to-tr from-[#7DA2B4] to-[#0C2B50]
     flex-col"
    >
      <h1 className="text-orange-700 font-semibold text-3xl animate-bounce">
        Flutter Payment
      </h1>
      <form className="flex flex-col">
        <input
          className=" my-3 rounded-md transition duration-500 shadow-md 
          hover:shadow-gray-500 px-2 w-full outline-none text-gray-500 text-2xl"
          type="text"
          placeholder="Name"
          name="name"
          // value={user.email}
          // onChange={handleChange}
        />
        <input
          className=" my-3 rounded-md transition duration-500 shadow-md 
          hover:shadow-gray-500 px-2 outline-none w-72 text-gray-500 text-2xl"
          type="email"
          placeholder="Email"
          name="email"
          // value={user.email}
          // onChange={handleChange}
        />
      </form>
      <button
        className="bg-orange-800 rounded-md px-2"
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Pay Now
      </button>
    </div>
  );
}

export default App;
