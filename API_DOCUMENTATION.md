# API Documentation

## Base URL
- **Development**: `http://localhost:3000/api`
- **Production**: `https://your-backend-url.com/api`

---

## Authentication Endpoints

### POST `/auth/signup`
Register a new user account.

**Request Body:**
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "message": "newUser added successfully"
}
```

---

### POST `/auth/signin`
Sign in an existing user.

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "accessToken": "string",
  "refreshToken": "string",
  "username": "string",
  "email": "string",
  "isAdmin": false,
  "isUser": true,
  "isVendor": false,
  "_id": "string"
}
```

---

### POST `/auth/google`
Sign in or sign up using Google OAuth.

**Request Body:**
```json
{
  "email": "string",
  "name": "string",
  "photo": "string"
}
```

---

### POST `/auth/refreshToken`
Refresh access token using refresh token.

**Headers:**
```
Authorization: Bearer <refreshToken>,<accessToken>
```

**Response:**
```json
{
  "accessToken": "string",
  "refreshToken": "string"
}
```

---

## User Endpoints

### GET `/user/profile`
Get user profile information.

**Headers:**
```
Authorization: Bearer <accessToken>
```

**Response:**
```json
{
  "username": "string",
  "email": "string",
  "profilePicture": "string",
  "phoneNumber": "string",
  "address": "string"
}
```

---

## Vehicle Endpoints

### GET `/vendor/vehicles`
Get all available vehicles.

**Query Parameters:**
- `location` (optional)
- `category` (optional)
- `priceRange` (optional)

**Response:**
```json
[
  {
    "_id": "string",
    "name": "string",
    "brand": "string",
    "model": "string",
    "price": number,
    "images": ["string"],
    "location": "string",
    "available": boolean
  }
]
```

---

## Booking Endpoints

### POST `/user/bookings`
Create a new booking.

**Headers:**
```
Authorization: Bearer <accessToken>
```

**Request Body:**
```json
{
  "vehicleId": "string",
  "startDate": "ISO 8601 date string",
  "endDate": "ISO 8601 date string",
  "pickupLocation": "string",
  "dropoffLocation": "string"
}
```

---

## Error Responses

All endpoints may return the following error format:

```json
{
  "success": false,
  "message": "Error description",
  "statusCode": 400
}
```

**Common Status Codes:**
- `200` - Success
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

---

## Authentication

Most endpoints require authentication using JWT tokens:

1. Sign in to get `accessToken` and `refreshToken`
2. Include in requests: `Authorization: Bearer <accessToken>`
3. Access tokens expire in 15 minutes
4. Use `/auth/refreshToken` to get new access token
5. Refresh tokens expire in 7 days

---

For more details, see the source code or contact the development team.
