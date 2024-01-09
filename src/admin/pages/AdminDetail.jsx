import { Card, Modal, Space, Table, Typography ,Button} from "antd";
// import { admin } from "../../firebase";
import { doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { EyeTwoTone } from "@ant-design/icons";
import { db,admin } from "../../firebase";
import {Input} from "antd";

const AdminDetail = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editData, setEditData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function getData() {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(admin);
      const updatedData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        key: doc.id,
      }));
      setDataSource(updatedData);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   async function getData() {
  //     setLoading(true);
  //     const data = await getDocs(admin);
  //     data.forEach((doc) => {
  //       setDataSource((prev) => [...prev, { ...doc.data(), key: doc.id }]);
  //     });

  //     setLoading(false);
  //   }
  //   getData();
  // }, []);

  const EditData = (record) => {
    setEditData(record);
    setIsModalOpen(true);
  };

  console.log(editData);

  const handleOk = async () => {
    setIsModalOpen(false);
    const foodDoc = doc(db, "adminDetail", editData.id);
    await updateDoc(foodDoc, editData);
    getData();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Space size={20} direction="vertical" className="pl-4 pt-4">
      <ToastContainer />
      <Typography.Title level={5} className="font-extra">
        Admin Detail
      </Typography.Title>
      <Card>
        <Table
          pagination="false"
          loading={loading}
          columns={[
            {
              title: "Admin Email",
              dataIndex: "email",
            },
            {
              title: "Password",
              dataIndex: "password",
            },
            {
              title: "Actions",
              render: (record) => {
                return (
                  <>
                    <EyeTwoTone
                      onClick={() => {
                        EditData(record);
                      }}
                    />
                  </>
                );
              },
            },
          ]}
          dataSource={dataSource}
        ></Table>
      </Card>
      <Modal
  title="Update Details"
  visible={isModalOpen}
  onOk={handleOk}
  onCancel={handleCancel}
  footer={[
    <Button key="cancel" onClick={handleCancel}>
      Cancel
    </Button>,
    <Button
      
      onClick={handleOk}
    
      style={{ color: 'black' }}// Add a class name to the "OK" button
    >
      OK
    </Button>,
  ]}
>
          <form>
            <div className="flex gap-5 flex-wrap">
              <Input
                type="email"
                className="p-4"
                placeholder="email"
                value={editData.email}
                onChange={(e) =>
                  setEditData({ ...editData, email: e.target.value })
                }
              />
               <Input
                type="text"
                className="p-4"
                placeholder="password"
                value={editData.password}
                onChange={(e) =>
                  setEditData({ ...editData, password: e.target.value })
                }
              />
             
            </div>
          </form>
        </Modal>
    </Space>
  );
};

export default AdminDetail;
