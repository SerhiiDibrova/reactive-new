package com.myfabricapp.screens

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { View, Text, Image, StyleSheet, ActivityIndicator, Dimensions } from 'react-native'

const TrendingScreen = () => {
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const apiKey = 'YOUR_API_KEY'

    useEffect(() => {
        const fetchGifs = async () => {
            try {
                const response = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`)
                setGifs(response.data.data)
            } catch (err) {
                setError('Failed to fetch GIFs')
            } finally {
                setLoading(false)
            }
        }
        fetchGifs()
    }, [])

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />
    }

    if (error) {
        return <Text>{error}</Text>
    }

    const { width } = Dimensions.get('window')
    const gifSize = width / 3 - 10

    return (
        <View style={styles.container}>
            {gifs.map(gif => (
                <View key={gif.id} style={styles.gifContainer}>
                    <Image source={{ uri: gif.images.fixed_height.url }} style={{ width: gifSize, height: gifSize }} />
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    gifContainer: {
        margin: 5,
    },
})

export default TrendingScreen