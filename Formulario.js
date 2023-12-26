import React, { useEffect, useState } from 'react'
import {Modal,Text,SafeAreaView,StyleSheet,View,TextInput,ScrollView, Pressable,Alert} 
from 'react-native'
import DatePicker from '@dietime/react-native-date-picker';

const Formulario = ({modalVisible,setModalVisible,setPacientes,Pacientes,paciente:pacienteobj}) => {

    const [paciente,setPaciente] = useState('')

    const [id,setId] = useState('')
    const [propietario,setPropietario] = useState('')
    const [email,setEmail] = useState('')
    const [telefono,setTelefono] = useState('')
    const [sintomas,setSintomas] = useState('')
    const [fecha, setFecha] = useState()
    
    useEffect( () => {
        if (Object.keys(pacienteobj).length > 0) {
            setId(pacienteobj.id)
            setPaciente(pacienteobj.paciente)
            setPropietario(pacienteobj.propietario)
            setEmail(pacienteobj.email)
            setTelefono(pacienteobj.telefono)
            setSintomas(pacienteobj.sintomas)
            setFecha(pacienteobj.fecha)
        }
    },[])
    console.log(pacienteobj);


    const handleCitas = () =>{

       if ([paciente,propietario,email,telefono,sintomas,fecha].includes('')) {
            Alert.alert(
                'Error',
                'Todos los campos son Obligatorios',
                [{text: 'Ok'}]
          
            )
         
            return
            
       }
       const NuevoPaciente ={
    
        paciente,
        propietario,
        email,
        telefono,
        sintomas,
        fecha

       }

       if (id) {
        //editar
       }else{
        //nuevo registro
        NuevoPaciente.id = Date.now()
        setPacientes([...Pacientes,NuevoPaciente]);

        Alert.alert(
          'Registro Agregado',
          'Exitosamente',
          [{text: 'Ok'}]
    
      )
       }
     
      setModalVisible(!modalVisible);
      setPaciente('')
      setPropietario('')
      setEmail('')
      setTelefono('')
      setSintomas('')
    }

  return (
    <Modal
    animationType='slice'
    visible={modalVisible}
    >
        <SafeAreaView style={styles.contenedor}>
            <ScrollView>
            <Text style={styles.Titulo}>Nueva {''}
                <Text style={styles.tituloNegritaBold}>Cita</Text>
            </Text>

                <Pressable onLongPress={() => setModalVisible(!modalVisible)} style={styles.btnCerrar}>
                    <Text style={styles.btnTextCerrar}>
                        X Cerrar Modal
                    </Text>
                    
                </Pressable>

            <View style={styles.campo}>
                <Text style={styles.label}>Nombre de Paciente</Text>
                <TextInput
                style={styles.input}
                placeholder='Nombre Paciente'
                placeholderTextColor='#666'
                value={paciente}
                onChangeText={setPaciente}
                ></TextInput>
            </View>
            <View style={styles.campo}>
                <Text style={styles.label}>Nombre de Propietario</Text>
                <TextInput
                style={styles.input}
                placeholder='Nombre Propietario'
                placeholderTextColor='#666'
                value={propietario}
                onChangeText={setPropietario}
                ></TextInput>
            </View>
            <View style={styles.campo}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                style={styles.input}
                placeholder='Email'
                placeholderTextColor='#666'
                keyboardType='email-address'
                value={email}
                onChangeText={setEmail}                
                ></TextInput>
            </View>
            <View style={styles.campo}>
                <Text style={styles.label}>Telefono</Text>
                <TextInput
                style={styles.input}
                placeholder='Telefono'
                placeholderTextColor='#666'
                keyboardType='phone-pad'
                value={telefono}
                onChangeText={setTelefono}
                ></TextInput>
            </View>

            <View style={[styles.campo]}>
            <Text style={styles.label}>Fecha de Alta</Text>
            <DatePicker
                value={fecha}
                onChange={(value) => setFecha(value)}
                format="dd-mm-yyyy"
            />
        </View>

            <View style={[styles.campo]}>
                <Text style={styles.label}>Sintomas</Text>
                <TextInput
                style={[styles.input,styles.sintomas]}
                placeholder='Sintomas'
                placeholderTextColor='#666'
                multiline={true}
                numberOfLines={4}
                value={sintomas}
                onChangeText={setSintomas}
                ></TextInput>
            </View>

            <Pressable style={styles.btnAgregarPaciente}
            onPress={handleCitas}
            >
        <Text style={styles.btnTextoAgregarPaciente}>Agregar Paciente</Text>
      </Pressable>

            </ScrollView>
        </SafeAreaView>
     
    </Modal>
  )
}

const styles = StyleSheet.create({
    contenedor:{
        backgroundColor:'#b5e6ff',
        flex:1,
    },
    Titulo:{
        fontSize:20,
        textAlign:'center',
        marginTop:10
        
    },
    tituloNegritaBold:{
        fontWeight:'900'
    },campo:{
        marginTop:10,
        marginBottom:10,
        marginHorizontal:30
    },
    label:{
        color:'#000',
        marginBottom:10,
        marginBottom:10,
        fontSize:20,
        fontWeight:'600'

    },
    input:{
       
        backgroundColor:'#fff',
        padding:15,
        borderRadius:15,
        

    },
    sintomas:{
        height:100
    },
    btnCerrar:{
        backgroundColor:'#167bc4',
        marginHorizontal:80,
        padding:10,
        borderRadius:10,
        marginTop:30,
        marginBottom:10
        
    },
    btnTextCerrar:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'900'

    },
    btnAgregarPaciente:{
        backgroundColor:'#00c5ac',
        padding:10,
        marginHorizontal:40,
        marginTop:15,
        borderRadius:10,
        marginBottom:30
    },
    btnTextoAgregarPaciente:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'900'
    }
    
})

export default Formulario
