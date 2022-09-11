
import Layout from '../components/template/Layout'
import { AppConsumer } from '../data/context/AppContext'
import useAppData from '../data/hook/useAppData';

export default function Notificacoes(){
 const ctx = useAppData()
  return (
 
    <Layout titulo = "Notificações"
    subtitulo="Aqui você irá gerenciar as suas notificaçoes"
    >
      <AppConsumer>
        {dados => <h3>{ctx.tema}</h3>}
        </AppConsumer>
        
    </Layout>
   
  )
}
