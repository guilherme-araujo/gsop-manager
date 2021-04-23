import styles from './styles.module.css'

interface props {
  id: string
  name: string
  descr: string
  binaryPath: string
}

export default function ProgramDescription(props: props) {
  return (
    <>
      <p className={styles.attributes}>
        <strong>Program created with id: </strong> {props.id}
      </p>
      <p className={styles.attributes}>
        <strong>Name: </strong> {props.name}
      </p>
      <p className={styles.attributes}>
        <strong>Description: </strong> {props.descr}
      </p>
      <p className={styles.attributes}>
        <strong>File path: </strong>
        {props.binaryPath}
      </p>
    </>
  )
}
