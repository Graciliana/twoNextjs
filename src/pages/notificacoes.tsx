
import Layout from '../components/template/Layout'
import { AppConsumer } from '../data/context/AppContext'


export default function Notificacoes(){
 
  return (
    <div >
    <Layout titulo = "Notificações"
    subtitulo="Aqui você irá gerenciar as suas notificaçoes"
    >
      <AppConsumer>
        {dados => <h3>{dados.nome}</h3>}
        </AppConsumer>
        
    

    </Layout>
    </div>
  )
}
