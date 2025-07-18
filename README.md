# Project README

# Iteration 3: Functionalities Implemented

## Functionalities Included

1. **Notification Management**
- A notification feature has been added, enabling users to set reminders for specific events.
- **Expo Notifications** is used to handle notification scheduling.
- Users can select a reminder time (e.g., 5 minutes, 15 minutes, 1 hour) before an event using a dropdown menu.
- Notifications include details such as event name and reminder message, ensuring timely alerts.
- Firebase Firestore is used to store reminder data in the "Reminder" collection and update the user’s document with the reminder ID.
- Sign-in is required to set reminders, linking them to the authenticated user’s account.

<img src="https://github.com/user-attachments/assets/a1cb6500-775a-42d5-ad9a-8efcf8142621" alt="Home Screen" width="200" height="400" />
<img src="https://github.com/user-attachments/assets/0b3a87da-6ce1-4f87-8b18-ce7c94f2a217" alt="Home Screen" width="200" height="400" />
<img src="https://github.com/user-attachments/assets/f2e9cee4-d4a9-447e-b7dd-4aa0510f97de" alt="Home Screen" width="200" height="400" />
<img src="https://github.com/user-attachments/assets/56c323f6-d69c-4a66-9aae-136057862d4a" alt="Home Screen" width="200" height="400" />
<img src="https://github.com/user-attachments/assets/b2a6dea6-45da-485c-94de-630e4b35beeb" alt="Home Screen" width="200" height="400" />
<img src="https://github.com/user-attachments/assets/2c054412-0041-4d0f-a87b-208757b4cf76" alt="Home Screen" width="200" height="400" />
<img src="https://github.com/user-attachments/assets/ffe43ce5-bf30-441e-8ad8-decb4936858a" alt="Home Screen" width="200" height="400" />
<img src="https://github.com/user-attachments/assets/806b6e88-0c13-49e7-8df6-10849eab1c41" alt="Home Screen" width="200" height="400" />


# Iteration 2: Functionalities Implemented

## Functionalities Included

1. **Authentication**
- User authentication has been implemented, allowing users to securely log in and log out of the application.
- Firebase Authentication is used to manage user accounts.
- Users can browse the **Home**, **Listed Products**, and **Events Information** sections anonymously.
- Sign-in is required to:
  - List a product for sale.
  - Access the **My Account** section.
  - Like a product / Mark an event.

2. **Camera Use**
   - The app integrates the device's camera to allow users to capture photos for specific functionalities, such as adding a profile picture (pending) or uploading product images (done).

3. **Location Use**
   - Location services have been integrated to fetch and display the user's current location or to select a specific location.
   - An interactive map is included, marked with various event locations, allowing users to find nearby events.

4. **External API Use**
   - An external API (weather information with OpenWeather) is integrated into the app to fetch and display real-time data for enhanced functionality .

## Pending Functionalities

1. **Notifications**
   - Implementation of local notifications is planned for future iterations to improve user engagement and alertness.



<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: space-between;">

<img src="https://github.com/user-attachments/assets/73979402-1a9a-40b9-b2f4-24b277e87505" alt="Home Screen" width="200" height="400" />
<img src="https://github.com/user-attachments/assets/f6e6336b-4d8a-4bc6-935a-5ca260c80b65" alt="Simulator Screenshot 1" width="200" height="400" />
<img src="https://github.com/user-attachments/assets/e15ffea9-9315-429d-b8b8-874ef4ac5e4a" alt="Simulator Screenshot 2" width="200" height="400" />
<img src="https://github.com/user-attachments/assets/8bffb156-221d-4b0c-877d-bc810f8560d3" alt="Simulator Screenshot 3" width="200" height="400" />
<img src="https://github.com/user-attachments/assets/542f22d6-fa76-46e0-a2ce-0b66d5d8d1e4" alt="Simulator Screenshot 4" width="200" height="400" />
<img src="https://github.com/user-attachments/assets/02782ded-8972-4ffc-af20-67a56a7ca180" alt="Simulator Screenshot 5" width="200" height="400" />

<img src="https://github.com/user-attachments/assets/6d31421a-0241-45df-b564-d2419e0a3988" alt="Simulator Screenshot 7" width="200" height="400" />

</div>

# Project Directory Structure
```plaintext
├── App.js                        # Haoyi and Jie worked on updating the stack structure and auth structure
├── Component 
│   ├── EventItem.js              # Jie updated style and tested Firestore configuration on the event collection
│   ├── Header.js                 # Haoyi and Jie worked on header styling and user favorite functionality
│   ├── ImageManager.js           # Haoyi worked on the ImageManager
│   ├── ItemsList.js              # Haoyi and Jie worked on ItemsList to conditionally render product and event information
│   ├── LocationManager.js        # Jie worked on Location Manager
│   ├── Login.js                  # Haoyi and Jie worked on the Login page
│   ├── Map.js                    # Jie worked on map markers and location selection
│   ├── PressableItem.js          # No updates
│   ├── ProductItem.js            # Haoyi and Jie updated style, image picker, and like functionality
│   ├── RequireAuth.js            # Haoyi and Jie worked on authentication
│   ├── Signup.js                 # Haoyi and Jie updated the Signup screen, styled it, and added new fields
│   └── Weather.js                # Jie worked on the Weather API
├── Firebase
│   ├── firebaseHelper.js         # Haoyi and Jie updated the helper functions
│   └── firebaseSetup.js          # Firebase setup by Jie
├── README.md
├── Screen
│   ├── EditProfile.js            # Haoyi updated the Edit Profile screen
│   ├── Event.js                  # Jie worked on the Event screen
│   ├── EventDetail.js            # No updates
│   ├── Home.js                   # Added external Weather API display
│   ├── MyAccount.js              # Jie updated the My Account screen
│   ├── ProductDetail.js          # Haoyi and Jie updated Product Detail style and added camera functionality
│   ├── ProductList.js            # No updates
│   ├── Sell.js                   # Haoyi and Jie updated the Sell screen for conditional rendering of new and updated listings
│   ├── Shop.js                   # No updates
│   └── UserFavorite.js           # Haoyi worked on User Favorite functionality
├── Style
│   ├── Color.js                  # No updates
│   └── Styles.js                 # Style contributions shared equally
├── app.json
├── assets                        # Static assets like images and icons
├── babel.config.js
├── package-lock.json
├── package.json
├── screenshots
│   └── Shopscreen.png
└── tree_structure.txt

```

# Contributions Overview

## Jie
- Set up navigation in **App.js** and configured Firebase (**firebaseHelper.js**, **firebaseSetup.js**).
- Implemented the **Home.js** screen with scrolling images.
- Worked on **Event.js**, **Sell.js**, and **Shop.js** screens.
- Integrated Weather API in **Weather.js**.
- Updated the **MyAccount.js** screen to display user data.
- Implemented map markers and location selection in **Map.js**.
- Worked on location management in **LocationManager.js**.
- Tested Firestore configurations and updated styles in **EventItem.js**.
- Contributed to authentication in **RequireAuth.js**.
- Contributed equally to styling in **Color.js** and **Styles.js**.
- Collaborated on CRUD functionality for products, including adding, updating, deleting, and reading operations.

## Haoyi
- Structured components and created reusable components like **Header.js**, **ItemsList.js**, **PressableItem.js**, and **ProductItem.js**.
- Updated styles and integrated the image picker and like functionality in **ProductItem.js**.
- Worked on **ProductList.js**, rendering products based on category.
- Developed the **UserFavorite.js** screen to display datasets like `likedProducts` and `interestedEvents`.
- Updated the **EditProfile.js** screen.
- Collaborated on the login and signup pages (**Login.js** and **Signup.js**).
- Contributed equally to styling in **Color.js** and **Styles.js**.
- Contributed to authentication in **RequireAuth.js**.
- Worked on camera functionality and image picker integration.
- Collaborated on CRUD functionality for products, including adding, updating, deleting, and reading operations.





# Project Overview Iteration 1
This project is a marketplace application designed for buying and selling golf equipment. It allows users to browse listings by category, post new items for sale, and view user profiles. The app features navigation, Firebase integration.


## Features
- **Product Listings**: Users can view, add, update, and delete product listings.
- **User Profiles**: Displays user information after login and registration.
- **Event Information**: Users can view and interact with golf-related events.
- **Category-Based Browsing**: Product listings are organized by categories for easy navigation.

## File Structure
```plaintext
├── App.js                        # Main app setup (Jie set up the navigation)
├── Component                     # Component directory (Haoyi created component breakdown)
│   ├── Header.js 
│   ├── ItemsList.js

│   ├── PressableItem.js

│   ├── EventItem.js
│   └── ProductItem.js

├── Firebase       
              # Firebase configuration and helper functions (Jie set up Firebase, Haoyi updated read data functions, both memeber tested CRUD implementations on individual account)
│   ├── firebaseHelper.js
│   └── firebaseSetup.js
├── Screen                        # Screens for various app features
│   ├── Event.js                  # Event information screen (Haoyi)
│   ├── EventDetail.js            # Event details screen (Haoyi)
│   ├── Home.js                   # Home screen with scrolling images (contributed by Jie) (in progress)
│   ├── MyAccount.js              # Displays user account information upon login (Haoyi's contribution) (in progress)
│   ├── ProductDetail.js          # Detailed view of individual products (in progress)
│   ├── ProductList.js            # Renders product listings by category (Haoyi’s contribution) (in progress)
│   ├── Sell.js                   # Sell screen setup by Jie (in progress)
│   ├── UserFavorite.js           # Conditionally renders user's choice of dataset from MyAccount screen (LikedProducts, myListings..) (Haoyi)
│   └── Shop.js                   # Shop screen setup and CRUD testing on Product collection by Jie 
├── Style                         # Styles shared between components and screens
│   ├── Color.js
│   └── Styles.js                 # Style contributions shared equally
├── sreenshots
│   └── Shopscreen.png
├── assets                        # Static assets like images and icons
│   ├── Men.jpg
│   ├── accessories.jpg
│   ├── adaptive-icon.png
│   ├── club.jpg
│   ├── favicon.png
│   ├── golfApparel.png
│   ├── golfCourse.jpg
│   ├── greenfuture.png
│   ├── icon.png
│   ├── kids.jpg
│   ├── parteelogo.jpg
│   ├── parteelogo.png
│   ├── parteesplash.jpg
│   ├── parteesplash.png
│   ├── socialGolf.png
│   ├── splash.png
│   └── women.jpg
├── app.json
├── babel.config.js
├── navigations
│   └── Screens.js                # Screen navigation setup (Pending)
├── package-lock.json
└── package.json
```

## Contributions Breakdown

### Jie:
- Set up **navigation** in `App.js`.
- Configured **Firebase** and tested it on an individual Firebase account (`firebaseHelper.js`, `firebaseSetup.js`).
- Worked on **Home screen** with scrolling images.
- Created **Sell.js** and **Shop.js** screens.
- Implemented **CRUD functionality** for products, including add, update, delete, and read operations on the Product collection.

### Haoyi:
- Structured **Component breakdown** and created reusable components like `Header.js`, `ItemsList.js`, `PressableItem.js`, and `ProductItem.js`.
- Worked on **ProductList.js**, rendering products based on category.
- Developed the **MyAccount.js** screen to display user information after login.
- Constructed the **UserFavorite.js** screen to display datasets belonging to the logged in user 'likedProducts, interestedEvents..'

### Shared Style Contributions:
- Both Jie and Haoyi equally contributed to styling components and screens, including colors and shared styles (`Color.js` and `Styles.js`).

## Screenshots
*Include screenshots of key screens, such as Home, Product List, My Account, and Product Detail.*




# Data Model Overview

## 1. Product Collection

### Fields:
- **id**: Unique identifier for each product.
- **title**: Title of the product listing.
- **description**: Description of the item.
- **listingDate**: Date the item was listed.
- **condition**: Condition of the item (e.g., new, used).
- **pictures**: Array of URLs linking to images of the product.
- **price**: Price of the product.
- **owner**: Reference or ID linking to the owner in the `user` collection.

### CRUD Operations:
- **Create**: Add a new product to the collection with all necessary fields filled in.
- **Read**: Retrieve product details based on various filters, such as category, condition, owner, and price.
- **Update**: Modify product details (e.g., update description, condition, pictures, price).
- **Delete**: Remove a product from the collection, which may also trigger updates in the `user` collection where it’s marked as a listed or favorite item.

---

## 2. User Collection

### Fields:
- **username**: Unique identifier or name of the user.
- **email**: User’s email address.
- **phone**: Contact number.
- **dateOfBirth**: User’s birth date.
- **listedItems**: Array of `id`s of products listed by the user, referencing the `product` collection.
- **favouriteItems**: Array of `id`s of products marked as favorites, referencing the `product` collection.
- **interestedEvents**: Array of `id`s of events the user is interested in, referencing the `event` collection.

### CRUD Operations:
- **Create**: Register a new user with their personal information.
- **Read**: Retrieve user details, including their listings, favorite items, and interested events.
- **Update**: Update user information or modify the arrays for `listedItems` and `favouriteItems` (e.g., add or remove a product). When a user marks interest in an event, the event’s `id` is added to the `interestedEvents` array.
- **Delete**: Remove user data, which may also trigger deletions or modifications in the `product` collection if listings are specific to this user. If a user’s data is deleted, their `interestedEvents` are also removed, without impacting the `event` collection itself.

---

## 3. Event Collection

### Fields:
- **id**: Unique identifier for each event.
- **title**: Title of the event.
- **description**: Description of the event.
- **location**: Location information for the event (could be a string or a structured address object).

### CRUD Operations:
- **Create**: Add a new event to the collection.
- **Read**: Retrieve event details for display or filtering by location, title, etc.

---

## Relationships

- **User and Product**: The `user` collection has fields referencing the `product` collection to list the items they own or have marked as favorites.
- **Product and User Ownership**: Each product entry has an `owner` field that references the user who listed it.
- **User and Event**: The `interestedEvents` field in the `user` collection references the `event` collection, allowing users to track events they are interested in attending or viewing.
