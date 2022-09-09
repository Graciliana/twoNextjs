import { Iconecheckin, IconeHome } from "../icons"
import MenuItem from "./MenuItem"
import { IconeEquipamentos, IconeUsuario, IconeAjuste, IconeRelatorio, IconeNovidades, IconeSair } from '../icons/index';
import Logo from "./Logo";
export default function MenuLateral(){
  return (
    <aside className={`flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900 `}>
      <div className={`
      flex flex-col items-center justify-center
      bg-gradient-to-r from-indigo-500 
       via-blue-600 to-purple-800
      h-20 w-40`}>
        <Logo />
        
      </div>
     <ul className="flex-grow">
      <MenuItem url='/' texto="Início" icone={IconeHome}/>
      <MenuItem url='/checkin' texto="checkin" icone={Iconecheckin}/>
      <MenuItem url='/equipamentos' texto="Equipamentos" icone={IconeEquipamentos}/>
      <MenuItem url='/usuarios' texto="Usuário" icone={IconeUsuario}/>
      <MenuItem url='/relatorios' texto="Relatórios" icone={IconeRelatorio}/>
      <MenuItem url='/ajuste' texto="Ajuste" icone={IconeAjuste}/>
      <MenuItem url='/notificacoes' texto="Notificacoes" icone={IconeNovidades}/>
      
     </ul>
     <ul >
      <MenuItem texto="Sair" icone={IconeSair} onClick={() => console.log('logout')}
      className={`text-red-600 dark:text-red-400 hover:bg-red-500 hover:text-white dark:hover:text-white`}
      />
     </ul>
    </aside>
  )
}