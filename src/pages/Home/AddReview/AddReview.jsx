import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { axiosSecure } from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddReview = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const reviewData = {
      user: user?.displayName,
      profile: user?.photoURL,
      rating: parseFloat(data.rating),
      comment: data.comment,
    };
    const menuRes = await axiosSecure.post(`/review`, reviewData);
    // console.log(menuRes.data);
    if (menuRes.data.insertedId) {
      // show success popup
      // reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Your review is added`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/manageItems");
    }
  };
  return (
    <div>
      <SectionTitle heading={"Add Review"}></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-6">
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Comment*</span>
            </label>
            <input
              type="text"
              placeholder="Comment"
              {...register("comment", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Rating*</span>
            </label>
            <input
              type="text"
              placeholder="Rating"
              {...register("rating", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <button className=" btn btn-outline border-0 border-b-4 mt-4">
          Add Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
