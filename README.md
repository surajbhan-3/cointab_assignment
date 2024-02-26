# cointab_assignment



### Page 1: Home Page

**Description:**
Upon opening the website, users are welcomed with a prominent heading stating "Cointab SE-ASSIGNMENT." Additionally, a button named "All Users" is displayed on the webpage.

**Functionality:**
1. Clicking the "All Users" button fetches data from the specified API ('https://jsonplaceholder.typicode.com/users').
2. Essential user information is displayed, including:
   - Name
   - Email
   - Phone
   - Website
   - City
   - Company
3. Alongside the displayed user information, two buttons, "Open" and "Add," are provided.
4. Initially, only the “Add” button is visible.
5. Clicking the "Add" button stores all the user information retrieved from the API in the Mongodb database.
6. If the database contains the user's entry, the "Open" button is shown, and the “Add” button is hidden.
7. Clicking the "Open" button opens a new Post page.

### Page 2: Post Page

**Description:**
The Post Page fetches data from the API ('https://jsonplaceholder.typicode.com/posts?userId=${userId}') for the specific userId stored in the database.

**Functionality:**
1. Essential user information is displayed, including:
   - Name (corresponding to the specific userId)
   - Title
   - Body
   - Company (associated with the particular userId)
2. Two buttons, "Bulk Add" and "Download In Excel," are placed at the top of the page.
3. Initially, only the "Bulk Add" button is visible.
4. Clicking the "Bulk Add" button stores all the posts present on that page into the Mongodb database.
5. If the database contains post entries for the specific userId, the "Bulk Add" button is hidden, and the "Download in Excel" button is shown.
6. Clicking the "Download in Excel" button initiates the download of an Excel file containing all the post information for that particular user.

### Technologies Used:

- **Node.js:**
  - Utilized as the server-side runtime environment.
  
- **MongoDb Database:**
  - Employed to store user and post data efficiently.
  
- **Express.js:**
  - Framework used to build the web application.
  
- **JavaScript (Frontend and Backend):**
  - Used for both client-side and server-side scripting.
  
- **HTML/CSS:**
  - Responsible for structuring and styling the web pages.
  
### Project Highlights:

- **Seamless Integration:**
  - Demonstrates effective integration of Node.js, Express.js, MongoDb, and other technologies.
  
- **API Interaction:**
  - Fetches data from the provided API endpoints to display user and post information dynamically.
  
- **Database Operations:**
  - Implements database operations such as storing user and post information and checking for existing entries.
  
- **User Interaction:**
  - Provides a user-friendly interface with buttons for adding, opening, bulk adding, and downloading in Excel.
  
- **Cloud Hosting:**
  - Cyclic.sh.

This project showcases a well-structured and interactive web application that fulfills the specified business requirements while utilizing a stack of modern technologies.


## API Documentation

### Welcome
- **Route**: `/`
- **Method**: GET
- **Description**: Welcomes users to the backend.
- **Response**:
  - Success: 200 OK
    ```
    "Welcome to backend"
    ```

### User Routes

#### Get All User Data
- **Route**: `/api/user/userdata`
- **Method**: GET
- **Description**: Retrieves all user data from the database.
- **Response**:
  - Success: 200 OK
    ```
    {
      "userIDs": ["userId1", "userId2", ...]
    }
    ```
  - Error: 500 Internal Server Error

#### Add New User
- **Route**: `/api/user/addNewUser`
- **Method**: POST
- **Description**: Adds a new user to the database.
- **Request Body**:
  ```
  {
    "name": "User Name",
    "email": "user@example.com",
    "phone": "1234567890",
    "website": "https://example.com",
    "city": "City Name",
    "company": "Company Name",
    "userId": "uniqueUserId"
  }
  ```
- **Response**:
  - Success: 200 OK
    ```
    {
      "message": "The user Data is added successfully"
    }
    ```
  - Error: 500 Internal Server Error

#### Get User Data by ID
- **Route**: `/api/user/:id`
- **Method**: GET
- **Description**: Retrieves user data by user ID.
- **Parameters**:
  - `id`: User ID
- **Response**:
  - Success: 200 OK
    ```
    {
      "data": {
        // User Data Object
      }
    }
    ```
  - Error: 500 Internal Server Error

### Post Routes

#### Add Bulk Posts
- **Route**: `/api/post/addPostInBulk`
- **Method**: POST
- **Description**: Adds bulk posts to the database.
- **Request Body**:
  ```
  {
    "data": [
      {
        // Post Data Object
      },
      {
        // Post Data Object
      },
      ...
    ]
  }
  ```
- **Response**:
  - Success: 200 OK
    ```
    {
      "message": "Bulk posts added successfully",
      "bulkPostAdded": [
        // Array of added post objects
      ]
    }
    ```
  - Error: 500 Internal Server Error

#### Verify User ID
- **Route**: `/api/post/verifyUserId/:userId`
- **Method**: GET
- **Description**: Verifies if a user ID exists in the database.
- **Parameters**:
  - `userId`: User ID to verify
- **Response**:
  - Success: 200 OK
    ```
    {
      "exists": true,
      "message": "userId already exists in the database"
    }
    ```
    or
    ```
    {
      "exists": false,
      "message": "userId does not exist in the database"
    }
    ```
  - Error: 500 Internal Server Error


