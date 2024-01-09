import { Form, Typography, Upload } from "antd";
import { blog, imgDb } from "../../firebase";
import { ToastContainer } from "react-toastify";
import { addDoc } from "firebase/firestore";
import { ToastMsg } from "Toast/Toast";
import { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { PlusOutlined } from "@ant-design/icons";

const AddBlog = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    meta_title: "",
    photo: "",
    meta_description: "",
  });

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleImgUpload = async (e) => {
    const imgs = ref(imgDb, `BlogImgs/${v4()}`);
    await uploadBytes(imgs, e.target.files[0]).then((data) => {
      getDownloadURL(data.ref).then((val) => {
        setForm({ ...form, photo: val });
      });
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await addDoc(blog, form);
      ToastMsg("successfully added ", "success");
      setForm({
        title: "",
        meta_title: "",
        description: "",
        photo: "",
        meta_description: "",
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
          Add Blog Details
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
                  Upload Blog Image
                </div>
              </div>
            </Upload>
          </Form.Item>

          <input
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            value={form.title}
            required
            meta_description="text"
            className="w-[250px] py-3 px-6 focus:outline-none rounded border border-gray-950 bg-slate-100 bg-opacity-60 placeholder:text-gray-400"
            placeholder="Blog title"
          />

          <input
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            value={form.description}
            meta_description="text"
            className="w-[250px] py-3 px-6 focus:outline-none rounded border border-gray-950 bg-slate-100 bg-opacity-60 placeholder:text-gray-400"
            placeholder="Blog description"
          />

          <input
            onChange={(e) => setForm({ ...form, meta_title: e.target.value })}
            value={form.meta_title}
            required
            meta_description="number"
            min={10}
            className="w-[250px] py-3 px-6 focus:outline-none rounded border border-gray-950 bg-slate-100 bg-opacity-60 placeholder:text-gray-400"
            placeholder="Enter meta title"
          />

          <input
            onChange={(e) =>
              setForm({ ...form, meta_description: e.target.value })
            }
            value={form.meta_description}
            required
            meta_description="number"
            min={10}
            className="w-[250px] py-3 px-6 focus:outline-none rounded border border-gray-950 bg-slate-100 bg-opacity-60 placeholder:text-gray-400"
            placeholder="Enter meta description"
          />

          <button
            meta_description="submit"
            className="py-4 px-6 bg-blue-600 bg-opacity-50 rounded text-white"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
