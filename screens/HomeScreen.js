import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Card, Button } from 'react-native-elements';
import { ThemeContext } from '../ThemeContext';

const HomeScreen = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <View style={styles.header}>
        <Image 
          source={require('imgs\profile.jpg')} 
          style={styles.profileImage}
        />
        <View style={styles.headerText}>
          <Text style={[styles.welcomeText, { color: theme.textColor }]}>Welcome back,</Text>
          <Text style={[styles.nameText, { color: theme.textColor }]}>Tackie Richmond</Text>
        </View>
        <Ionicons name="search" size={24} color={theme.textColor} />
      </View>

      <Card containerStyle={[styles.cardContainer, { backgroundColor: theme.cardBackgroundColor }]}>
        <View style={styles.cardContent}>
          <Text style={[styles.cardNumber, { color: theme.textColor }]}>4562 6672 8899 0207</Text>
          <View style={styles.cardDetails}>
            <Text style={[styles.cardText, { color: theme.textColor }]}>Tackie Richmond</Text>
            <Text style={[styles.cardText, { color: theme.textColor }]}>22/2003</Text>
            <Text style={[styles.cardText, { color: theme.textColor }]}>2789</Text>
          </View>
          <Text style={[styles.cardText, { color: theme.textColor }]}>Mastercard</Text>
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
        <Text style={[styles.transactionTitle, { color: theme.textColor }]}>Transaction</Text>
        <Text style={styles.sellAll}>Sell All</Text>
      </View>

      <View style={styles.transactionList}>
        <View style={styles.transactionItem}>
          <Ionicons name="logo-apple" size={24} color="white" />
          <View style={styles.transactionDetails}>
            <Text style={[styles.transactionText, { color: theme.textColor }]}>Apple Store</Text>
            <Text style={[styles.transactionSubText, { color: theme.textColor }]}>Entertainment</Text>
          </View>
          <Text style={[styles.transactionAmount, { color: theme.textColor }]}>- $5,99</Text>
        </View>
        <View style={styles.transactionItem}>
          <Ionicons name="logo-spotify" size={24} color="green" />
          <View style={styles.transactionDetails}>
            <Text style={[styles.transactionText, { color: theme.textColor }]}>Spotify</Text>
            <Text style={[styles.transactionSubText, { color: theme.textColor }]}>Music</Text>
          </View>
          <Text style={[styles.transactionAmount, { color: theme.textColor }]}>- $12,99</Text>
        </View>
        <View style={styles.transactionItem}>
          <Ionicons name="arrow-down" size={24} color="white" />
          <View style={styles.transactionDetails}>
            <Text style={[styles.transactionText, { color: theme.textColor }]}>Money Transfer</Text>
            <Text style={[styles.transactionSubText, { color: theme.textColor }]}>Transaction</Text>
          </View>
          <Text style={[styles.transactionAmount, { color: theme.textColor }]}>$300</Text>
        </View>
        <View style={styles.transactionItem}>
          <Ionicons name="cart" size={24} color="white" />
          <View style={styles.transactionDetails}>
            <Text style={[styles.transactionText, { color: theme.textColor }]}>Grocery</Text>
            <Text style={[styles.transactionSubText, { color: theme.textColor }]}>Shopping</Text>
          </View>
          <Text style={[styles.transactionAmount, { color: theme.textColor }]}>- $88</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 16,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContainer: {
    borderRadius: 10,
    padding: 15,
  },
  cardContent: {
    alignItems: 'center',
  },
  cardNumber: {
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
    fontSize: 14,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  actionButton: {
    backgroundColor: '#162447',
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
    fontSize: 16,
  },
  transactionSubText: {
    fontSize: 12,
  },
  transactionAmount: {
    fontSize: 16,
  },
});

export default HomeScreen;
