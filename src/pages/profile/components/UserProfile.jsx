import "../../../assets/styles/Profile.css";
import { Container, Title, Text, Paper, Space, Button, Group, } from '@mantine/core';
import Header from "../../../components/Shared/Header";
// import { GoArrowLeft } from "react-icons/go";
// import { useAuth } from "../../../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { logoutApi } from "../../../api/authApi";
export default function Profile() {
  // const navigate = useNavigate();
  // const { user } = useAuth();
  // const toChat = () => {
  //   navigate("/chat");
  // };
  // const handlLogout = () => {
  //   try {
  //     logoutApi();
  //   } catch (err) {
  //     console.log("error logging out ", err);
  //   }
  // };
  return (
    <div className="main-body">
      {/* <GoArrowLeft className="left-arrow" onClick={toChat} />
      <div className="profile-container">
        <img src={user.picture} alt="Profile" className="user-image" />
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
        <button onClick={handlLogout}>logout</button>
      </div> */}
      <Header />
      <Container size="lg" py="xl">
        <Paper
          shadow="lg"
          p="xl"
          radius="md"
          style={{
            backdropFilter: 'blur(6px)',
            backgroundColor: "#220236",
            marginTop: '20px',
          }}
        >
          <Title
            order={1}
            dir="rtl"
            align="center"
            style={{
              fontSize: 'calc(1rem + 1vw)',
              fontWeight: 'bold',
              color: '#ebc6f7',
              letterSpacing: '1px',
            }}
          >
            Digital Justice
          </Title>
          <Text
            align="center"
            mt="md"
            color="#ebc6f7"
            dir="rtl"
            style={{
              fontSize: '20px',
              maxWidth: '750px',
              margin: 'auto',
            }}
          >
            تسعى شركة Digital Justice إلى تقديم حلول تقنية مبتكرة لتحقيق العدالة الاجتماعية.
            من خلال هذه المنصة، نساعد أهالي سنجار في معرفة استحقاقهم للتعويضات الحكومية بعد الحرب.
            إذا كنت قد تعرضت لأضرار في الممتلكات أو إصابات أو خسائر، تتيح لك منصتنا التحقق بسهولة مما إذا كنت مؤهلاً للحصول على المساعدة.
          </Text>
        </Paper>

        <Space h="xl" />

        <Group position="center" direction="column" spacing="xs" style={{ textAlign: 'center' }}>
          <Text
            dir="rtl"
            mt="md"
            color="dimmed"
            align="center"
            style={{ fontSize: '18px', maxWidth: '600px', margin: 'auto' }}
          >
            تم تنفيذ هذا العمل من قبل شركة Soft-Y لمزيد من التفاصيل زورو موقعنا{' '}
            <Button component="a" href="https://soft-y.org/" variant="subtle" size="md" compact>
              اضغط هنا
            </Button>
          </Text>
        </Group>
      </Container>
    </div >
  );
}
