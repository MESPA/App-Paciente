import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native'

const Pacients = ({item,setModalVisible,PacienteEditar}) => {
    const {paciente,fecha,id} = item
    
    const formatearfecha = () =>{
      const NuevaFecha = new Date(fecha)

      const opciones = {
          weekday:'long',year:'numeric',
          month:'long',day:'numeric'

      }
      return NuevaFecha.toLocaleDateString('es-ES',opciones)
    }

  return (
    <View style={styles.contenedor}>
<Text style={styles.label}>Paciente:</Text>
<Text style={styles.Texto} >{paciente}</Text>
<Text style={styles.fecha}>{formatearfecha(fecha)}</Text>

<View style={styles.btnContenedor}>
  <Pressable style={[styles.btn,styles.btnEditar  ]}
  onLongPress={() => {
    setModalVisible(true)
    PacienteEditar(id)
  }}
  >
    <Text style={styles.btnTexto}>Editar</Text>
  </Pressable>

  <Pressable style={[styles.btn, styles.btnEliminar  ]}>
    <Text style={styles.btnTexto}>Eliminar</Text>
  </Pressable>
</View>
    </View>

   

  )
}

const styles = StyleSheet.create({
  contenedor:{

    backgroundColor:'#fff',
    padding:30,
    borderBottomColor:'grey',
    borderBottomWidth:1


  },
  label:{
    color:'#374151',
    textTransform:'uppercase',
    fontWeight:'700',
    marginBottom:10

  },
  Texto:{
    color:'blue',
    fontSize:20,
    fontWeight:'700',
    marginBottom:10

  },
  fecha:{
color:'#374151'
  },
  btnContenedor:{
flexDirection:'row',
justifyContent:'space-between',
marginTop:20


  },
  btn:{
    paddingVertical:5,
    paddingHorizontal:20,
    borderRadius:15

  },btnEditar:{
    backgroundColor:'green',
    
  },
  btnEliminar:{
    backgroundColor:'red'
  },btnTexto:{
    color:'#fff',
    fontWeight:'800',
    fontSize:20
  }
})

export default Pacients