import reactDOM from 'react-dom'
import Primeiro from './components/Primeiro'
import BomDia from './components/BomDia'
import {BoaTarde, BoaNoite} from './components/Multiplos' // Multi from '...' -> Multi.BoaTarde
import Saudacao from './components/Saudacao'
import Pai from './components/Pai'
import Filho from './components/Filho'


reactDOM.render(<Primeiro />, document.getElementById('root'))
reactDOM.render(<BomDia nome="Leonardo" />, document.getElementById('root'))

reactDOM.render(
    <div>
        <BoaTarde nome="Leonardo" />
        <BoaNoite nome="Lais" />
    </div>
, document.getElementById('root'))

reactDOM.render(<Saudacao nome="Leonardo" tipo="Saudacao"/>, document.getElementById('root'))

reactDOM.render(
    <div>
        {/* <Pai nome="Leonardo" sobrenome="Montero" /> */}
        <Pai nome="Leo" sobrenome="Torres">
            <Filho nome="Leonardo" sobrenome="Montero" />
            <Filho nome="Lais" sobrenome="Rorato" />
            <Filho />
        </Pai>
    </div>
, document.getElementById('root'))
