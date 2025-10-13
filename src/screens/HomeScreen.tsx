import { 
   StyleSheet, 
   Text, 
   View, 
   TouchableOpacity, 
   TextInput, 
   FlatList
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'
import DestinationCard from '../components/DestinationCard'
import { destinationsData } from '../utils/destinationData'

import { Destination } from '../types/destination'


const HomeScreen = () => {
  const navigation = useNavigation();


  const handleDestinationPress = (destination: Destination) => {
   // @ts-ignore: Suppress type error for navigation params
   navigation.navigate('DetailDestination', { destination });
  };

  

  const renderDestinationCard = ({ item }: { item: Destination }) => (
    <DestinationCard
      destination={item}
      onPress={handleDestinationPress}
    />
  )

  return (  
    <View style= {styles.container}>
      <FlatList
        data={destinationsData}
        renderItem={renderDestinationCard}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.destinationList}
        ListHeaderComponent={
          <View>
            <View style = {styles.header}>
               <View>
                  <Text style = {styles.greeting}>Hi,</Text>
                  <Text style = {styles.myName}>Sehan</Text>
               </View>
               <View style = {styles.weather}>
                  <View style = {styles.sunIcon}>
                     <Feather name="sun" size={20} color="#FF7043" />
                  </View>
                  <Text style = {styles.temp}>24°C</Text>
               </View>
            </View>
            <View style={styles.banner}>
               <Text style={styles.bannerText}>Plan Your Summer!</Text>
               <TouchableOpacity style={styles.bannerArrow} onPress={() => navigation.navigate('DetailDestination' as never)}>
                  <Feather name="arrow-right" size={28} color="white" />
               </TouchableOpacity>
            </View>
            
            <View style={styles.searchContainer}>
               <View style={styles.searchBar}>
                  <Feather name="search" size={24} color="black" />
                  <TextInput 
                     style={styles.searchInput}
                     placeholder="Search destinations..."
                     placeholderTextColor="black"
                  />
               </View>
               <TouchableOpacity style={styles.customizeButton}>
                  <Feather name="sliders" size={20} color="#FFFFFFFF" />
               </TouchableOpacity>
            </View>

            <View style = {styles.header2}>
               <View>
                  <Text style = {styles.textDestination}> Popular Destination</Text>
               </View>
               <View>
                  <Text style = {styles.textView}> View All</Text>
               </View>
            </View>
          </View>
        }
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  destinationList: {
    paddingHorizontal: 0,
    paddingBottom: 20,
  },
   container2: {
      backgroundColor: '#FF7043',
      borderRadius: 20,
      padding: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 26,
   }, 

   header2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
   },
   
   container: {
      flex: 1,
      backgroundColor: '#F7F6EF',
      paddingTop: 48,
      paddingHorizontal: 20,
   },
   header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 32,
   },
   banner: {
      backgroundColor: '#FF7043',
      borderRadius: 20,
      padding: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 26,
   }, 
   bannerArrow: {
      backgroundColor: 'rgba(255,255,255,0.25)',
      borderRadius: 35,
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
      height: 140,
   },

   temp: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      fontFamily: 'PlusJakartaSans-VariableFont_wght',
      lineHeight: 20,
      letterSpacing: 0,
   },
   weather: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
   },
   text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
   },
   greeting: {
    fontSize: 20,
    fontWeight: 'light',
    color: 'black',
    fontFamily: 'PlusJakartaSans-VariableFont_wght',
    lineHeight: 20,
    letterSpacing: 0,
   },
   myName: {
    fontSize: 30,
    fontWeight: '800',
    color: 'black',
    fontFamily: 'PlusJakartaSans-VariableFont_wght',
    lineHeight: 30,
    letterSpacing: 0,
   },
   sunIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FAFAF1FF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 3,
   },
   bannerText: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#F3F2E7',
    fontFamily: 'PlusJakartaSans-VariableFont_wght',
    textAlign: 'left',
    flex: 1,
   },
   searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 24,
      gap: 12,
   },
   searchBar: {
      flex: 1,
      height: 48,
      backgroundColor: '#EAE8D3',
      borderRadius: 25,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: '#BEBDB6FF',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
   },
   searchInput: {
      flex: 1,
      fontSize: 14,
      color: '#333',
   },
   customizeButton: {
      width: 48,
      height: 48,
      backgroundColor: '#000000FF',
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
   },
   textDestination: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
      fontFamily: 'PlusJakartaSans-VariableFont_wght',
      lineHeight: 30,
      letterSpacing: 0,
   },
   textView: {
      fontSize: 18,
      fontWeight: 'light',
      color: '#4B4B4BFF',
      fontFamily: 'PlusJakartaSans-VariableFont_wght',
      lineHeight: 20,
      letterSpacing: 0,
   },
})