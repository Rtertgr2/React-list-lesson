export default function HomePage() {
  return (
    <section className="page">
      <span className="tag">บทเรียน</span>
      <h1 className="sticky-heading">บันทึกการเรียน React</h1>
      <p className="lead">
        สมุดจดโน้ตเล็กๆ สำหรับฝึกคอมโพเนนต์ ทดลอง props/state และจัดการรายการด้วยตัวเอง
      </p>
      <div className="card">
        <h2 style={{ marginTop: 0 }}>ในสมุดเล่มนี้มีอะไร</h2>
        <ul className="list">
          <li className="item">
            <span className="txt">หน้า Greeting — ทดลองรับ prop เข้าไปแสดง</span>
          </li>
          <li className="item">
            <span className="txt">หน้า วิชา — แสดงรายการด้วย .map() และ key ที่ถูกต้อง</span>
          </li>
          <li className="item">
            <span className="txt">หน้า Profile — ใช้ Fragment แทน div ห่อ</span>
          </li>
          <li className="item">
            <span className="txt">หน้า Todo — เพิ่ม / แก้ / ลบ / เปลี่ยนสถานะ</span>
          </li>
          <li className="item">
            <span className="txt">หน้า Products — ดึงข้อมูลจาก DummyJSON API แสดงแบบ grid + ค้นหา + กรองหมวดหมู่ + pagination</span>
          </li>
          <li className="item">
            <a href="#/guide" className="txt" style={{ color: 'var(--terra)', textDecoration: 'none' }}>หน้าคู่มือ — วิธี Deploy ขึ้น Firebase Hosting ทีละขั้นตอน</a>
          </li>
        </ul>
      </div>
      <div className="card">
        <h2>เคล็ดลับวันนี้</h2>
        <p style={{ margin: 0, color: 'var(--ink-soft)' }}>
          ลองกดเมนูด้านบนเพื่อสลับหน้า แต่ละหน้าจะเลื่อนเข้าออกด้วยทิศทางที่สอดคล้อง
          และกดปุ่มแล้วดูวงกลม ripple ที่ขยายจากจุดที่คลิก
        </p>
      </div>
    </section>
  )
}
