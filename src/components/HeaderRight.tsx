package src.components;

import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught in ErrorBoundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <Text style={styles.errorText}>Something went wrong. Please try again later.</Text>;
        }
        return this.props.children; 
    }
}

const HeaderRight = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const handleNavigation = async () => {
        setLoading(true);
        try {
            await navigation.navigate('NextScreen');
        } catch (error) {
            console.error('Navigation error:', error);
            alert('Failed to navigate. Please try again.'); 
        } finally {
            setLoading(false);
        }
    };

    return (
        <ErrorBoundary>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigation} style={styles.button} disabled={loading}>
                    {loading ? (
                        <ActivityIndicator size="small" color="#FFFFFF" />
                    ) : (
                        <>
                            <Ionicons name="arrow-forward" size={24} color="white" />
                            <Text style={styles.buttonText}>Next</Text>
                        </>
                    )}
                </TouchableOpacity>
            </View>
        </ErrorBoundary>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 10,
        flex: 1,
    },
    button: {
        backgroundColor: '#007BFF',
        borderRadius: 5,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        opacity: loading ? 0.5 : 1,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        marginLeft: 5,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
    },
});

export default HeaderRight;