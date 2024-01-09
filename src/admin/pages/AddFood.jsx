import { PlusOutlined } from "@ant-design/icons";
import { ToastMsg } from "Toast/Toast";
import { Form, Select, Typography, Upload } from "antd";
import { useState } from "react";
import { food, imgDb } from "../../firebase";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc } from "firebase/firestore";
import { ToastContainer } from "react-toastify";

const AddFood = () => {
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const [form, setForm] = useState({
    foodName: "",
    description: "",
    price: "",
    photo: "",
    type: "Breakfast",
  });

  const handleImgUpload = async (e) => {
    const imgs = ref(imgDb, `Imgs/${v4()}`);
    await uploadBytes(imgs, e.target.files[0]).then((data) => {
      getDownloadURL(data.ref).then((val) => {
        setForm({ ...form, photo: val });
      });
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await addDoc(food, form);
      ToastMsg("successfully added ", "success");
      setForm({
        foodName: "",
        price: "",
        description: "",
        photo: "",
        type: "Breakfast",
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="pl-4 pt-4">
        <Typography.Title className="font-extra" level={4}>
          Add Food Details
        </Typography.Title>
        <form className="mt-10 flex flex-col gap-4" onSubmit={submitHandler}>
          <Form.Item
            onChange={(e) => handleImgUpload(e)}
            value={form.photo}
            required
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload Food Photo
                </div>
              </div>
            </Upload>
          </Form.Item>

          <input
            onChange={(e) => setForm({ ...form, foodName: e.target.value })}
            value={form.foodName}
            required
            type="text"
            className="w-[250px] py-3 px-6 focus:outline-none rounded border border-gray-950 bg-slate-100 bg-opacity-60 placeholder:text-gray-400"
            placeholder="Food Name"
          />

          <input
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            value={form.description}
            type="text"
            className="w-[250px] py-3 px-6 focus:outline-none rounded border border-gray-950 bg-slate-100 bg-opacity-60 placeholder:text-gray-400"
            placeholder="Description"
          />

          <input
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            value={form.price}
            required
            type="number"
            min={10}
            className="w-[250px] py-3 px-6 focus:outline-none rounded border border-gray-950 bg-slate-100 bg-opacity-60 placeholder:text-gray-400"
            placeholder="Price"
          />

          <div>
            <Select
              value={form.type}
              style={{
                width: 250,
              }}
              onChange={(value) => setForm({ ...form, type: value })}
              options={[
                {
                  value: "Breakfast",
                  label: "Breakfast",
                },
                {
                  value: "Lunch",
                  label: "Lunch",
                },
                {
                  value: "Snacks",
                  label: "Snacks",
                },
                {
                  value: "Drinks",
                  label: "Drinks",
                },
              ]}
            />
          </div>
          <button
            type="submit"
            className="py-4 px-6 bg-blue-600 bg-opacity-50 rounded text-white"
          >
            Add
          </button>
          
        </form>
      </div>
    </>
  );
};

export default AddFood;
