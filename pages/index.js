export default function Home(props) {
  return (
    <div>
      <ul>
        {props.messages.map((message, i) => <li key={i}>{message}</li>)}
      </ul>
    </div>
  )
}

export const getStaticProps = () => {
  return {
    props: {
      messages: ["Message One", "Message Two", "Message Three"]
    }
  }
}