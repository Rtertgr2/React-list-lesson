// ข้อมูลวิชาที่ลงทะเบียน (array ของ object)
// แต่ละรายการมี id (string) และ subjectName (string)
const subjects: { id: string; subjectName: string }[] = [
  { id: 'CS101', subjectName: 'เทคโนโลยีสารสนเทศพื้นฐาน' },
  { id: 'CS202', subjectName: 'การเขียนโปรแกรมบนเว็บ' },
  { id: 'CS305', subjectName: 'ฐานข้อมูลและการจัดการข้อมูล' },
  { id: 'CS410', subjectName: 'ปัญญาประดิษฐ์เบื้องต้น' },
]

function SubjectList() {
  return (
    <div>
      <h2>รายวิชาที่ลงทะเบียน</h2>
      <ul>
        {/* ใช้ .map() วนลูป และกำหนด key={item.id} (ไม่ใช้ index) */}
        {subjects.map((item) => (
          <li key={item.id}>
            <strong>{item.id}</strong> — {item.subjectName}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SubjectList
