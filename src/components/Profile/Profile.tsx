interface ProfileProps {
  name: string
  age: number
}

function Profile({ name, age }: ProfileProps) {
  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <button>ดูโปรไฟล์เต็ม</button>
    </>
  )
}

export default Profile
