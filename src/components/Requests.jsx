import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";
import { useEffect, useState } from "react";

const Requests = () => {
  const requests = useSelector((store) => store?.request);
  console.log(requests)
  const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    try {
      const res = axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (err) {}
  };

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      dispatch(addRequests(res?.data?.data));
    } catch (err) {}
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests)
    return (
      <div className="flex justify-center items-center h-screen">
        <img
          src="/src/Images/Preloader.gif"
          alt="Loading.."
          className="w-20 h-20"
        />
      </div>
    );

  if (requests.length === 0)
    return <h1 className="flex justify-center my-10"> No Requests Found</h1>;

  return (
    <div className="container mx-auto px-4 my-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Connection Requests 🩷
      </h1>
  
      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          request.fromUserId;
  
        return (
          <div
            key={_id}
            className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 mb-6 hover:shadow-xl transition-shadow"
          >
            <img
              alt={`${firstName} ${lastName}`}
              className="w-20 h-20 rounded-full border-2 border-blue-500 object-cover mb-4 md:mb-0"
              src={photoUrl}
            />
  
            <div className="flex-1 text-center md:text-left md:mx-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {firstName} {lastName}
              </h2>
              {age && gender && (
                <p className="text-sm text-gray-600">{`${age}, ${gender}`}</p>
              )}
              <p className="text-sm text-gray-700 mt-2">{about}</p>
            </div>
  
            <div className="flex space-x-4 mt-4 md:mt-0">
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
                onClick={() => reviewRequest("rejected", request._id)}
              >
                Reject
              </button>
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition"
                onClick={() => reviewRequest("accepted", request._id)}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
  
};
export default Requests;
