import React from 'react';
import { Container, Title, Text, Image, Divider, Group, Button, Paper } from '@mantine/core';
import { motion } from 'framer-motion';
import "../../../assets/styles/Profile.css";
import Header from "../../../components/Shared/Header";
import { IconExclamationMark } from '@tabler/icons-react';

const Profile = () => {
  return (
    <div className="scrollable-content">
      <Header about={true} />
      <Container className="about-page-container" mt={100} mb={150}>
        <Title order={2} ta="center" mt="lg">
          عن المنصة
        </Title>
        <Text ta="center" className="about-intro">
          من خلال هذه المنصة، نساعد أهالي سنجار في معرفة استحقاقهم للتعويضات الحكومية بعد الحرب.
          إذا كنت قد تعرضت لأضرار في الممتلكات أو إصابات أو خسائر، تتيح لك منصتنا التحقق بسهولة مما إذا كنت مؤهلاً للحصول على المساعدة.
        </Text>

        <Divider my="sm" />

        <motion.div
          className="about-section about-section-stacked"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 20 }}
        >
          <Image
            src="/Mosul.png"
            alt="Mosul Space Logo"
            className="about-logo about-logo-mosul"
          />
          <Paper p="xl" className="about-card about-card-wide">
            <Title order={3} ta="center" className="about-card-title">
              Mosul Space
            </Title>
            <Text dir="rtl" ta="center" className="about-card-text">
              هي مركز للابتكار والتكنولوجيا في الموصل، العراق، تأسس في عام 2014. يهدف إلى تعزيز ريادة الأعمال والتكنولوجيا بين الشباب لدعم القطاع الخاص وزيادة فرص العمل. من خلال برامج متنوعة تشمل احتضان الأعمال والتدريب المتخصص، دعمت مساحة الموصل أكثر من 10,000 شاب في تطوير مهاراتهم المهنية.
            </Text>
          </Paper>
        </motion.div>

        <motion.div
          className="about-section about-section-stacked"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 20 }}
          transition={{ delay: 0.1 }}
        >
          <Image
            src="/HiiL.png"
            alt="HiiL Logo"
            className="about-logo about-logo-hiil"
          />
          <Paper p="xl" className="about-card about-card-wide about-card-hiil">
            <Title order={3} ta="center" className="about-card-title">
              Iraq justice innovation initiative
            </Title>
            <Text dir="rtl" ta="center" className="about-card-text">
              مبادرة الابتكار من أجل العدالة في العراق – حلول لتمكين الأفراد من حل مشاكلهم القانونية فيما يتعلق بالإسكان والأراضي والممتلكات
            </Text>
          </Paper>
        </motion.div>

        <motion.div
          className="about-section about-section-stacked about-section-softy"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 20 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/softy.png"
            alt="Soft-Y Logo"
            className="about-logo about-logo-softy"
          />
          <Paper p="xl" className="about-card about-card-wide about-card-softy">
            <Text dir="rtl" ta="center" className="about-card-heading">
              تم تنفيذ هذا العمل من قبل شركة Soft-Y
            </Text>
            <Text dir="rtl" ta="center" className="about-card-text">
              شركة soft-y هي فريق من المهندسين والمصممين الذين يقدمون حلول تكنولوجية متقدمة ويهدفون إلى تطوير نماذج الأعمال من خلال استخدام أدوات تحليل البيانات. تشمل خدماتنا حلول برمجية، والاستشارات البرمجية، والإرشاد، والتصميم.
            </Text>
            <Group justify="center" mt="md" className="about-actions">
              <Button
                component="a"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdtQGG65Xdxce-9ig4JO08r9iY1tdHbFzvMpjkLxD2Y0713ag/viewform?usp=sf_link"
                variant="subtle"
                color="red"
                size="md"
                leftSection={<IconExclamationMark />}
              >
                الإبلاغ عن خطأ
              </Button>
              <Button component="a" href="https://soft-y.org/" variant="subtle" size="md">
                زيارة موقعنا
              </Button>
            </Group>
          </Paper>
        </motion.div>
      </Container>
    </div>
  );
};

export default Profile;
