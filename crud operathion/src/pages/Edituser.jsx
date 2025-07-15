import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useNavigate , useParams } from "react-router";
import { useEffect, useState } from "react";


const EditUser = () => {


  const {id} = useParams()

  const navigate = useNavigate()

  const [editUser , setEditUser] = useState({
    username:'',
    age:'',
    phoneno:'',
    address:'',
    gender:'',
    agree:false
  })

  console.log('edituserdata' , editUser);
  

  const EditUserData = async() => {
    const res = await fetch(`http://localhost:3000/users/${id}`)
    const data = await res.json()
    setEditUser(data)
  }

  useEffect(() => {
   EditUserData()
  } , [id])

  const handleOptionChange = (e) => {
    const { name, value, type, checked} = e.target;
    setEditUser((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async(e) => {
    
    e.preventDefault()

    const res  = await fetch(`http://localhost:3000/users/${id}` , {
      method:"PUT",
      body:JSON.stringify(editUser)
    })

    if(res.ok){
      alert('User Updated Successfully!!')
      navigate('/')
    }

  }


  return (
  <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-blue-200 via-pink-100 to-yellow-100">
  <form
    onSubmit={handleSubmit}
    className="w-[600px] bg-white/90 shadow-2xl backdrop-blur-md rounded-3xl p-10 flex flex-col gap-6 border border-purple-200"
  >
    <h1 className="text-center text-3xl font-extrabold text-purple-700">
      Edit User Form
    </h1>

    {/* Username */}
    <div>
      <Label htmlFor="username" className="text-purple-600 font-semibold">
        Username
      </Label>
      <TextInput
        id="username"
        type="text"
        placeholder="username"
        name="username"
        required
        value={editUser.username}
        onChange={handleOptionChange}
        className="mt-1"
      />
    </div>

    {/* Age */}
    <div>
      <Label htmlFor="age" className="text-purple-600 font-semibold">
        Age
      </Label>
      <TextInput
        id="age"
        type="number"
        placeholder="age"
        name="age"
        required
        value={editUser.age}
        onChange={handleOptionChange}
        className="mt-1"
      />
    </div>

    {/* Phone No */}
    <div>
      <Label htmlFor="phoneno" className="text-purple-600 font-semibold">
        Phone No
      </Label>
      <TextInput
        id="phoneno"
        type="tel"
        placeholder="+91"
        name="phoneno"
        required
        value={editUser.phoneno}
        onChange={handleOptionChange}
        className="mt-1"
      />
    </div>

    {/* Address */}
    <div>
      <Label htmlFor="address" className="text-purple-600 font-semibold">
        Address
      </Label>
      <TextInput
        id="address"
        type="text"
        placeholder="address"
        name="address"
        required
        value={editUser.address}
        onChange={handleOptionChange}
        className="mt-1"
      />
    </div>

    {/* Gender */}
    <div>
      <Label htmlFor="gender" className="text-purple-600 font-semibold">
        Gender
      </Label>
      <div className="flex items-center justify-between mt-2">
        <label className="flex items-center gap-2">
          <TextInput
            id="male"
            type="radio"
            name="gender"
            value="male"
            required
            checked={editUser.gender === "male"}
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
            checked={editUser.gender === "female"}
            onChange={handleOptionChange}
          />
          <span className="text-gray-700">Female</span>
        </label>
      </div>
    </div>

    {/* Remember */}
    <div className="flex items-center gap-3">
      <Checkbox id="remember" onChange={handleOptionChange} />
      <Label htmlFor="remember" className="text-gray-700">
        Remember me
      </Label>
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

export default EditUser;