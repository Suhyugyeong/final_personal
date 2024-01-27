import React from 'react';
import { Layout } from 'antd';
import BSHeader from './Header';
import BSFooter from './Footer';

const { Header, Content, Footer } = Layout;

const menuItems = [
  {
    key: 1,
    label: 'Home',
    href: '/',
  },
  {
    key: 2,
    label: 'About',
    href: '/about',
  },
  {
    key: 3,
    label: 'Contact',
    href: '/contact',
  },
  {
    key: 4,
    label: 'Login',
    href: '/login',
  },
  {
    key: 5,
    label: 'My Page',
    href: '/mypage',
  },
];

const LayoutProvider = ({ children }) => {
  // const router = useRouter();

  return (
    <>
      <BSHeader />
      {children}
      <BSFooter />
    </>
  );

  // return (
  //   <Layout>
  //     <Header
  //       style={{
  //         display: 'flex',
  //         alignItems: 'center',
  //       }}
  //     >
  //       <div className="demo-logo" />
  //       <Menu
  //         theme="dark"
  //         mode="horizontal"
  //         defaultSelectedKeys={['2']}
  //         items={menuItems}
  //         style={{
  //           flex: 1,
  //           minWidth: 0,
  //         }}
  //       />
  //     </Header>
  //     <Content
  //       style={{
  //         padding: '0 48px',
  //       }}
  //     >
  //       <div
  //         style={{
  //           minHeight: 280,
  //           padding: 24,
  //         }}
  //       >
  //         {children}
  //       </div>
  //     </Content>
  //     <Footer
  //       style={{
  //         textAlign: 'center',
  //       }}
  //     >
  //       Ant Design ©{new Date().getFullYear()} Created by Ant UED
  //     </Footer>
  //   </Layout>
  // );
};

export default LayoutProvider;
