import {Header} from './Header'

export function Footer(){
    return (
        <footer>
            <p>Holding the copyright {new Date(Date.now()).getFullYear()}</p>
            {new Date(Date.now()).getDay() == 1 && <h6>it is monday</h6>}
        </footer>
    )
}