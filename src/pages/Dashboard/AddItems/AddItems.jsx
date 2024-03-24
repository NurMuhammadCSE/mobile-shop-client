import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const phoneItem = {
        phone_name: data.phone_name,
        brand: data.brand,
        rating: parseFloat(data.rating),
        price: parseFloat(data.price),
        description: data.description,
        image: res.data.data.display_url,
      };
      //
      const menuRes = await axiosSecure.post(`/phone`, phoneItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        // show success popup
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.phone_name} is updated to the Phone.`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/manageItems");
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div>
      <SectionTitle heading="Update an Item"></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">description Name*</span>
              </label>
              <input
                type="text"
                placeholder="description Name"
                {...register("phone_name", { required: true })}
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
                placeholder="rating"
                {...register("rating", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-6">
            {/* brand */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">brand*</span>
              </label>
              <select
                {...register("brand", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a brand
                </option>
                <option value="Huawei">Huawei</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Google">Google</option>
                <option value="Oppo">Oppo</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* description details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">description Details</span>
            </label>
            <textarea
              {...register("description")}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className=" btn btn-outline border-0 border-b-4 mt-4">
            Add Phone Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
