import './styles.css'

type Props = {
    description: string
}

export default function ButtonPage({description} : Props){
    return(
        <div className='rm-button-page'>
            <p>{description}</p>
        </div>
    )
}