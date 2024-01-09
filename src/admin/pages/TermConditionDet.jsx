import {
  Card,
  Image,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Typography,
} from "antd";
import { deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, termCond } from "../../firebase";
import { ToastContainer } from "react-toastify";
import { DeleteOutlined, EyeTwoTone } from "@ant-design/icons";

const TermConditionDet = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState({});

  async function getData() {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(termCond);
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
    const term_cond = doc(db, "Term&cond", editData.id);
    await updateDoc(term_cond, editData);
    getData();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const deleteFood = async (passedId) => {
    Modal.confirm({
      title: "Are you sure you want to delete this Term & Condition detail?",
      okText: "Yes",
      okType: "danger",
      onOk: async () => {
        try {
          await deleteDoc(doc(db, "Term&cond", passedId));
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
          Term & Condition Details
        </Typography.Title>
        <Card>
          <Table
            loading={loading}
            columns={[
              {
                title: "Term_condition Image",
                dataIndex: "photo",
                render: (value) => (
                  <Image
                    width={80}
                    height={80}
                    src={value}
                    alt="Term & Condition Image"
                    className="object-cover rounded"
                  />
                ),
              },
              {
                title: "Title",
                dataIndex: "title",
              },
              {
                title: "Description",
                dataIndex: "description",
              },
              {
                title: "Status",
                dataIndex: "status",
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
        >
          <form>
            <div className="flex gap-5 flex-wrap">
              <Input
                type="text"
                className="p-4"
                placeholder="Title"
                value={editData.title}
                onChange={(e) =>
                  setEditData({ ...editData, title: e.target.value })
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
              <div>
                <Select
                  value={editData.status}
                  style={{
                    width: 250,
                  }}
                  onChange={(value) =>
                    setEditData({ ...editData, status: value })
                  }
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
            </div>
          </form>
        </Modal>
      </Space>
    </>
  );
};

export default TermConditionDet;
