interface GreetingProps {
  message: string
}

function Greeting({ message }: GreetingProps) {
  return (
    <div className="greeting">{message}</div>
  )
}

export default Greeting
