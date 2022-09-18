
import Layout from '../components/template/Layout'
import useAppData from '../data/hook/useAppData'

export default function Notificacoes(){
 const { alternarTema} = useAppData()
  return (
    <Layout titulo = "Notificações"
    subtitulo="Aqui você irá gerenciar as suas notificaçoes"
    >
       <button onClick={alternarTema}>
      Alterar Tema
       </button>
    </Layout>
   
  )
}
