import { DeleteOutlined, EyeTwoTone } from "@ant-design/icons";
import {
  Card,
  Image,
  Modal,
  Space,
  Table,
  Typography,
  Input,
  Button
} from "antd";
import { deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, specialFood } from "../../firebase";
import { ToastContainer } from "react-toastify";

const SpecialItem = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState({});

  async function getData() {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(specialFood);
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
    const foodDoc = doc(db, "foodItem", editData.id);
    await updateDoc(foodDoc, editData);
    getData();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const deleteFood = async (passedId) => {
    Modal.confirm({
      title: "Are you sure you want to delete this Food detail?",
      okText: "Yes",
      okType: "danger",
      onOk: async () => {
        try {
          await deleteDoc(doc(db, "foodItem", passedId));
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
          Food Details
        </Typography.Title>
        <Card>
          <Table
            loading={loading}
            columns={[
              {
                title: "Food Image",
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
                title: "Food Name",
                dataIndex: "foodName",
              },
              {
                title: "Description",
                dataIndex: "description",
              },
              {
                title: "Price",
                dataIndex: "price",
                render: (value) => <span>Rs {value}</span>,
              },
              {
                title: "Actions",
                render: (record) => (
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
                ),
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
                placeholder="Food Name"
                value={editData.foodName}
                onChange={(e) =>
                  setEditData({ ...editData, foodName: e.target.value })
                }
              />
              <Input
                type="text"
                className="p-4"
                placeholder="Description"
                value={editData.description}
                onChange={(e) =>
                  setEditData({ ...editData, description: e.target.value })
                }
              />
              <Input
                type="number"
                className="p-4"
                placeholder="Price"
                value={editData.price}
                onChange={(e) =>
                  setEditData({ ...editData, price: e.target.value })
                }
              />
            </div>
          </form>
        </Modal>
      </Space>
    </>
  );
};

export default SpecialItem;
