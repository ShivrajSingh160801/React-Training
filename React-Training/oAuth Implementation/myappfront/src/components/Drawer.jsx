import { Button, Drawer } from "antd";
import { useState } from "react";
import SignUp from "./signupPage";

const SignUpDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="link" onClick={showDrawer}>
        register now!
      </Button>
      <Drawer
        title={<h2 style={{ textAlign: "center" }}>Create a new account</h2>}
        width={720}
        height={550}
        onClose={onClose}
        open={open}
        placement="top"
        bodyStyle={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          textAlign : "center"
        }}
      >
        {SignUp()}
      </Drawer>
    </>
  );
};

export default SignUpDrawer;
