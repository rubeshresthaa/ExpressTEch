import { useFormik } from "formik";
import { useAddServiceMutation } from "../../Features/OurService/serviceApi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import SideBar from "../AdminDash/SideBar";

export const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export const serviceSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().min(50, "Description should be at least 50 characters").required("Description is required"),
  image: Yup.mixed().required("Image is required").test('fileType', 'Invalid image type', (e) => validTypes.includes(e?.type)),
});

const AddService = () => {
  const [addService, { isLoading }] = useAddServiceMutation();
  const { user } = useSelector((state) => state.userSlice);
  const nav = useNavigate();
  
  const { handleSubmit, handleChange, values, errors, touched, setFieldValue } = useFormik({
    initialValues: {
      title: '',
      image: null,
      description: '',
    },
    onSubmit: async (val, { resetForm }) => {
      const formData = new FormData();
      formData.append('title', val.title);
      formData.append('description', val.description);
      formData.append('image', val.image);
      
      try {
        await addService({
          body: formData,
          token: user.token,
        }).unwrap();
        toast.success('Service Added Successfully');
        nav(-1);  // Navigate back to the previous page
        resetForm();
      } catch (err) {
        toast.error(`${err.data?.message || 'An error occurred'}`);
      }
    },
    validationSchema: serviceSchema,
  });

  return (
    <div className="flex flex-col md:flex-row">
      <SideBar />
      <div className="flex-1 max-w-3xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg my-4">
        <h1 className="text-2xl font-bold text-center mb-6">Add Service</h1>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-lg font-medium mb-2">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
              value={values.title}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.title && touched.title && <div className="text-pink-700 mt-1 text-sm">{errors.title}</div>}
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-lg font-medium mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              rows="5"
              onChange={handleChange}
              value={values.description}
              placeholder="Describe the service..."
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            />
            {errors.description && touched.description && <div className="text-pink-700 mt-1 text-sm">{errors.description}</div>}
          </div>

          {/* Image */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-lg font-medium mb-2">Select an Image</label>
            <input
              type="file"
              name="image"
              onChange={(e) => setFieldValue('image', e.target.files[0])}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none"
            />
            {errors.image && touched.image && <div className="text-pink-700 mt-1 text-sm">{errors.image}</div>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 mt-4 bg-green-600 rounded-lg font-semibold hover:bg-green-700 transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
