import { router } from '../src/router/index'
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import React from 'react';
export default function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

// import React, { useState } from 'react';
// import { Space, Table, Tag, Input } from 'antd';
// import type { ColumnsType } from 'antd/es/table';
// import { SearchOutlined } from '@ant-design/icons';

// interface DataType {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
//   tags: string[];
// }

// const { Search } = Input;

// const columns: ColumnsType<DataType> = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   },
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (_, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
// ];

// const data: DataType[] = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

// const App: React.FC = () => {
//   const [searchValue, setSearchValue] = useState('');
//   const filteredData = data.filter((item) =>
//     item.name.toLowerCase().includes(searchValue.toLowerCase())
//   );

//   const handleSearch = (value: string) => {
//     setSearchValue(value);
//   };

//   return (
//     <>
//       <Search
//         placeholder="Search..."
//         style={{ width: 200, marginBottom: '16px', float: 'right' }}
//         prefix={<SearchOutlined />}
//         value={searchValue}
//         onChange={(e) => handleSearch(e.target.value)}
//       />
//       <Table columns={columns} dataSource={filteredData} pagination={{ position: ['bottomCenter'] }} />
//     </>
//   );
// };

// export default App;
