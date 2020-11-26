import { firebase }    from './config'
import { UserContext } from '../src/UserContext'
import { useContext}   from 'react'

export const SignOut = function(){
    const {setUser} = useContext(UserContext)
    firebase
      .auth()
      .signOut()
      .then(() =>{
        setUser(null)
      })
      .catch(function(err) {
        console.log(err)
      })
    return ({})
}
