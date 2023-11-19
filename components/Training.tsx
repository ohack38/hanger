import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { StyleSheet, ScrollView, View, Alert } from 'react-native'
import { Button, Input, ThemeProvider } from '@rneui/themed'
import { Session } from '@supabase/supabase-js'

//This component handles creation of new excercises.
//These items can be used to create protocols

export default function Training(){
    // change to ref instead of useState?
    const [loading, setLoading] = useState<boolean>(true)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [hangTime, setHangTime] = useState<number>(0)
    const [restTime, setRestTime] = useState<number>(0)
    const [intensity, setIntensity] = useState<number>(0)
    const [weight, setWeight] = useState<number>(0)
    const [weightCategory, setWeightCategory] = useState('')
    const [weightTarget, setWeightTarget] = useState<number>(0)
    const [repetitions, setRepetitions] = useState<number>(0)

    async function createTraining({
        title,
        description,
        hangTime,
        restTime,
        intensity,
        weight,
        weightCategory,
        weightTarget,
        repetitions
    }:{
        title: string
        description: string
        hangTime: number
        restTime: number
        intensity: number
        weight?: number
        weightCategory?: number
        weightTarget?: number
        repetitions?: number
    }) {
      try {
        setLoading(true)
        // create new training entry to supabase
         
      } catch (error) {
        if (error instanceof Error) {
          Alert.alert(error.message)
        }
      } finally {
        setLoading(false)
      } 
    }

    //ThemeProvider should be in App.tsx
    return(
        <ThemeProvider>
            <ScrollView>
                <View>
                    <Input
                         placeholder='Title'
                         //ref={titleRef}
                    />
                </View>               
                 <View>
                    <Input
                         placeholder='Description'
                    />
                </View>

            </ScrollView>
        </ThemeProvider>
    )
}