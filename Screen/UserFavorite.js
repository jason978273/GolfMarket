import { Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { globalStyles } from '../Style/Styles'
import ItemsList from '../Component/ItemsList'
import { getUserLikesOrInterests, fetchUserListingsOrReminders } from '../Firebase/firebaseHelper'


export default function UserFavorite({navigation, route}) {
  const { type, userId, myListings } = route.params; // 'Product' or 'Event'
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  //set the title of the screen based on the type of items
  useEffect(() => {
    navigation.setOptions({ 
      title: myListings ? 'My Listings' : type === 'Product' ? 'Liked Products' : 'Interested Events'});
  }
  , [navigation, type, myListings]);

  const fetchItems = async () => {
    try {
      if (myListings) {
        data = await fetchUserListingsOrReminders(userId, 'Product'); // Fetch user's own listings
      } else {
        data = await getUserLikesOrInterests(userId, type); 
      }
      setItems(data);
    } catch (error) {
      console.log(`Error fetching ${type}:`, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [type, userId, myListings]);

  if (loading) {
    return (
      <View style={globalStyles.container}>
        {myListings ? <Text>Loading My listings</Text>:<Text>Loading {type === 'Product' ? 'liked products' : 'interested events'}...</Text>}
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      {items.length > 0 ? (
      <ItemsList items={items} navigation={navigation} type={type} />
    ) : myListings ? (
      <Text>No listings yet</Text>
    ) : (
      <Text>No {type === 'Product' ? 'liked products' : 'interested events'}</Text>
    )}
    </View>
  );
}
