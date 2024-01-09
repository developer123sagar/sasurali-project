import {
  Card,
  Image,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Typography,
  Button,
} from "antd";
import { db, chef } from "../../firebase";
import { DeleteOutlined, EyeTwoTone } from "@ant-design/icons";
import { ToastContainer } from "react-toastify";
import { deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const ChefDetail = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState({});

  async function getData() {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(chef);
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

  const handleOk = async () => {
    setIsModalOpen(false);
    const foodDoc = doc(db, "chefDetail", editData.id);
    await updateDoc(foodDoc, editData);
    getData();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const deleteFood = async (passedId) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this Chef detail?",
      okText: "Yes",
      okType: "danger",
      onOk: async () => {
        try {
          await deleteDoc(doc(db, "chefDetail", passedId));
          getData();
        } catch (err) {
          console.log(err.message, "error");
        }
      },
    });
  };

  const EditData = (record) => {
    setEditData(record);
    setIsModalOpen(true);
  };

  return (
    <>
      <Space size={20} direction="vertical" className="pl-4 pt-4 w-fit mx-auto">
        <ToastContainer />
        <Typography.Title level={5} className="font-extra">
          Chef Details
        </Typography.Title>
        <Card>
          <Table
            loading={loading}
            columns={[
              {
                title: "Chef Image",
                dataIndex: "photo",
                render: (value) => (
                  <Image
                    width={80}
                    height={80}
                    src={value}
                    alt="sasurali"
                    className="object-cover rounded-full"
                  />
                ),
              },
              {
                title: "Chef Name",
                dataIndex: "name",
              },
              {
                title: "Role",
                dataIndex: "role",
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
                      <DeleteOutlined
                        onClick={() => {
                          deleteFood(record.id);
                        }}
                        style={{ color: "red", marginLeft: 12 }}
                      />
                    </>
                  );
                },
              },
            ]}
            dataSource={dataSource}
            pagination={{
              pageSize: 10,
            }}
          ></Table>
        </Card>
        <Modal
          title="Update Details"
          open={isModalOpen}
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
                type="text"
                className="p-4"
                placeholder="Chef Name"
                variant="outlined"
                value={editData.name}
                onChange={(e) =>
                  setEditData({ ...editData, name: e.target.value })
                }
              />
              <Select
                value={editData.role}
                style={{
                  width: 120,
                  marginTop: 20,
                }}
                onChange={(value) => setEditData({ ...editData, role: value })}
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
          </form>
        </Modal>
      </Space>
    </>
  );
};

export default ChefDetail;
