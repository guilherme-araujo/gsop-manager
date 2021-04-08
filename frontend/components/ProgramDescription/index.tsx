import styles from 'styles.module.css'

interface props {
    id: string,
    name: string,
    descr: string,
    binaryPath: string,
}

export default function ProgramDescription(props: props){

    return (
        <>
            <p className={styles.atrributes}>Program created with id {props.id}</p>
            <p className={styles.atrributes}>Name: {props.name}</p>
            <p className={styles.atrributes}>Description: {props.descr}</p>
            <p className={styles.atrributes}>File path: {props.binaryPath}</p>
        </>
    )
    
}