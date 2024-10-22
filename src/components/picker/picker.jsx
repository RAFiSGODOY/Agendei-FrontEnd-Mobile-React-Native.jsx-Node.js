import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";
import { styles } from "./picker.styles";


function CustomPicker({ selectedValue, options, onValueChange }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <TouchableOpacity 
                style={styles.pickerContainer} 
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.selectedValue}>
                    {selectedValue || "Selecione um horário"}
                </Text>
            </TouchableOpacity>

            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <FlatList
                            data={options}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.option}
                                    onPress={() => {
                                        onValueChange(item);
                                        setModalVisible(false);
                                    }}
                                >
                                    <Text style={styles.optionText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
}


export default CustomPicker;
