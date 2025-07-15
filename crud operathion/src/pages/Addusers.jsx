import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const AddUser = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    age: "",
    phoneno: "",
    address: "",
    gender: "",
    agree: false,
  });

  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    const { name, value, type, checked, id } = e.target;
    setNewUser((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(newUser),
    });
    navigate("/");
  };

  console.log(newUser);

  return (
   <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-100">
  <form
    onSubmit={handleSubmit}
    className="flex flex-col gap-6 w-[600px] bg-white/90 shadow-2xl p-10 rounded-3xl border border-purple-200 backdrop-blur-sm"
  >
    <h1 className="text-center text-3xl font-extrabold text-purple-700">
      New User Add Form
    </h1>

    {/* Username */}
    <div>
      <Label htmlFor="username" className="text-purple-600 font-medium">Username</Label>
      <TextInput
        id="username"
        type="text"
        placeholder="Enter username"
        required
        className="mt-1"
        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
      />
    </div>

    {/* Age */}
    <div>
      <Label htmlFor="age" className="text-purple-600 font-medium">Age</Label>
      <TextInput
        id="age"
        type="number"
        placeholder="Enter age"
        required
        className="mt-1"
        onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
      />
    </div>

    {/* Phone No */}
    <div>
      <Label htmlFor="phoneno" className="text-purple-600 font-medium">Phone No</Label>
      <TextInput
        id="phoneno"
        type="tel"
        placeholder="+91"
        required
        className="mt-1"
        onChange={(e) => setNewUser({ ...newUser, phoneno: e.target.value })}
      />
    </div>

    {/* Address */}
    <div>
      <Label htmlFor="address" className="text-purple-600 font-medium">Address</Label>
      <TextInput
        id="address"
        type="text"
        placeholder="Enter address"
        required
        className="mt-1"
        onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
      />
    </div>

    {/* Gender */}
    <div>
      <Label htmlFor="gender" className="text-purple-600 font-medium">Gender</Label>
      <div className="flex items-center justify-between mt-2">
        <label className="flex items-center gap-2">
          <TextInput
            id="male"
            type="radio"
            name="gender"
            value="male"
            required
            checked={newUser.gender === "male"}
            onChange={handleOptionChange}
          />
          <span className="text-gray-700">Male</span>
        </label>
        <label className="flex items-center gap-2">
          <TextInput
            id="female"
            type="radio"
            name="gender"
            value="female"
            required
            checked={newUser.gender === "female"}
            onChange={handleOptionChange}
          />
          <span className="text-gray-700">Female</span>
        </label>
      </div>
    </div>

    {/* Remember */}
    <div className="flex items-center gap-3">
      <Checkbox
        id="remember"
        name="agree"
        checked={newUser.agree}
        onChange={handleOptionChange}
      />
      <Label htmlFor="remember" className="text-sm text-gray-700">Remember me</Label>
    </div>

    {/* Buttons */}
    <div className="flex justify-between">
      <Button
        onClick={() => navigate('/')}
        className="w-full bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
        type="button"
      >
        Back
      </Button>
      <Button
        className="w-full ml-4 bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
        type="submit"
      >
        Submit
      </Button>
    </div>
  </form>
</div>

  );
};

export default AddUser;