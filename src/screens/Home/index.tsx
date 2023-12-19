import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import moment from 'moment';


import { Participant } from "../../components/Participant";

export function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');




    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert("Participante existe", "Já existe esse nome.")
        }

        setParticipants(prevState => [...prevState, participantName])
        setParticipantName('');
    }

    function handleParticipantRemove(name: string) {

        Alert.alert("Remover", `Tem certeza que deseja remover ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participants => participants !== name))
                
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }


    
    const currentDate = moment().format('DD-MM-YYYY');

    return (
        <View style={styles.container}>
            <Text style={styles.eventName} >Lista</Text>
            <Text style={styles.eventDate} >{currentDate}</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor={'gray'}
                    onChangeText={setParticipantName}
                    value={participantName}
                /*keyboardType="numeric"*/ //adaptação de acordo com o tipo de conteúdo
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>Nada encontratado, Adicione!</Text>
                )}
            />

        </View>
    )
}
