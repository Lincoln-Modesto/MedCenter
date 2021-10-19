import { Route, Switch } from 'react-router-dom'

import Modal from '../components/Modal'

export default function Routes(){

    return(
        <Switch>      
            <Route exact path='/pacient/:id' component={Modal}/>
        </Switch>
    )
}