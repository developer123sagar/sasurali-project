import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { chef, imgDb } from "../../firebase";
import { v4 } from "uuid";
import { ToastContainer } from "react-toastify";
import { Form, Select, Typography, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { addDoc } from "firebase/firestore";
import { ToastMsg } from "Toast/Toast";

const AddChefDetail = () => {
  const [form, setForm] = useState({
    name: "",
    photo: "",
    role: "Chef",
  });
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const handleImgUpload = async (e) => {
    const imgs = ref(imgDb, `chefImgs/${v4()}`);
    await uploadBytes(imgs, e.target.files[0]).then((data) => {
      getDownloadURL(data.ref).then((val) => {
        setForm({ ...form, photo: val });
      });
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await addDoc(chef, form);
      ToastMsg("successfully added", "success");
      setForm({
        name: "",
        role: "Chef",
        photo: "",
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
          Add Chef Details
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
                  Upload Chef Photo
                </div>
              </div>
            </Upload>
          </Form.Item>

          <input
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            value={form.name}
            required
            type="text"
            className="w-[250px] py-3 px-6 focus:outline-none rounded border border-gray-950 bg-slate-100 bg-opacity-60 placeholder:text-gray-400"
            placeholder="Chef Name"
          />

          <div>
            <Select
              value={form.role}
              style={{
                width: 250,
              }}
              onChange={(value) => setForm({ ...form, role: value })}
              options={[
                {
                  value: "Chef",
                  label: "Chef",
                },
                {
                  value: "Head Chef",
                  label: "Head Chef",
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

export default AddChefDetail;
