import { PlusOutlined } from "@ant-design/icons";
import { Form, Upload } from "antd";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { imgDb, specialFood } from "../../firebase";
import { v4 } from "uuid";
import { addDoc } from "firebase/firestore";
import { ToastMsg } from "Toast/Toast";

const AddSpecialItem = () => {
  const [form, setForm] = useState({
    foodName: "",
    description: "",
    price: "",
    photo: "",
  });
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleImgUpload = async (e) => {
    const imgs = ref(imgDb, `SpecialFoodImg/${v4()}`);
    await uploadBytes(imgs, e.target.files[0]).then((data) => {
      getDownloadURL(data.ref).then((val) => {
        setForm({ ...form, photo: val });
      });
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await addDoc(specialFood, form);
      ToastMsg(`Successfully added ${form.foodName}`, "success");
      setForm({
        foodName: "",
        price: "",
        description: "",
        photo: "",
      });
    } catch (e) {
      console.log(e);
    }
  };
  console.log(form, "form values");
  return (
    <>
      <ToastContainer />
      <div className="pl-4 pt-4">
        <h1 className="text-2xl font-bold">Add Special Food</h1>
        <form onSubmit={submitHandler} className="mt-10 flex flex-col gap-4">
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
            className="py-3 px-6 focus:outline-none rounded border border-gray-950 bg-slate-100 bg-opacity-60 placeholder:text-gray-400"
            placeholder="Food Name"
          />
          <input
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            value={form.description}
            type="text"
            className="py-3 px-6 focus:outline-none rounded border border-gray-950 bg-slate-100 bg-opacity-60 placeholder:text-gray-400"
            placeholder="Description"
          />
          <input
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            value={form.price}
            required
            type="number"
            min={10}
            className="py-3 px-6 focus:outline-none rounded border border-gray-950 bg-slate-100 bg-opacity-60 placeholder:text-gray-400"
            placeholder="Price"
          />

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

export default AddSpecialItem;
