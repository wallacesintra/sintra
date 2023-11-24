import React from "react";
import { View, StyleSheet, SafeAreaView, Text, FlatList} from "react-native";
import ListItem from "../components/listItem";
import moment from "moment";
import { weatherType } from "../utilities/weatherType";


const Forecast = ({weather}) => {
    //console.log(`forecast ${weather}`)

    const renderItem = ({item}) => (
        <ListItem
            icon = {weatherType[item.weather[0].main]?.icon}
            day = {moment(item.dt_txt).format('MMM Do')}
            date = {moment(item.dt_txt).format('h:mm a')}
            temp = {item.main.temp}
        />
    )

    return (
        <SafeAreaView style = {styles.container}>
            <Text style= {styles.title}>Forecast Report</Text>
            <FlatList
                data={weather}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003049',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        color: 'white',
        alignSelf: 'center'  
    },
    
})
export default Forecast