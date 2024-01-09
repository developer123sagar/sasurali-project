import { Form, Select, Typography, Upload } from "antd";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { v4 } from "uuid";
import { termCond, imgDb } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc } from "firebase/firestore";
import { ToastMsg } from "Toast/Toast";
import { PlusOutlined } from "@ant-design/icons";

const AddTermCondition = () => {
  const [form, setForm] = useState({
    title: "",
    photo: "",
    status: "Completed",
    description: "",
  });
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleImgUpload = async (e) => {
    const imgs = ref(imgDb, `term&condImg/${v4()}`);
    await uploadBytes(imgs, e.target.files[0]).then((data) => {
      getDownloadURL(data.ref).then((val) => {
        setForm({ ...form, photo: val });
      });
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await addDoc(termCond, form);
      ToastMsg("successfully added", "success");
      setForm({
        title: "",
        photo: "",
        status: "Completed",
        description: "",
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
          Add Term & Condition Details
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
                  Upload Term & Condition Photo
                </div>
              </div>
            </Upload>
          </Form.Item>

          <input
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            value={form.title}
            required
            type="text"
            className="w-[250px] py-3 px-6 focus:outline-none rounded border border-gray-950 bg-slate-100 bg-opacity-60 placeholder:text-gray-400"
            placeholder="T&C Title"
          />

          <textarea
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            value={form.description}
            type="text"
            className="w-[250px] py-3 px-6 focus:outline-none rounded border border-gray-950 bg-slate-100 bg-opacity-60 placeholder:text-gray-400"
            placeholder="Description"
          />

          <div>
            <Select
              value={form.status}
              style={{
                width: 250,
              }}
              onChange={(value) => setForm({ ...form, status: value })}
              options={[
                {
                  value: "Completed",
                  label: "Completed",
                },
                {
                  value: "Not Completed",
                  label: "Not Completed",
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

export default AddTermCondition;
