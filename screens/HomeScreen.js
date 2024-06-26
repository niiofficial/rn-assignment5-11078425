import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Card, Button } from 'react-native-elements';
import { useTheme } from '../ThemeContext';

const HomeScreen = () => {
  const { isDarkTheme } = useTheme();
  const styles = createStyles(isDarkTheme);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} 
          style={styles.profileImage}
        />
        <View style={styles.headerText}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.nameText}>Tackie Richmond</Text>
        </View>
        <Ionicons name="search" size={24} color={isDarkTheme ? 'white' : 'black'} />
      </View>

      <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Text style={styles.cardNumber}>4562 6672 8899 0207</Text>
          <View style={styles.cardDetails}>
            <Text style={styles.cardText}>Tackie Richmond</Text>
            <Text style={styles.cardText}>22/2003</Text>
            <Text style={styles.cardText}>2789</Text>
          </View>
          <Text style={styles.cardText}>Mastercard</Text>
        </View>
      </Card>

      <View style={styles.actions}>
        <Button 
          icon={<Ionicons name="arrow-up" size={24} color="white" />}
          buttonStyle={styles.actionButton}
          containerStyle={styles.actionButtonContainer}
        />
        <Button 
          icon={<Ionicons name="arrow-down" size={24} color="white" />}
          buttonStyle={styles.actionButton}
          containerStyle={styles.actionButtonContainer}
        />
        <Button 
          icon={<FontAwesome name="dollar" size={24} color="white" />}
          buttonStyle={styles.actionButton}
          containerStyle={styles.actionButtonContainer}
        />
        <Button 
          icon={<Ionicons name="ios-add" size={24} color="white" />}
          buttonStyle={styles.actionButton}
          containerStyle={styles.actionButtonContainer}
        />
      </View>

      <View style={styles.transactionHeader}>
        <Text style={styles.transactionTitle}>Transaction</Text>
        <Text style={styles.sellAll}>Sell All</Text>
      </View>

      <View style={styles.transactionList}>
        <View style={styles.transactionItem}>
          <Ionicons name="logo-apple" size={24} color="white" />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionText}>Apple Store</Text>
            <Text style={styles.transactionSubText}>Entertainment</Text>
          </View>
          <Text style={styles.transactionAmount}>- $5,99</Text>
        </View>
        <View style={styles.transactionItem}>
          <Ionicons name="logo-spotify" size={24} color="green" />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionText}>Spotify</Text>
            <Text style={styles.transactionSubText}>Music</Text>
          </View>
          <Text style={styles.transactionAmount}>- $12,99</Text>
        </View>
        <View style={styles.transactionItem}>
          <Ionicons name="arrow-down" size={24} color="white" />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionText}>Money Transfer</Text>
            <Text style={styles.transactionSubText}>Transaction</Text>
          </View>
          <Text style={styles.transactionAmount}>$300</Text>
        </View>
        <View style={styles.transactionItem}>
          <Ionicons name="cart" size={24} color="white" />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionText}>Grocery</Text>
            <Text style={styles.transactionSubText}>Shopping</Text>
          </View>
          <Text style={styles.transactionAmount}>- $88</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const createStyles = (isDarkTheme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isDarkTheme ? '#1a1a2e' : '#ffffff',
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    flex: 1,
    marginLeft: 10,
  },
  welcomeText: {
    color: isDarkTheme ? 'white' : 'black',
    fontSize: 16,
  },
  nameText: {
    color: isDarkTheme ? 'white' : 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContainer: {
    backgroundColor: isDarkTheme ? '#162447' : '#f0f0f0',
    borderRadius: 10,
    padding: 15,
  },
  cardContent: {
    alignItems: 'center',
  },
  cardNumber: {
    color: isDarkTheme ? 'white' : 'black',
    fontSize: 18,
    letterSpacing: 2,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  cardText: {
    color: isDarkTheme ? 'white' : 'black',
    fontSize: 14,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  actionButton: {
    backgroundColor: isDarkTheme ? '#162447' : '#f0f0f0',
    borderRadius: 10,
    padding: 10,
  },
  actionButtonContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  transactionTitle: {
    color: isDarkTheme ? 'white' : 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sellAll: {
    color: '#21e6c1',
    fontSize: 14,
  },
  transactionList: {
    marginVertical: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  transactionText: {
    color: isDarkTheme ? 'white' : 'black',
    fontSize: 16,
  },
  transactionSubText: {
    color: 'gray',
    fontSize: 12,
  },
  transactionAmount: {
    color: isDarkTheme ? 'white' : 'black',
    fontSize: 16,
  },
});

export default HomeScreen;
