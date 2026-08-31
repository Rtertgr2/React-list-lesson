const subjects = [
  { id: 'CS101', name: 'เทคโนโลยีสารสนเทศพื้นฐาน' },
  { id: 'CS202', name: 'การเขียนโปรแกรมบนเว็บ' },
  { id: 'CS305', name: 'ฐานข้อมูลและการจัดการข้อมูล' },
  { id: 'CS410', name: 'ปัญญาประดิษฐ์เบื้องต้น' },
]

export default function SubjectsPage() {
  const rows = subjects
    .map(
      (s) =>
        `<tr><td><code>${s.id}</code></td><td>${s.name}</td></tr>`
    )
    .join('')

  return (
    <section className="page">
      <span className="tag">List + key</span>
      <h1>วิชาที่ลงทะเบียน</h1>
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <table>
          <thead>
            <tr>
              <th>รหัส</th>
              <th>ชื่อวิชา</th>
            </tr>
          </thead>
          <tbody dangerouslySetInnerHTML={{ __html: rows }} />
        </table>
      </div>
      <p className="note">
        แสดงด้วย <code>.map()</code> และกำหนด <code>key={'{item.id}'}</code> ไม่ใช่ index
      </p>
    </section>
  )
}
