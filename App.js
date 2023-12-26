import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable,FlatList } from "react-native";
import Formulario from "./components/Formulario";
import Pacients from "./components/Pacients";


export default function App() {
  //useStates
  const[modalVisible, setModalVisible] = useState(false)
  const[Pacientes,setPacientes]=useState([])
  const [paciente, setPaciente] = useState({})

  const PacienteEditar = id =>{
   const pacienteEditar = Pacientes.filter( paciente => paciente.id === id )
   setPaciente(pacienteEditar[0]);
  }

  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.Titulo}>
        Administrador de Citas {""}
        <Text style={styles.tituloBold}>Pacientes</Text>
      </Text>

      <Pressable onPress={() => setModalVisible()} style={styles.btnNuevaCita}>
        <Text style={styles.btnTexto}>Nueva Cita</Text>
      </Pressable>

      {
      Pacientes.length === 0 
      ? 
      <Text style={styles.textoflat}>No hay pacientes</Text>  
      :
      <FlatList
      style={styles.listado}
      data={Pacientes}
      keyExtractor={ (item) => item.id }
      renderItem={ ({item}) => {
console.log(item);
        return(

        <Pacients
        item={item}
        setModalVisible={setModalVisible}
        PacienteEditar={PacienteEditar}
        />

        )
      }}

      />
      }

    <Formulario
    modalVisible={modalVisible}
    setModalVisible={setModalVisible}
    setPacientes={setPacientes}
    Pacientes={Pacientes}
    paciente={paciente}
    />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  Titulo: {
    textAlign: "center",
    fontSize: 30,
    color: "#353161",
    fontWeight: "600",
    marginTop: 10,
  },
  tituloBold: {
    fontWeight: "900",
    color: "#167bc4",
  },
  btnNuevaCita: {
    backgroundColor: "#167bc4",
    marginHorizontal: 30,
    padding:10,
    borderRadius:20,
    marginTop: 20
  },
  btnTexto: {
    textAlign: "center",
    color: "#fff",
    fontWeight:'600',
    fontSize:20
  },
  listado:{
marginTop:50,
marginHorizontal:30
  },
  textoflat:{
    textAlign:'center',
    fontWeight:'800',
    fontSize:20,
    marginTop:20

  }
});
