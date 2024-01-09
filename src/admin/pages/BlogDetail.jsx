import { deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, blog } from "../../firebase";
import { Card, Image, Input, Modal, Space, Table, Typography,Button } from "antd";
import { DeleteOutlined, EyeTwoTone } from "@ant-design/icons";
import { ToastContainer } from "react-toastify";

const BlogDetail = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState({});

  async function getData() {
    try {
      const querySnapshot = await getDocs(blog);

      const updatedData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        key: doc.id,
      }));

      setDataSource(updatedData);
    } catch (error) {
      console.error( error.message);
    } finally {
      setLoading(false); 
    }
  }

  useEffect(() => {
    getData(); 
  }, []); 


  const handleOk =  () => {
    setIsModalOpen(false);
    const foodDoc = doc(db, "blogDetail", editData.id);
    updateDoc(foodDoc, editData);
    getData()
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const deleteFood = async (passedId) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this Blog detail?",
      okText: "Yes",
      okType: "danger",
      onOk: async () => {
        try {
          await deleteDoc(doc(db, "blogDetail", passedId));
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
          Blog Details
        </Typography.Title>
        <Card>
          <Table
            loading={loading}
            columns={[
              {
                title: "Blog Image",
                dataIndex: "photo",
                render: (value) => (
                  <Image
                    width={100}
                    height={100}
                    src={value}
                    alt="sasurali"
                    className="object-cover"
                  />
                ),
              },
              {
                title: "Blog Title",
                dataIndex: "title",
              },
              {
                title: "Blog Description",
                dataIndex: "description",
              },
              {
                title: "Meta Title",
                dataIndex: "meta_title",
              },
              {
                title: "Meta Description",
                dataIndex: "meta_description",
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
                placeholder="Blog title"
                variant="outlined"
                value={editData.title}
                onChange={(e) =>
                  setEditData({ ...editData, title: e.target.value })
                }
              />
              <Input
                type="text"
                className="p-4"
                placeholder="Blog description"
                variant="outlined"
                value={editData.description}
                onChange={(e) =>
                  setEditData({ ...editData, description: e.target.value })
                }
              />
              <Input
                type="text"
                className="p-4"
                placeholder="Meta Title"
                variant="outlined"
                value={editData.meta_title}
                onChange={(e) =>
                  setEditData({ ...editData, meta_title: e.target.value })
                }
              />
              <Input
                type="text"
                className="p-4"
                placeholder="Meta description"
                variant="outlined"
                value={editData.meta_description}
                onChange={(e) =>
                  setEditData({ ...editData, meta_description: e.target.value })
                }
              />
            </div>
          </form>
        </Modal>
      </Space>
    </>
  );
};

export default BlogDetail;
