import React, { useEffect, useRef } from "react";
import { Text, Modal, View, Animated, StyleSheet } from "react-native";
import { styles } from "./modal.styles.js";

function AlertModal({ modalVisible, text, onClose }) {
    const translateX = useRef(new Animated.Value(-300)).current; // Inicializa a posição fora da tela
    const lineWidth = useRef(new Animated.Value(100)).current; // Largura inicial da linha

    useEffect(() => {
        if (modalVisible) {
            // Anima o modal para aparecer
            Animated.timing(translateX, {
                toValue: 0, // Move para a posição original
                duration: 300, // Duração da animação do modal
                useNativeDriver: true,
            }).start();

            // Anima a linha para diminuir
            Animated.timing(lineWidth, {
                toValue: 0, // Diminui a largura da linha até 0
                duration: 2000, // 3000 milissegundos = 3 segundos
                useNativeDriver: false, // não pode usar useNativeDriver com width
            }).start();

            const timer = setTimeout(() => {
                onClose(); // Fecha o modal após 3 segundos
            }, 2000); // 3000 milissegundos = 3 segundos

            return () => clearTimeout(timer);
        } else {
            // Quando o modal é fechado, reseta a largura da linha
            lineWidth.setValue(300);
            translateX.setValue(-300); // Volta para fora da tela
        }
    }, [modalVisible]);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <Animated.View style={[styles.modalContent, { transform: [{ translateX }] }]}>
                    <Text style={styles.modalText}>{text}</Text>
                    <Animated.View
                        style={[
                            styles.line,
                            { width: lineWidth } // Largura controlada pela animação
                        ]}
                    />
                </Animated.View>
            </View>
        </Modal>
    );
}

export default AlertModal;
