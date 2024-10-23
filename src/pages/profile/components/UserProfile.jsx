import React from 'react';
import { Container, Grid, Title, Text, Image, Divider, Group, Button, Paper } from '@mantine/core';
import { motion } from 'framer-motion';
import "../../../assets/styles/Profile.css";
import Header from "../../../components/Shared/Header";

const Profile = () => {
  return (
    <div className='main-body'>
      <Header about={true} />
      <Container mt={700} mb={150}>
        <Title order={2} align="center" mt="lg">
          عن المنصة
        </Title>
        <Text align="center" >
          من خلال هذه المنصة، نساعد أهالي سنجار في معرفة استحقاقهم للتعويضات الحكومية بعد الحرب.
          إذا كنت قد تعرضت لأضرار في الممتلكات أو إصابات أو خسائر، تتيح لك منصتنا التحقق بسهولة مما إذا كنت مؤهلاً للحصول على المساعدة.
        </Text>

        <Divider my="sm" />

        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 20 }}
        >
          <Grid mt="xl" align="center">
            <Grid.Col span={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src={`${process.env.PUBLIC_URL}/Mosul.png`}
                alt="Logo 1"
                style={{ maxWidth: '200px', width: '100%', height: 'auto' }}
              />
            </Grid.Col>
            <Grid.Col span={12} md={6}>
              <Paper padding="xl" style={{ borderRadius: '8px', backgroundColor: '#291a35', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                <Title order={3} align="center" mt="xl" style={{ fontFamily: 'monospace' }} pb={5} pt={10}>
                  Mosul Space
                </Title>
                <Text dir="rtl" align="center" pb={10} pt={1}>
                  هي مركز للابتكار والتكنولوجيا في الموصل، العراق، تأسس في عام 2014. يهدف إلى تعزيز ريادة الأعمال والتكنولوجيا بين الشباب لدعم القطاع الخاص وزيادة فرص العمل. من خلال برامج متنوعة تشمل احتضان الأعمال والتدريب المتخصص، دعمت مساحة الموصل أكثر من 10,000 شاب في تطوير مهاراتهم المهنية.
                </Text>
              </Paper>
            </Grid.Col>
          </Grid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 20 }}
          transition={{ delay: 0.1 }}
        >
          <Grid mt="xl" align="center">
            <Grid.Col span={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src={`${process.env.PUBLIC_URL}/HiiL.png`}
                alt="Logo 2"
                style={{ maxWidth: '200px', width: '100%', height: 'auto' }}
              />
            </Grid.Col>
            <Grid.Col span={12} md={6}>
              <Paper padding="xl" style={{
                borderRadius: '8px',
                backgroundColor: '#291a35',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              }}>
                <Title order={3} align="center" mt="xl" style={{ fontFamily: 'monospace' }} pt={10}>
                  Iraq justice innovation initiative
                </Title>
                <Text dir="rtl" align="center" pb={10} pt={10}> مبادرة الابتكار من أجل العدالة في العراق – حلول لتمكين الأفراد من حل مشاكلهم القانونية فيما يتعلق بالإسكان والأراضي والممتلكات</Text>
              </Paper>
            </Grid.Col>

          </Grid>
        </motion.div>

        <Group position="center" direction="column" spacing="xs" style={{ textAlign: 'center' }}>
          <Text
            dir="rtl"
            mt="md"
            color="dimmed"
            align="center"
            style={{ fontSize: '18px', maxWidth: '600px', margin: 'auto' }}
          >
            تم تنفيذ هذا العمل من قبل شركة Soft-Y لمزيد من التفاصيل زوروا موقعنا{' '}
            <Button component="a" href="https://soft-y.org/" variant="subtle" size="md" compact>
              اضغط هنا
            </Button>
          </Text>
        </Group>
      </Container>
    </div>
  );
};

export default Profile;
