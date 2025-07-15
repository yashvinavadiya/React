import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Button,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";

export const Home = () => {
  const navigate = useNavigate();

  const AddNewUser = () => {
    navigate("/adduser");
  };

  const [user, setUser] = useState([]);

  const userData = async () => {
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();
    setUser(data);
  };

  useEffect(() => {
    userData();
  }, []);

  const DeleteUser = async(id) => {
    const res = await fetch(`http://localhost:3000/users/${id}` , {
      method:'DELETE'
    }).then(() => {
      userData()
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
  <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 py-10">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-6">
      This is Home Page
    </h1>

    {/* Add User Button */}
    <div className="flex justify-end mb-6">
      <button
        onClick={AddNewUser}
        className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition"
      >
        + Add New User
      </button>
    </div>

    {/* Table */}
    <div className="overflow-x-auto rounded-xl shadow-xl border border-purple-200 bg-white/70 backdrop-blur-sm">
      <Table>
        <TableHead className="bg-purple-200 text-purple-800 font-bold text-lg">
          <TableRow>
            <TableHeadCell>UserName</TableHeadCell>
            <TableHeadCell>Age</TableHeadCell>
            <TableHeadCell>Phone No</TableHeadCell>
            <TableHeadCell>Gender</TableHeadCell>
            <TableHeadCell>Address</TableHeadCell>
            <TableHeadCell>Edit</TableHeadCell>
            <TableHeadCell>Delete</TableHeadCell>
          </TableRow>
        </TableHead>

        <TableBody className="divide-y divide-purple-100">
          {user.map((data, index) => (
            <TableRow
              key={index}
              className={`${
                index % 2 === 0
                  ? "bg-white"
                  : "bg-gradient-to-r from-pink-50 via-purple-50 to-yellow-50"
              } hover:bg-purple-50 transition`}
            >
              <TableCell className="font-semibold text-gray-800">
                {data.username}
              </TableCell>
              <TableCell>{data.age}</TableCell>
              <TableCell>{data.phoneno}</TableCell>
              <TableCell>{data.gender}</TableCell>
              <TableCell>{data.address}</TableCell>

              <TableCell>
                <Link
                  to={`/edituser/${data.id}`}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded-full font-medium transition"
                >
                  Edit
                </Link>
              </TableCell>

              <TableCell>
                <Button
                  onClick={() => DeleteUser(data.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full font-medium transition"
                  pill
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
</div>

  );
};