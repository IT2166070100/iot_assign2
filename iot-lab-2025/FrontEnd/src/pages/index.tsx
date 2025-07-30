import Layout from "../components/layout";
import cafeBackgroundImage from "../assets/images/bg-cafe-1.jpg";
import ajPanwitImage from "../assets/images/aj-panwit.jpg";
import coffeeImage from "../assets/images/coffee-1.jpg";

export default function HomePage() {
  return (
    <Layout>
      <section
        className="h-[500px] w-full text-white bg-orange-800 bg-cover bg-blend-multiply flex flex-col justify-center items-center px-4 text-center"
        style={{
          backgroundImage: `url(${cafeBackgroundImage})`,
        }}
      >
        <h1 className="text-5xl mb-2">ยินดีต้อนรับสู่ IoT Library & Cafe</h1>
        <h2>ร้านกาแฟที่มีหนังสืออยู่นิดหน่อยให้คุณได้อ่าน</h2>
      </section>

      <section className="container mx-auto py-8">
        <h1>เกี่ยวกับเรา</h1>

        <div className="grid grid-cols-3 gap-4">
          <p className="text-left col-span-2">
            IoT Library & Cafe เป็นร้านกาแฟบรรยากาศอบอุ่นที่มีหนังสือเทคโนโลยี IoT ให้คุณได้เลือกอ่านและเรียนรู้สิ่งใหม่ ๆ คาเฟ่แห่งนี้ก่อตั้งโดย ผศ.ดร. ปานวิทย์ ธุวะนุติ ซึ่งเป็นอาจารย์สอนวิชา Internet of Things ภายในมหาวิทยาลัย และยังใช้เป็นสถานที่สำหรับจัดกิจกรรมหรือเวิร์กช็อปเกี่ยวกับ IoT โดยเฉพาะ ตัวร้านมีพื้นที่สำหรับนั่งอ่านหนังสือ พูดคุยแลกเปลี่ยนหรือทำงานกลุ่ม เหมาะสำหรับผู้ที่สนใจเทคโนโลยีและนวัตกรรม
          </p>

          <div>
            <img src={ajPanwitImage} alt="Panwit Tuwanut" className="h-full w-full object-cover" />
          </div>
        </div>
        <p className="text-right mt-8">
          {/* TODO: ชื่อของตนเอง, รหัสประจำตัวนักศึกษา และแนะนำคาเฟ่นี้ต่ออีกสักหน่อย + ใส่รูปของตนเอง (ไม่จำเป็นหากไม่สะดวกใจใส่รูป) */}
          ปัจจุบันคาเฟ่และห้องสมุดแห่งนี้อยู่ในช่วงการดูแลของ นายนวชาต องค์เจริญ รหัสนักศึกษา 66070100  ซึ่งคอยให้บริการทั้งในเรื่องเครื่องดื่ม กาแฟ ขนม และข้อมูลสำหรับผู้ที่เข้ามาศึกษาหรือทดลองใช้อุปกรณ์ IoT ภายในร้านเอง นอกจากนี้ยังสามารถเข้าถึงบริการต่าง ๆ อย่าง Wi-Fi พื้นที่นั่งอ่าน เครือข่ายสำหรับทดลองเชื่อมต่ออุปกรณ์ ให้บรรยากาศที่ผสมผสานระหว่างการพักผ่อนกับการเรียนรู้อย่างลงตัว จึงเหมาะมากสำหรับนักศึกษา ผู้ที่สนใจเทคโนโลยี หรือผู้ที่มองหาคาเฟ่ที่ตอบโจทย์ทั้งการพักผ่อนและเพิ่มทักษะใหม่ ๆ ในสาย IT
        </p>
      </section>

      <section className="w-full flex justify-center">
        <img src={coffeeImage} alt="Coffee" className="w-full" />
      </section>
    </Layout>
  );
}
